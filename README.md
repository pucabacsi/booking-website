# Aura Stays - Luxury Vacation Rentals & Booking Hub

A modern, high-end presentation and direct reservation website designed for luxury vacation rentals, villas, and apartments.

Fully optimized for deployment on **Cyberfolks (Romania) `cyber_UP!`** hosting with automated **2-Way iCal Synchronization** for **Airbnb** and **Booking.com**.

---

## 🌟 Key Features

- **Multi-Channel iCal 2-Way Sync**: Automatically synchronizes availability between Airbnb, Booking.com, and local website direct bookings to prevent double-bookings.
- **Interactive Multi-Channel Availability Calendar**: Unified visual grid displaying date availability color-coded by channel.
- **Direct VIP Booking Inquiry Modal**: Direct reservation workflow enabling guests to book without third-party commission fees.
- **High-Impact Glassmorphic Design**: Responsive, mobile-first design with smooth transitions and curated luxury visual assets.
- **LiteSpeed & cPanel Ready**: Includes `ical-sync.php` background script optimized for Cyberfolks cPanel Cron Jobs.

---

## 📂 Project Structure

```
booking-website/
├── index.html            # Main presentation markup & SEO metadata
├── style.css             # Glassmorphic luxury styling system
├── app.js                # Calendar engine & interactive modal scripts
├── ical-sync.php         # Cyberfolks cPanel background iCal sync script
└── assets/
    └── images/           # High-resolution property & hero visual assets
        ├── hero_bg.png
        ├── seaside_villa.png
        ├── alpine_chalet.png
        └── city_penthouse.png
```

---

## 🚀 Cyberfolks (`cyber_UP!`) Deployment Guide

1. **Upload Files**: Upload the contents of this repository to your `public_html` directory via cPanel File Manager or FTP.
2. **Setup iCal Background Cron Job**:
   In Cyberfolks cPanel -> **Cron Jobs**, add a job to run every 15 minutes:
   ```bash
   /usr/local/bin/php /home/YOUR_USERNAME/public_html/ical-sync.php >/dev/null 2>&1
   ```
3. **Configure iCal Feed URLs**:
   Open `ical-sync.php` and replace the placeholder URLs with your official Airbnb and Booking.com `.ics` export links.

---

## 💻 Local Preview

You can test the site locally using any HTTP server:

```bash
# Using Python
python -m http.server 8080

# Or using Node.js npx
npx http-server -p 8080
```
Then open `http://localhost:8080` in your browser.
