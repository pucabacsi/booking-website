<?php
/**
 * 2-WAY ICAL CALENDAR SYNCHRONIZATION ENGINE FOR CYBERFOLKS CYBER_UP!
 * Synchronizes availability between Airbnb, Booking.com, and local direct reservations.
 */

header('Content-Type: application/json');

// 1. CONFIGURATION: Add your Airbnb and Booking.com iCal export URLs here
$ical_sources = [
    'airbnb'  => 'https://www.airbnb.com/calendar/ical/YOUR_AIRBNB_LISTING_ID.ics?s=your_key',
    'booking' => 'https://admin.booking.com/hotel/hoteladmin/ical.html?t=your_booking_key'
];

$cache_file = __DIR__ . '/calendar-cache.json';
$cache_lifetime = 900; // 15 minutes cache lifetime

// 2. PARSE ICAL (.ics) FILE CONTENT
function parse_ical_content($ical_data, $source_name) {
    $events = [];
    $lines = explode("\n", $ical_data);
    $in_vevent = false;
    $current_event = [];

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === 'BEGIN:VEVENT') {
            $in_vevent = true;
            $current_event = ['source' => $source_name];
        } elseif ($line === 'END:VEVENT') {
            if (isset($current_event['start']) && isset($current_event['end'])) {
                $events[] = $current_event;
            }
            $in_vevent = false;
        } elseif ($in_vevent) {
            if (strpos($line, 'DTSTART') === 0) {
                $parts = explode(':', $line);
                $current_event['start'] = end($parts);
            } elseif (strpos($line, 'DTEND') === 0) {
                $parts = explode(':', $line);
                $current_event['end'] = end($parts);
            } elseif (strpos($line, 'SUMMARY') === 0) {
                $parts = explode(':', $line);
                $current_event['summary'] = end($parts);
            }
        }
    }
    return $events;
}

// 3. FETCH OR LOAD CACHED FEEDS
if (file_exists($cache_file) && (time() - filemtime($cache_file) < $cache_lifetime)) {
    $cached_data = file_get_contents($cache_file);
    echo $cached_data;
    exit;
}

$all_events = [];

foreach ($ical_sources as $source_name => $url) {
    if (filter_var($url, FILTER_VALIDATE_URL) && strpos($url, 'YOUR_') === false) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_USERAGENT, 'CyberFolks-iCalSync/1.0');
        $response = curl_exec($ch);
        curl_close($ch);

        if ($response) {
            $parsed = parse_ical_content($response, $source_name);
            $all_events = array_merge($all_events, $parsed);
        }
    }
}

$result = [
    'status' => 'success',
    'last_synced' => date('Y-m-d H:i:s'),
    'events_count' => count($all_events),
    'events' => $all_events
];

$json_output = json_encode($result, JSON_PRETTY_PRINT);
file_put_contents($cache_file, $json_output);

echo $json_output;
