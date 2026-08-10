/* ==========================================================================
   LITE RESIDENCE ORADEA - SCANDINAVIAN LUXURY APARTHOTEL ENGINE
   ========================================================================== */

// 100% Visually Verified Spa, Jacuzzi, Sauna, Building Exterior & Stairwell Excludes
const WELLNESS_EXCLUDE = new Set([
  // Room 01 shared/spa/exterior photos
  'room_01_img_6.jpg', 'room_01_img_15.jpg', 'room_01_img_16.jpg', 'room_01_img_17.jpg', 'room_01_img_18.jpg', 'room_01_img_19.jpg',
  
  // Room 02 shared/spa/exterior photos
  'room_02_img_4.jpg', 'room_02_img_12.jpg', 'room_02_img_13.jpg', 'room_02_img_14.jpg', 'room_02_img_15.jpg', 'room_02_img_16.jpg', 'room_02_img_17.jpg',
  
  // Room 03 shared/spa/exterior photos
  'room_03_img_1.jpg', 'room_03_img_2.jpg', 'room_03_img_4.jpg', 'room_03_img_16.jpg', 'room_03_img_17.jpg', 'room_03_img_18.jpg', 'room_03_img_19.jpg', 'room_03_img_20.jpg', 'room_03_img_21.jpg',
  
  // Room 04 shared/spa/exterior photos
  'room_04_img_1.jpg', 'room_04_img_13.jpg', 'room_04_img_14.jpg', 'room_04_img_15.jpg', 'room_04_img_16.jpg', 'room_04_img_17.jpg',
  
  // Room 05 shared/spa/exterior photos
  'room_05_img_2.jpg', 'room_05_img_17.jpg', 'room_05_img_18.jpg', 'room_05_img_19.jpg', 'room_05_img_20.jpg', 'room_05_img_21.jpg', 'room_05_img_22.jpg',
  
  // Room 06 shared/spa/exterior photos
  'room_06_img_2.jpg', 'room_06_img_3.jpg', 'room_06_img_14.jpg', 'room_06_img_15.jpg', 'room_06_img_16.jpg', 'room_06_img_17.jpg',
  
  // Room 07 shared/spa/exterior photos
  'room_07_img_17.jpg', 'room_07_img_18.jpg', 'room_07_img_19.jpg', 'room_07_img_20.jpg', 'room_07_img_21.jpg', 'room_07_img_22.jpg', 'room_07_img_23.jpg'
]);

// Helper to generate room gallery excluding ALL wellness spa & exterior photos
function generateCleanRoomGallery(prefix, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    const filename = `${prefix}_img_${i}.jpg`;
    if (!WELLNESS_EXCLUDE.has(filename)) {
      images.push(`assets/images/${filename}`);
    }
  }
  return images;
}

// Dedicated Wellness Section Slideshow Photos
const WELLNESS_IMAGES = [
  'assets/images/room_07_img_17.jpg',
  'assets/images/room_07_img_18.jpg',
  'assets/images/room_07_img_19.jpg',
  'assets/images/room_02_img_16.jpg',
  'assets/images/room_02_img_13.jpg'
];

// ==========================================================================
// MULTI-LANGUAGE TRANSLATION DICTIONARY (RO DEFAULT, HU, EN, DE, ES, FR, IT, PT)
// ==========================================================================
const LANG_CONFIG = {
  ro: { flagImg: 'https://flagcdn.com/w40/ro.png', code: 'RO', label: 'Română' },
  hu: { flagImg: 'https://flagcdn.com/w40/hu.png', code: 'HU', label: 'Magyar' },
  en: { flagImg: 'https://flagcdn.com/w40/gb.png', code: 'EN', label: 'English' },
  de: { flagImg: 'https://flagcdn.com/w40/de.png', code: 'DE', label: 'Deutsch' },
  es: { flagImg: 'https://flagcdn.com/w40/es.png', code: 'ES', label: 'Español' },
  fr: { flagImg: 'https://flagcdn.com/w40/fr.png', code: 'FR', label: 'Français' },
  it: { flagImg: 'https://flagcdn.com/w40/it.png', code: 'IT', label: 'Italiano' },
  pt: { flagImg: 'https://flagcdn.com/w40/pt.png', code: 'PT', label: 'Português' }
};

const TRANSLATIONS = {

  hu: {
    nav_poi: 'Látnivalók & POI',
    poi_subtitle: 'Helyi Útmutató & Látnivalók',
    poi_title: 'Látnivalók a Rezidencia Közelében',
    poi_desc: 'Fedezze fel Nagyvárad legszebb látnivalóit, éttermeit, parkjait és kávézóit, pontos távolságokkal a Lite Residence (Strada Olteniei 64) épületétől.',
    poi_filter_all: 'Összes Látnivaló',
    poi_filter_near: 'A Közelben (< 1 km)',
    poi_filter_dining: 'Éttermek & Kávézók',
    poi_filter_center: 'Történelmi Központ & Spa',
    poi_map_link_text: 'Útvonal a Térképen',
    doc_title: 'Lite Residence Oradea | Luxus Apartmanhotel a Ciuperca-dombnál',
    nav_overview: 'Áttekintés',
    nav_wellness: 'Wellness & Szolgáltatások',
    nav_apartments: 'Apartmanok (01–07)',
    nav_location: 'Elhelyezkedés & Térkép',
    nav_explore_btn: 'Apartmanok Felfedezése →',
    
    hero_badge: 'Új Vendéglátási Koncepció • Nagyvárad',
    hero_title: 'Elegáns Apartmanok a <span>Ciuperca-dombnál</span>',
    hero_subtitle: 'Fedezzen fel 7 modern designer apartmant Nagyváradon, a Ciuperca-domb szomszédságában (Strada Olteniei 64). Élvezze a zárt udvari wellness részleget Jacuzzival & Szaunával, a szobánkénti privát parkolót és a digitális kulcsnélküli bejelentkezést 16:00 órától.',
    hero_stat_1: 'Szervizelt Apartmanok',
    hero_stat_2: 'Jacuzzi & Szauna',
    hero_stat_3: '1 Privát Parkolóhely szobánként',
    hero_stat_4: 'Digitális Self Check-in',
    
    wellness_subtitle: 'Wellness & Kényelem',
    wellness_title: 'Nyugodt Városi Oázis',
    wellness_desc_1: 'A Ciuperca-domb közelében, csendes lakóövezetben található Lite Residence a modern építészeti eleganciát ötvözi a prémium szálláshelyek kényelmével.',
    wellness_desc_2: 'Vendégeink korlátlanul használhatják a zárt belső udvarban található privát szabadtéri wellness részlegünket Jacuzzival és fatüzelésű szaunával.',
    
    amenity_1: 'Jacuzzi & Szauna',
    amenity_2: '1 Privát Parkolóhely szobánként',
    amenity_3: 'Digitális Kulcsnélküli Bejutás',
    amenity_4: 'Nespresso Kávéfőző',
    amenity_5: 'Padlófűtés & Klímaberendezés',
    amenity_6: 'Mosógép & Szárítógép',
    
    apartments_subtitle: 'Apartman Kínálat',
    apartments_title: 'A 7 Rezidencia',
    apartments_desc: 'Kattintson bármelyik fotóra vagy gombra a teljes képgaléria megtekintéséhez és a foglaláshoz.',
    
    view_photos_btn: 'Képek & Foglalás',
    spec_bath: '1 Fürdőszoba',
    
    location_subtitle: 'Elhelyezkedés & Információk',
    location_title: 'Ciuperca-domb, Nagyvárad',
    location_desc: 'Strada Olteniei 64, Nagyvárad, Bihar megye. Csendes lakóövezetben, mindössze pár lépésre a Ciuperca-dombtól.',
    
    policies_title: 'Házirend & Időpontok',
    policy_checkin_title: 'Bejelentkezés (Check-In):',
    policy_checkin_text: '16:00 órától (A digitális belépőkódokat az érkezés napján küldjük)',
    policy_checkout_title: 'Kijelentkezés (Check-Out):',
    policy_checkout_text: '11:00 óráig',
    policy_quiet_title: 'Csendes Időszak:',
    policy_quiet_text: '21:00 és 08:00 között (Aktív zajfigyelő szenzorok működnek)',
    policy_visitors_title: 'Külső Vendégek:',
    policy_visitors_text: 'Kizárólag 09:00 és 21:00 között engedélyezett',
    policy_parking_title: 'Parkolás:',
    policy_parking_text: '1 Privát Parkolóhely szobánként a zárt udvarban',
    policy_starter_title: 'Kezdő Üdvözlőcsomag:',
    policy_starter_text: 'Tartalmazza (toalettpapír, szappan, tusfürdő, mosogatószer, Nespresso kávékapszulák)',
    
    footer_about: 'Új vendéglátási koncepció a Ciuperca-dombnál, Nagyváradon. Managed by Flat White Properties.',
    footer_residences_title: 'Rezidenciák (01–07)',
    footer_contact_title: 'Elhelyezkedés & Kapcsolat',
    footer_address_label: 'Cím:',
    footer_contact_label: 'Kapcsolat:',
    footer_rights: '© 2026 Lite Residence Oradea. Minden jog fenntartva.',
    modal_reserve_btn: 'Foglalás a FlatWhite Properties-en'
  },
  ro: {
    nav_poi: 'Atracții & POI',
    poi_subtitle: 'Ghid Local & Atracții Turistice',
    poi_title: 'Puncte de Interes Lângă Reședință',
    poi_desc: 'Descoperă cele mai frumoase atracții, restaurante gourmet, parcuri și cafenele din Oradea, calculate cu distanța exactă de la Lite Residence (Strada Olteniei 64).',
    poi_filter_all: 'Toate Atracțiile',
    poi_filter_near: 'În Apropiere (< 1 km)',
    poi_filter_dining: 'Restaurante & Cafenele',
    poi_filter_center: 'Centrul Istoric & Spa',
    poi_map_link_text: 'Navighează pe Hărți',
    doc_title: 'Lite Residence Oradea | Apartamente în Regim Hotelier la Dealul Ciuperca',
    nav_overview: 'Prezentare Generală',
    nav_wellness: 'Wellness & Facilități',
    nav_apartments: 'Apartamente (01–07)',
    nav_location: 'Locație & Hartă',
    nav_explore_btn: 'Explorează Apartamentele →',
    
    hero_badge: 'Un Nou Concept în Regim Hotelier • Oradea',
    hero_title: 'Rafinament și Confort la <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Descoperă 7 apartamente moderne de designer, ideale pentru un sejur relaxant lângă Dealul Ciuperca pe Strada Olteniei 64. Bucură-te de o zonă privată de spa în curte cu Jacuzzi & Saună, parcare privată pentru fiecare cameră și check-in digital de la ora 16:00.',
    hero_stat_1: 'Apartamente în Regim Hotelier',
    hero_stat_2: 'Jacuzzi & Saună',
    hero_stat_3: '1 Loc de Parcare Privată per cameră',
    hero_stat_4: 'Self Check-in Digital',
    
    wellness_subtitle: 'Wellness & Confort',
    wellness_title: 'O Oază de Liniște Urbană',
    wellness_desc_1: 'Situat într-o zonă rezidențială liniștită lângă Dealul Ciuperca, Lite Residence îmbină eleganța arhitecturală modernă cu toate facilitățile unei cazări de top.',
    wellness_desc_2: 'Oaspeții beneficiază de acces la zona noastră privată de wellness exterioară, dotată cu ciubăr Jacuzzi și saună din lemn în curtea interioară.',
    
    amenity_1: 'Jacuzzi & Saună',
    amenity_2: '1 Loc de Parcare Privată per cameră',
    amenity_3: 'Acces Digital Keyless',
    amenity_4: 'Espressor Cafea Nespresso',
    amenity_5: 'Încălzire în Pardoseală & Climatizare',
    amenity_6: 'Mașină de Spălat & Uscător',
    
    apartments_subtitle: 'Cazări în Regim Hotelier',
    apartments_title: 'Cele 7 Reședințe',
    apartments_desc: 'Apasă pe orice fotografie sau buton pentru a explora galeria foto completă, dotările camerei și pentru rezervare.',
    
    view_photos_btn: 'Vezi Poze & Rezervă',
    spec_bath: '1 Baie',
    
    location_subtitle: 'Locație & Informații Utile',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Județul Bihor. Situat într-un cartier rezidențial liniștit, la doar câțiva pași de Dealul Ciuperca.',
    
    policies_title: 'Regulamentul Casei & Ore',
    policy_checkin_title: 'Check-In:',
    policy_checkin_text: 'de la ora 16:00 (Codurile de acces digital sunt trimise în ziua sosirii)',
    policy_checkout_title: 'Check-Out:',
    policy_checkout_text: 'până la ora 11:00',
    policy_quiet_title: 'Ore de Liniște:',
    policy_quiet_text: 'între orele 21:00 și 08:00 (Senzori activi de monitorizare a zgomotului)',
    policy_visitors_title: 'Vizitatori Externi:',
    policy_visitors_text: 'Permiși doar între orele 09:00 și 21:00',
    policy_parking_title: 'Parcare:',
    policy_parking_text: '1 Loc de Parcare Privată per cameră în curte',
    policy_starter_title: 'Set Inițial de Bun Venit:',
    policy_starter_text: 'Inclus (hârtie igienică, săpun, gel de duș, detergent de vase, capsule cafea Nespresso)',
    
    footer_about: 'Un nou concept în regim hotelier la Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Reședințe (01–07)',
    footer_contact_title: 'Locație & Rezervări',
    footer_address_label: 'Adresă:',
    footer_contact_label: 'Contact:',
    footer_rights: '© 2026 Lite Residence Oradea. Toate drepturile rezervate.',
    modal_reserve_btn: 'Rezervă pe FlatWhite Properties'
  },
  
  en: {
    nav_poi: 'Attractions & POIs',
    poi_subtitle: 'Local Guide & Tourist Sights',
    poi_title: 'Points of Interest Near Residence',
    poi_desc: 'Explore top attractions, gourmet restaurants, parks, and specialty coffee shops in Oradea, measured directly from Lite Residence (Strada Olteniei 64).',
    poi_filter_all: 'All Attractions',
    poi_filter_near: 'Nearby (< 1 km)',
    poi_filter_dining: 'Dining & Cafes',
    poi_filter_center: 'City Center & Spa',
    poi_map_link_text: 'Navigate on Maps',
    doc_title: 'Lite Residence Oradea | Luxury Serviced Aparthotel at Dealul Ciuperca',
    nav_overview: 'Overview',
    nav_wellness: 'Wellness & Amenities',
    nav_apartments: 'Apartments (01–07)',
    nav_location: 'Location & Map',
    nav_explore_btn: 'Explore Apartments →',
    
    hero_badge: 'A New Concept in Hospitality • Oradea',
    hero_title: 'Refined Serviced Living at <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Discover 7 modern designer apartments offering a calm retreat right next to Dealul Ciuperca on Strada Olteniei 64. Enjoy a private courtyard wellness spa with Jacuzzi & Sauna, dedicated parking per room, and keyless check-in from 16:00.',
    hero_stat_1: 'Serviced Apartments',
    hero_stat_2: 'Jacuzzi & Sauna',
    hero_stat_3: '1 Private Parking Spot per room',
    hero_stat_4: 'Keyless Self Check-in',
    
    wellness_subtitle: 'Wellness & Guest Comfort',
    wellness_title: 'A Peaceful Urban Retreat',
    wellness_desc_1: 'Located in a quiet residential area next to Dealul Ciuperca, Lite Residence combines modern architectural elegance with full serviced accommodation convenience.',
    wellness_desc_2: 'Guests enjoy shared access to our private outdoor wellness spa featuring a Jacuzzi hot tub and wooden sauna inside an enclosed private courtyard.',
    
    amenity_1: 'Shared Jacuzzi & Sauna',
    amenity_2: '1 Private Parking Spot per room',
    amenity_3: 'Keyless Access Codes',
    amenity_4: 'Nespresso Coffee Machine',
    amenity_5: 'Heated Floors & A/C',
    amenity_6: 'Shared Washer & Dryer',
    
    apartments_subtitle: 'Serviced Accommodations',
    apartments_title: 'The 7 Residences',
    apartments_desc: 'Click any photo or room button to inspect full photo galleries, room specs, and proceed to reservation.',
    
    view_photos_btn: 'View Photos & Reserve',
    spec_bath: '1 Bathroom',
    
    location_subtitle: 'Location & Guest Information',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Bihor County. Located in a calm residential neighborhood just steps from Dealul Ciuperca.',
    
    policies_title: 'House Policies & Timings',
    policy_checkin_title: 'Check-In:',
    policy_checkin_text: 'from 16:00 (Keyless digital access codes sent on check-in day)',
    policy_checkout_title: 'Check-Out:',
    policy_checkout_text: 'until 11:00',
    policy_quiet_title: 'Quiet Hours:',
    policy_quiet_text: 'between 21:00 and 08:00 (Active noise monitoring sensors in place)',
    policy_visitors_title: 'External Visitors:',
    policy_visitors_text: 'Permitted between 09:00 and 21:00 only',
    policy_parking_title: 'Parking:',
    policy_parking_text: '1 Private Parking Spot per room inside the private courtyard',
    policy_starter_title: 'Starter Essentials Pack:',
    policy_starter_text: 'Provided (toilet paper, soap, shower gel, dish detergent, Nespresso coffee capsules)',
    
    footer_about: 'A new concept in hospitality at Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Residences (01–07)',
    footer_contact_title: 'Location & Inquiries',
    footer_address_label: 'Address:',
    footer_contact_label: 'Contact:',
    footer_rights: '© 2026 Lite Residence Oradea. All rights reserved.',
    modal_reserve_btn: 'Reserve on FlatWhite Properties'
  },
  
  de: {
    nav_poi: 'Sehenswürdigkeiten',
    poi_subtitle: 'Lokaler Reiseführer & Highlights',
    poi_title: 'Sehenswürdigkeiten in der Nähe',
    poi_desc: 'Entdecken Sie die besten Attraktionen, Restaurants, Parks und Cafés in Oradea mit genauen Entfernungsangaben ab der Lite Residence.',
    poi_filter_all: 'Alle Highlights',
    poi_filter_near: 'In der Nähe (< 1 km)',
    poi_filter_dining: 'Gastronomie & Cafés',
    poi_filter_center: 'Zentrum & Wellness',
    poi_map_link_text: 'Route Auf Karte Öffnen',
    doc_title: 'Lite Residence Oradea | Luxus Serviced Aparthotel am Dealul Ciuperca',
    nav_overview: 'Übersicht',
    nav_wellness: 'Wellness & Ausstattung',
    nav_apartments: 'Apartments (01–07)',
    nav_location: 'Lage & Karte',
    nav_explore_btn: 'Apartments Erkunden →',
    
    hero_badge: 'Neues Gastronomie-Konzept • Oradea',
    hero_title: 'Stilvolles Wohnen am <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Entdecken Sie 7 moderne Designer-Apartments in ruhiger Lage direkt neben dem Dealul Ciuperca in der Strada Olteniei 64. Genießen Sie einen privaten Innenhof-Wellness-Bereich mit Jacuzzi & Sauna, privaten Parkplatz und schlüssellosen Check-in ab 16:00 Uhr.',
    hero_stat_1: 'Serviced Apartments',
    hero_stat_2: 'Jacuzzi & Sauna',
    hero_stat_3: '1 Privater Parkplatz pro Zimmer',
    hero_stat_4: 'Schlüsselloser Self Check-in',
    
    wellness_subtitle: 'Wellness & Komfort',
    wellness_title: 'Eine Ruhige Urbane Oase',
    wellness_desc_1: 'In einer ruhigen Wohngegend neben dem Dealul Ciuperca gelegen, kombiniert Lite Residence moderne Architektur mit erstklassigem Komfort.',
    wellness_desc_2: 'Gäste genießen Zugang zu unserem privaten Outdoor-Wellnessbereich mit Jacuzzi-Whirlpool und Holzsauna im privaten Innenhof.',
    
    amenity_1: 'Jacuzzi & Sauna',
    amenity_2: '1 Privater Parkplatz pro Zimmer',
    amenity_3: 'Digitale Zugangscodes',
    amenity_4: 'Nespresso Kaffeemaschine',
    amenity_5: 'Fussbodenheizung & Klimaanlage',
    amenity_6: 'Waschmaschine & Trockner',
    
    apartments_subtitle: 'Unterkünfte',
    apartments_title: 'Die 7 Residenzen',
    apartments_desc: 'Klicken Sie auf ein Foto oder einen Button, um die Fotogalerie und Details zu sehen und zu buchen.',
    
    view_photos_btn: 'Fotos Ansehen & Buchen',
    spec_bath: '1 Badezimmer',
    
    location_subtitle: 'Lage & Auskunft',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Kreis Bihor. In ruhiger Wohnlage nur wenige Schritte vom Dealul Ciuperca entfernt.',
    
    policies_title: 'Hausordnung & Zeiten',
    policy_checkin_title: 'Check-In:',
    policy_checkin_text: 'ab 16:00 Uhr (Zugangscodes werden am Anreisetag versendet)',
    policy_checkout_title: 'Check-Out:',
    policy_checkout_text: 'bis 11:00 Uhr',
    policy_quiet_title: 'Ruhezeiten:',
    policy_quiet_text: 'zwischen 21:00 und 08:00 Uhr (Lärmüberwachungssensoren aktiv)',
    policy_visitors_title: 'Externe Besucher:',
    policy_visitors_text: 'Nur zwischen 09:00 und 21:00 Uhr gestattet',
    policy_parking_title: 'Parken:',
    policy_parking_text: '1 Privater Parkplatz pro Zimmer im privaten Innenhof',
    policy_starter_title: 'Starter-Willkommenspaket:',
    policy_starter_text: 'Inklusive (Toilettenpapier, Seife, Duschgel, Spülmittel, Nespresso Kapseln)',
    
    footer_about: 'Ein neues Hospitality-Konzept am Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Residenzen (01–07)',
    footer_contact_title: 'Lage & Kontakt',
    footer_address_label: 'Adresse:',
    footer_contact_label: 'Kontakt:',
    footer_rights: '© 2026 Lite Residence Oradea. Alle Rechte vorbehalten.',
    modal_reserve_btn: 'Buchen auf FlatWhite Properties'
  },
  
  es: {
    nav_poi: 'Atracciones y Puntos de Interés',
    poi_subtitle: 'Guía Local y Puntos de Interés',
    poi_title: 'Lugares de Interés Cercanos',
    poi_desc: 'Descubra los mejores lugares turísticos, restaurantes gourmet, parques y cafeterías de Oradea con distancia exacta desde la residencia.',
    poi_filter_all: 'Todas las Atracciones',
    poi_filter_near: 'En las Cercanías (< 1 km)',
    poi_filter_dining: 'Restaurantes y Cafés',
    poi_filter_center: 'Centro Histórico y Spa',
    poi_map_link_text: 'Ver en Google Maps',
    doc_title: 'Lite Residence Oradea | Apartahotel de Lujo en Dealul Ciuperca',
    nav_overview: 'Visión General',
    nav_wellness: 'Wellness & Servicios',
    nav_apartments: 'Apartamentos (01–07)',
    nav_location: 'Ubicación y Mapa',
    nav_explore_btn: 'Explorar Apartamentos →',
    
    hero_badge: 'Nuevo Concepto en Hostelería • Oradea',
    hero_title: 'Vida Refinada en <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Descubra 7 modernos apartamentos de diseño junto a Dealul Ciuperca en Strada Olteniei 64. Disfrute de un spa privado con Jacuzzi y Sauna en el patio interior, aparcamiento privado y check-in digital desde las 16:00.',
    hero_stat_1: 'Apartamentos con Servicios',
    hero_stat_2: 'Jacuzzi & Sauna',
    hero_stat_3: '1 Plaza de Aparcamiento Privado por habitación',
    hero_stat_4: 'Check-in Digital Autónomo',
    
    wellness_subtitle: 'Bienestar y Confort',
    wellness_title: 'Un Tranquilo Refugio Urbano',
    wellness_desc_1: 'Ubicado en una tranquila zona residencial cerca de Dealul Ciuperca, Lite Residence combina elegancia arquitectónica con todo el confort moderno.',
    wellness_desc_2: 'Los huéspedes disfrutan de acceso a nuestro spa exterior privado con Jacuzzi y sauna de madera en un patio privado cerrado.',
    
    amenity_1: 'Jacuzzi & Sauna',
    amenity_2: '1 Plaza de Aparcamiento Privado por habitación',
    amenity_3: 'Acceso Digital sin Llave',
    amenity_4: 'Cafetera Nespresso',
    amenity_5: 'Suelo Radiante y Aire Acondicionado',
    amenity_6: 'Lavadora y Secadora',
    
    apartments_subtitle: 'Alojamiento',
    apartments_title: 'Las 7 Residencias',
    apartments_desc: 'Haga clic en cualquier foto o botón para ver la galería completa y realizar su reserva.',
    
    view_photos_btn: 'Ver Fotos y Reservar',
    spec_bath: '1 Baño',
    
    location_subtitle: 'Ubicación e Información',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Bihor. Situado en un tranquilo barrio residencial a pocos pasos de Dealul Ciuperca.',
    
    policies_title: 'Normas de la Casa y Horarios',
    policy_checkin_title: 'Check-In:',
    policy_checkin_text: 'desde las 16:00 (Códigos de acceso enviados el día de llegada)',
    policy_checkout_title: 'Check-Out:',
    policy_checkout_text: 'hasta las 11:00',
    policy_quiet_title: 'Horas de Silencio:',
    policy_quiet_text: 'de 21:00 a 08:00 (Sensores de ruido activos)',
    policy_visitors_title: 'Visitantes Externos:',
    policy_visitors_text: 'Permitidos solo entre las 09:00 y las 21:00',
    policy_parking_title: 'Aparcamiento:',
    policy_parking_text: '1 Plaza de Aparcamiento Privado por habitación en el patio',
    policy_starter_title: 'Pack de Bienvenida Inicial:',
    policy_starter_text: 'Incluido (papel higiénico, jabón, gel de ducha, detergente, cápsulas Nespresso)',
    
    footer_about: 'Un nuevo concepto en hostelería en Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Residencias (01–07)',
    footer_contact_title: 'Ubicación y Contacto',
    footer_address_label: 'Dirección:',
    footer_contact_label: 'Contacto:',
    footer_rights: '© 2026 Lite Residence Oradea. Todos los derechos reservados.',
    modal_reserve_btn: 'Reservar en FlatWhite Properties'
  },
  
  fr: {
    nav_poi: 'Attractions & POI',
    poi_subtitle: 'Guide Local & Lieux d\'Intérêt',
    poi_title: 'Points d\'Intérêt à Proximité',
    poi_desc: 'Découvrez les meilleures attractions, restaurants gastronomiques, parcs et cafés d\'Oradea calculés depuis la Lite Residence.',
    poi_filter_all: 'Toutes les Attractions',
    poi_filter_near: 'À Proximité (< 1 km)',
    poi_filter_dining: 'Restaurants & Cafés',
    poi_filter_center: 'Centre Historique & Spa',
    poi_map_link_text: 'Itinéraire sur la Carte',
    doc_title: 'Lite Residence Oradea | Appart-hôtel de Luxe à Dealul Ciuperca',
    nav_overview: 'Aperçu',
    nav_wellness: 'Bien-être & Équipements',
    nav_apartments: 'Appartements (01–07)',
    nav_location: 'Localisation & Carte',
    nav_explore_btn: 'Explorer les Appartements →',
    
    hero_badge: 'Nouveau Concept Hôtelier • Oradea',
    hero_title: 'Un Séjour Raffiné à <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Découvrez 7 appartements modernes de designer près de Dealul Ciuperca sur Strada Olteniei 64. Profitez d\'un spa privé en cour intérieure avec Jacuzzi & Sauna, d\'un parking privé et d\'un enregistrement autonome à partir de 16h00.',
    hero_stat_1: 'Appartements avec Services',
    hero_stat_2: 'Jacuzzi & Sauna',
    hero_stat_3: '1 Place de Parking Privée par chambre',
    hero_stat_4: 'Check-in Digital Autonome',
    
    wellness_subtitle: 'Bien-être & Confort',
    wellness_title: 'Un Havre de Paix Urbain',
    wellness_desc_1: 'Situé dans un quartier résidentiel calme près de Dealul Ciuperca, Lite Residence allie élégance architecturale moderne et grand confort.',
    wellness_desc_2: 'Les clients profitent d\'un accès partagé à notre spa extérieur privé avec Jacuzzi et sauna en bois dans une cour intérieure fermée.',
    
    amenity_1: 'Jacuzzi & Sauna',
    amenity_2: '1 Place de Parking Privée par chambre',
    amenity_3: 'Accès Digital par Code',
    amenity_4: 'Machine à Café Nespresso',
    amenity_5: 'Chauffage au Sol & Climatisation',
    amenity_6: 'Lave-linge & Sèche-linge',
    
    apartments_subtitle: 'Hébergements',
    apartments_title: 'Les 7 Résidences',
    apartments_desc: 'Cliquez sur une photo ou un bouton pour consulter la galerie photo complète et réserver.',
    
    view_photos_btn: 'Voir les Photos & Réserver',
    spec_bath: '1 Salle de Bain',
    
    location_subtitle: 'Localisation & Infos',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Bihor. Situé dans un quartier calme à deux pas de Dealul Ciuperca.',
    
    policies_title: 'Règlement Intérieur & Horaires',
    policy_checkin_title: 'Arrivée (Check-In):',
    policy_checkin_text: 'à partir de 16h00 (Codes d\'accès envoyés le jour de l\'arrivée)',
    policy_checkout_title: 'Départ (Check-Out):',
    policy_checkout_text: 'jusqu\'à 11h00',
    policy_quiet_title: 'Heures de Silence:',
    policy_quiet_text: 'entre 21h00 et 08h00 (Capteurs de bruit actifs)',
    policy_visitors_title: 'Visiteurs Extérieurs:',
    policy_visitors_text: 'Autorisés de 09h00 à 21h00 uniquement',
    policy_parking_title: 'Parking:',
    policy_parking_text: '1 Place de Parking Privée par chambre dans la cour',
    policy_starter_title: 'Kit de Bienvenue:',
    policy_starter_text: 'Fourni (papier toilette, savon, gel douche, liquide vaisselle, capsules Nespresso)',
    
    footer_about: 'Un nouveau concept hôtelier à Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Résidences (01–07)',
    footer_contact_title: 'Localisation & Contact',
    footer_address_label: 'Adresse:',
    footer_contact_label: 'Contact:',
    footer_rights: '© 2026 Lite Residence Oradea. Tous droits réservés.',
    modal_reserve_btn: 'Réserver sur FlatWhite Properties'
  },
  
  it: {
    nav_poi: 'Attrazioni & POI',
    poi_subtitle: 'Guida Locale & Punti d\'Interesse',
    poi_title: 'Luoghi d\'Interesse Vicini',
    poi_desc: 'Scopri le migliori attrazioni, ristoranti gourmet, parchi e caffè a Oradea calcolati direttamente da Lite Residence.',
    poi_filter_all: 'Tutte le Attrazioni',
    poi_filter_near: 'Nelle Vicinanze (< 1 km)',
    poi_filter_dining: 'Ristoranti & Caffè',
    poi_filter_center: 'Centro Storico & Spa',
    poi_map_link_text: 'Indicazioni Mappa',
    doc_title: 'Lite Residence Oradea | Aparthotel di Lusso a Dealul Ciuperca',
    nav_overview: 'Panoramica',
    nav_wellness: 'Wellness & Servizi',
    nav_apartments: 'Appartamenti (01–07)',
    nav_location: 'Posizione e Mappa',
    nav_explore_btn: 'Esplora gli Appartamenti →',
    
    hero_badge: 'Nuovo Concetto di Ospitalità • Oradea',
    hero_title: 'Soggiorno Raffinato a <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Scopri 7 moderni appartamenti di design vicino a Dealul Ciuperca in Strada Olteniei 64. Goditi la spa privata nel cortile interno con Jacuzzi e Sauna, parcheggio privato per ogni camera e check-in digitale dalle 16:00.',
    hero_stat_1: 'Appartamenti con Servizi',
    hero_stat_2: 'Jacuzzi & Sauna',
    hero_stat_3: '1 Posto Auto Privato per camera',
    hero_stat_4: 'Check-in Digitale Autonomo',
    
    wellness_subtitle: 'Wellness & Comfort',
    wellness_title: 'Oasi di Tranquillità Urbana',
    wellness_desc_1: 'Situato in una tranquilla zona residenziale vicino a Dealul Ciuperca, Lite Residence unisce eleganza architettonica e massimo comfort.',
    wellness_desc_2: 'Gli ospiti hanno accesso alla nostra spa esterna privata con vasca Jacuzzi e sauna in legno nel cortile interno riservato.',
    
    amenity_1: 'Jacuzzi & Sauna',
    amenity_2: '1 Posto Auto Privato per camera',
    amenity_3: 'Accesso Digitale Keyless',
    amenity_4: 'Macchina da Caffè Nespresso',
    amenity_5: 'Riscaldamento a Pavimento e Aria Condizionata',
    amenity_6: 'Lavatrice e Asciugatrice',
    
    apartments_subtitle: 'Alloggi',
    apartments_title: 'Le 7 Residenze',
    apartments_desc: 'Clicca su una foto o un pulsante per consultare la galleria fotografica e prenotare.',
    
    view_photos_btn: 'Vedi Foto e Prenota',
    spec_bath: '1 Bagno',
    
    location_subtitle: 'Posizione e Info',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Bihor. Situato in un quartiere tranquillo a pochi passi da Dealul Ciuperca.',
    
    policies_title: 'Regolamento e Orari',
    policy_checkin_title: 'Check-In:',
    policy_checkin_text: 'dalle 16:00 (Codici di accesso inviati il giorno dell\'arrivo)',
    policy_checkout_title: 'Check-Out:',
    policy_checkout_text: 'entro le 11:00',
    policy_quiet_title: 'Orario di Silenzio:',
    policy_quiet_text: 'tra le 21:00 e le 08:00 (Sensori di rumore attivi)',
    policy_visitors_title: 'Ospiti Esterni:',
    policy_visitors_text: 'Permessi solo tra le 09:00 e le 21:00',
    policy_parking_title: 'Parcheggio:',
    policy_parking_text: '1 Posto Auto Privato per camera nel cortile',
    policy_starter_title: 'Kit di Benvenuto Iniziale:',
    policy_starter_text: 'Incluso (carta igienica, sapone, bagnoschiuma, detersivo piatti, capsule Nespresso)',
    
    footer_about: 'Un nuovo concetto di ospitalità a Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Residenze (01–07)',
    footer_contact_title: 'Posizione e Contatti',
    footer_address_label: 'Indirizzo:',
    footer_contact_label: 'Contatti:',
    footer_rights: '© 2026 Lite Residence Oradea. Tutti i diritti riservati.',
    modal_reserve_btn: 'Prenota su FlatWhite Properties'
  },
  
  pt: {
    nav_poi: 'Atrações & POIs',
    poi_subtitle: 'Guia Local & Pontos de Interesse',
    poi_title: 'Pontos de Interesse Próximos',
    poi_desc: 'Descubra as principais atrações, restaurantes gourmet, parques e cafés em Oradea com distâncias calculadas a partir da residência.',
    poi_filter_all: 'Todas as Atrações',
    poi_filter_near: 'Nas Proximidades (< 1 km)',
    poi_filter_dining: 'Restaurantes & Cafés',
    poi_filter_center: 'Centro Histórico & Spa',
    poi_map_link_text: 'Navegar no Mapa',
    doc_title: 'Lite Residence Oradea | Aparthotel de Luxo em Dealul Ciuperca',
    nav_overview: 'Visão Geral',
    nav_wellness: 'Wellness & Comodidades',
    nav_apartments: 'Apartamentos (01–07)',
    nav_location: 'Localização e Mapa',
    nav_explore_btn: 'Explorar Apartamentos →',
    
    hero_badge: 'Novo Conceito em Hotelaria • Oradea',
    hero_title: 'Estadia Elegante em <span>Dealul Ciuperca</span>',
    hero_subtitle: 'Descubra 7 modernos apartamentos de design junto a Dealul Ciuperca na Strada Olteniei 64. Desfrute de um spa privado no pátio com Jacuzzi e Sauna, estacionamento privado e check-in digital a partir das 16:00.',
    hero_stat_1: 'Apartamentos com Serviços',
    hero_stat_2: 'Jacuzzi & Sauna',
    hero_stat_3: '1 Lugar de Estacionamento Privado por quarto',
    hero_stat_4: 'Check-in Digital Autónomo',
    
    wellness_subtitle: 'Bem-estar e Conforto',
    wellness_title: 'Um Refúgio Urbano Tranquilo',
    wellness_desc_1: 'Localizado numa área residencial tranquila perto de Dealul Ciuperca, o Lite Residence combina elegância arquitetónica com total conforto.',
    wellness_desc_2: 'Os hóspedes desfrutam de acesso ao nosso spa exterior privado com Jacuzzi e sauna de madeira num pátio fechado.',
    
    amenity_1: 'Jacuzzi & Sauna',
    amenity_2: '1 Lugar de Estacionamento Privado por quarto',
    amenity_3: 'Acesso Digital Sem Chave',
    amenity_4: 'Máquina de Café Nespresso',
    amenity_5: 'Piso Aquecido e Ar Condicionado',
    amenity_6: 'Máquina de Lavar e Secar',
    
    apartments_subtitle: 'Alojamento',
    apartments_title: 'As 7 Residências',
    apartments_desc: 'Clique em qualquer foto ou botão para consultar a galeria de fotos e reservar.',
    
    view_photos_btn: 'Ver Fotos e Reservar',
    spec_bath: '1 Casa de Banho',
    
    location_subtitle: 'Localização e Informações',
    location_title: 'Dealul Ciuperca, Oradea',
    location_desc: 'Strada Olteniei 64, Oradea, Bihor. Situado num bairro tranquilo a poucos passos de Dealul Ciuperca.',
    
    policies_title: 'Regras da Casa e Horários',
    policy_checkin_title: 'Check-In:',
    policy_checkin_text: 'a partir das 16:00 (Códigos de acesso enviados no dia da chegada)',
    policy_checkout_title: 'Check-Out:',
    policy_checkout_text: 'até às 11:00',
    policy_quiet_title: 'Horas de Silêncio:',
    policy_quiet_text: 'entre as 21:00 e as 08:00 (Sensores de ruído ativos)',
    policy_visitors_title: 'Visitantes Externos:',
    policy_visitors_text: 'Permitidos apenas entre as 09:00 e as 21:00',
    policy_parking_title: 'Estacionamento:',
    policy_parking_text: '1 Lugar de Estacionamento Privado por quarto no pátio',
    policy_starter_title: 'Kit Inicial de Boas-Vindas:',
    policy_starter_text: 'Incluído (papel higiénico, sabonete, gel de banho, detergente, cápsulas Nespresso)',
    
    footer_about: 'Um novo conceito em hotelaria em Dealul Ciuperca, Oradea. Managed by Flat White Properties.',
    footer_residences_title: 'Residências (01–07)',
    footer_contact_title: 'Localização e Contacto',
    footer_address_label: 'Endereço:',
    footer_contact_label: 'Contacto:',
    footer_rights: '© 2026 Lite Residence Oradea. Todos os direitos reservados.',
    modal_reserve_btn: 'Reservar em FlatWhite Properties'
  }
};

// Localized Room Definitions for All 7 Languages

// ==========================================================================
// LOCALIZED POINTS OF INTEREST DATA (Calculated from 47.057771, 21.947079)
// ==========================================================================
const LOCALIZED_POI_DATA = [
  {
    id: 'poi_ciuperca_park',
    catGroup: ['near'],
    catName: { ro: 'Parc & Belvedere', hu: 'Park & Kilátó', en: 'Park & Viewpoint', de: 'Park & Aussichtspunkt', es: 'Parque y Mirador', fr: 'Parc & Belvédère', it: 'Parco & Belvedere', pt: 'Parque & Miradouro' },
    name: { ro: 'Dealul Ciuperca (Parc & Belvedere)', hu: 'Ciuperca-domb (Park & Kilátó)', en: 'Ciuperca Hill Park & Viewpoint', de: 'Dealul Ciuperca Park', es: 'Parque y Mirador Ciuperca', fr: 'Parc et Belvédère Ciuperca', it: 'Parco e Belvedere Ciuperca', pt: 'Parque e Miradouro Ciuperca' },
    distance: '220 m',
    travelMode: { ro: '🚶 4 min mers pe jos', hu: '🚶 4 perc séta', en: '🚶 4 min walk', de: '🚶 4 Min. zu Fuß', es: '🚶 4 min a pie', fr: '🚶 4 min à pied', it: '🚶 4 min a piedi', pt: '🚶 4 min a pé' },
    desc: {
      ro: 'Dealul simbolic al orașului, cu terase panoramice spectaculoase, alei amenajate și cel mai frumos apus din Oradea.',
      hu: 'Nagyvárad ikonikus dombja panorámás teraszokkal, sétányokkal és a város legszebb naplementéjével.',
      en: 'The city’s iconic hilltop featuring terraced gardens, amphitheater paths, and Oradea’s best sunset viewpoint.',
      de: 'Der ikonische Aussichtshügel der Stadt mit Panoramaterrassen und dem schönsten Sonnenuntergang der Stadt.',
      es: 'La icónica colina de la ciudad con miradores panorámicos y el mejor atardecer de Oradea.',
      fr: 'La colline iconique de la ville offrant des terrasses panoramiques et le plus beau coucher de soleil d'Oradea.',
      it: 'La collina simbolo della città con terrazze panoramiche e la vista sul tramonto più bella di Oradea.',
      pt: 'A icónica colina da cidade com terraços panorâmicos e o melhor pôr do sol de Oradea.'
    },
    mapUrl: 'https://maps.google.com/?q=Dealul+Ciuperca+Oradea'
  },
  {
    id: 'poi_ciuperca_restaurant',
    catGroup: ['near', 'dining'],
    catName: { ro: 'Restaurant Fine Dining', hu: 'Fine Dining Étterem', en: 'Fine Dining Restaurant', de: 'Fine Dining Restaurant', es: 'Restaurante Elegante', fr: 'Restaurant Gastronomique', it: 'Ristorante Raffinato', pt: 'Restaurante Elegante' },
    name: { ro: 'Restaurant Ciuperca', hu: 'Ciuperca Étterem', en: 'Ciuperca Restaurant', de: 'Restaurant Ciuperca', es: 'Restaurante Ciuperca', fr: 'Restaurant Ciuperca', it: 'Ristorante Ciuperca', pt: 'Restaurante Ciuperca' },
    distance: '220 m',
    travelMode: { ro: '🚶 4 min mers pe jos', hu: '🚶 4 perc séta', en: '🚶 4 min walk', de: '🚶 4 Min. zu Fuß', es: '🚶 4 min a pie', fr: '🚶 4 min à pied', it: '🚶 4 min a piedi', pt: '🚶 4 min a pé' },
    desc: {
      ro: 'Restaurant de top situat pe culmea dealului, oferind preparate din bucătăria internațională și o terasă suspendată peste oraș.',
      hu: 'Prémium étterem a dombtetőn, nemzetközi ételekkel és a város fölé nyúló terasszal.',
      en: 'Top-tier hilltop dining offering international cuisine and a suspended panoramic terrace over the city.',
      de: 'Exquisites Restaurant auf der Hügelspitze mit internationaler Küche und spektakulärer Panoramaterrasse.',
      es: 'Restaurante de alta cocina en la colina con gastronomía internacional y terraza panorámica sobre la ciudad.',
      fr: 'Restaurant haut de gamme sur la colline proposant une cuisine internationale et une terrasse suspendue.',
      it: 'Ristorante d'eccellenza sulla collina con cucina internazionale e terrazza panoramica sospesa sulla città.',
      pt: 'Restaurante de alta cozinha no topo da colina com gastronomia internacional e terraço panorâmico.'
    },
    mapUrl: 'https://maps.google.com/?q=Restaurant+Ciuperca+Oradea'
  },
  {
    id: 'poi_snoozz',
    catGroup: ['near', 'dining'],
    catName: { ro: 'Specialty Coffee', hu: 'Specialty Kávézó', en: 'Specialty Coffee Shop', de: 'Specialty Kaffeebar', es: 'Café de Especialidad', fr: 'Café de Spécialité', it: 'Caffetteria Specializzata', pt: 'Café de Especialidade' },
    name: { ro: 'Snoozz Specialty Coffee', hu: 'Snoozz Specialty Coffee', en: 'Snoozz Specialty Coffee', de: 'Snoozz Specialty Coffee', es: 'Snoozz Specialty Coffee', fr: 'Snoozz Specialty Coffee', it: 'Snoozz Specialty Coffee', pt: 'Snoozz Specialty Coffee' },
    distance: '400 m',
    travelMode: { ro: '🚶 6 min mers pe jos', hu: '🚶 6 perc séta', en: '🚶 6 min walk', de: '🚶 6 Min. zu Fuß', es: '🚶 6 min a pie', fr: '🚶 6 min à pied', it: '🚶 6 min a piedi', pt: '🚶 6 min a pé' },
    desc: {
      ro: 'Cafenea de specialitate renumită pentru cafeaua proaspăt prăjită, micul dejun delicios, brunch și atmosferă relaxantă.',
      hu: 'Népszerű specialty kávézó frissen pörkölt kávéval, finom reggelivel, brunch-csal és kellemes hangulattal.',
      en: 'Top-rated specialty coffee hub famous for single-origin brews, fresh breakfast, brunch treats, and cozy vibes.',
      de: 'Erstklassiges Specialty-Café bekannt für frisch gerösteten Kaffee, fantastischen Brunch und gemütliches Ambiente.',
      es: 'Cafetería de especialidad famosa por su café recién tostado, desayunos gourmet, brunch y ambiente acogedor.',
      fr: 'Café de spécialité réputé pour son café fraîchement torréfié, ses petits-déjeuners gourmands et son brunch.',
      it: 'Caffetteria di specialità famosa per il caffè di singola origine, le colazioni fresche e il delizioso brunch.',
      pt: 'Café de especialidade famoso pelo café torrado na hora, pequenos-almoços saborosos e brunch.'
    },
    mapUrl: 'https://maps.google.com/?q=Snoozz+Specialty+Coffee+Oradea'
  },
  {
    id: 'poi_bratianu_park',
    catGroup: ['near'],
    catName: { ro: 'Parc & Promenadă', hu: 'Park & Sétány', en: 'Park & Promenade', de: 'Park & Promenade', es: 'Parque y Paseo', fr: 'Parc & Promenade', it: 'Parco & Passeggiata', pt: 'Parque & Passeio' },
    name: { ro: 'Parcul Ion Brătianu', hu: 'Brătianu Park', en: 'Ion Brătianu Park', de: 'Ion Brătianu Park', es: 'Parque Ion Brătianu', fr: 'Parc Ion Brătianu', it: 'Parco Ion Brătianu', pt: 'Parque Ion Brătianu' },
    distance: '410 m',
    travelMode: { ro: '🚶 6 min mers pe jos', hu: '🚶 6 perc séta', en: '🚶 6 min walk', de: '🚶 6 Min. zu Fuß', es: '🚶 6 min a pie', fr: '🚶 6 min à pied', it: '🚶 6 min a piedi', pt: '🚶 6 min a pé' },
    desc: {
      ro: 'Parc verde liniștit pe malul Crișului Repede, cu terenuri de sport, alei umbroase, spații de relaxare și locuri de joacă.',
      hu: 'Csendes zöld park a Sebes-Körös partján, sportpályákkal, árnyas sétányokkal és pihenőhelyekkel.',
      en: 'Serene green park along Crișul Repede river featuring sports courts, tree-shaded walking paths, and picnic areas.',
      de: 'Ruhiger grüner Park am Flussufer mit Sportplätzen, schattigen Spazierwegen und Erholungsbereichen.',
      es: 'Tranquilo parque verde a orillas del río con pistas deportivas, paseos arbolados y zonas de descanso.',
      fr: 'Parc verdoyant paisible au bord de la rivière avec terrains de sport, allées ombragées et espaces détente.',
      it: 'Parco verde lungo il fiume con campi sportivi, viali ombreggiati e zone di relax.',
      pt: 'Parque verde tranquilo à beira do rio com campos de desporto, passeios sombreados e áreas de descanso.'
    },
    mapUrl: 'https://maps.google.com/?q=Parcul+Ion+Bratianu+Oradea'
  },
  {
    id: 'poi_botanic',
    catGroup: ['near', 'dining'],
    catName: { ro: 'Restaurant Gourmet', hu: 'Gourmet Étterem', en: 'Gourmet Restaurant', de: 'Gourmet Restaurant', es: 'Restaurante Gourmet', fr: 'Restaurant Gourmet', it: 'Ristorante Gourmet', pt: 'Restaurante Gourmet' },
    name: { ro: 'Botanic by Armonia', hu: 'Botanic by Armonia', en: 'Botanic by Armonia', de: 'Botanic by Armonia', es: 'Botanic by Armonia', fr: 'Botanic by Armonia', it: 'Botanic by Armonia', pt: 'Botanic by Armonia' },
    distance: '425 m',
    travelMode: { ro: '🚶 6 min mers pe jos', hu: '🚶 6 perc séta', en: '🚶 6 min walk', de: '🚶 6 Min. zu Fuß', es: '🚶 6 min a pie', fr: '🚶 6 min à pied', it: '🚶 6 min a piedi', pt: '🚶 6 min a pé' },
    desc: {
      ro: 'Experience gastronomică elegantă într-un decor botanical rafinat, cu preparate mediteraneene și cocktailuri de autor.',
      en: 'Elegant dining experience in a lush botanical-themed venue, serving refined Mediterranean dishes & craft cocktails.',
      hu: 'Elegáns gasztronómiai élmény növényi dekorációval, mediterrán ételekkel és kézműves koktélokkal.',
      de: 'Elegantes Gastronomie-Erlebnis in botanischem Ambiente mit mediterranen Spezialitäten & Cocktails.',
      es: 'Elegante restaurante con temática botánica que sirve platos mediterráneos refinados y cócteles de autor.',
      fr: 'Expérience gastronomique élégante dans un cadre botanique raffiné, proposant des plats méditerranéens.',
      it: 'Raffinata esperienza gastronomica in un ambiente botanico con piatti mediterranei e cocktail d'autore.',
      pt: 'Experiência gastronómica elegante num ambiente botânico com pratos mediterrânicos e coquetéis.'
    },
    mapUrl: 'https://maps.google.com/?q=Botanic+by+Armonia+Oradea'
  },
  {
    id: 'poi_crinul_alb',
    catGroup: ['near', 'dining'],
    catName: { ro: 'Restaurant pe Faleză', hu: 'Vízparti Étterem', en: 'Riverfront Dining', de: 'Flussufer-Restaurant', es: 'Restaurante Frente al Río', fr: 'Restaurant en Bord de Rivière', it: 'Ristorante Lungofiume', pt: 'Restaurante à Beira-Rio' },
    name: { ro: 'Restaurant Crinul Alb', hu: 'Crinul Alb Étterem', en: 'Crinul Alb Restaurant', de: 'Restaurant Crinul Alb', es: 'Restaurante Crinul Alb', fr: 'Restaurant Crinul Alb', it: 'Ristorante Crinul Alb', pt: 'Restaurante Crinul Alb' },
    distance: '475 m',
    travelMode: { ro: '🚶 7 min mers pe jos', hu: '🚶 7 perc séta', en: '🚶 7 min walk', de: '🚶 7 Min. zu Fuß', es: '🚶 7 min a pie', fr: '🚶 7 min à pied', it: '🚶 7 min a piedi', pt: '🚶 7 min a pé' },
    desc: {
      ro: 'Restaurant tradițional și internațional îndrăgit, amplasat pe faleza râului Crișul Repede cu terasă superbă pe apă.',
      hu: 'Népszerű hagyományos és nemzetközi étterem a Sebes-Körös partján, gyönyörű vízparti terasszal.',
      en: 'Beloved traditional & international restaurant situated directly on Crișul Repede promenade with river views.',
      de: 'Beliebtes Restaurant am Flussufer des Crișul Repede mit schöner Terrasse und Flussblick.',
      es: 'Restaurante tradicional e internacional ubicado en el paseo del río con hermosas vistas al agua.',
      fr: 'Restaurant populaire en bord de rivière proposant des spécialités traditionnelles et internationales.',
      it: 'Ristorante tradizionale e internazionale affacciato sul fiume con splendida terrazza vista acqua.',
      pt: 'Restaurante tradicional e internacional situado no passeio marítimo com vista para o rio.'
    },
    mapUrl: 'https://maps.google.com/?q=Restaurant+Crinul+Alb+Oradea'
  },
  {
    id: 'poi_rivo',
    catGroup: ['near', 'dining'],
    catName: { ro: 'Restaurant & Lounge', hu: 'Étterem & Lounge', en: 'Restaurant & Lounge', de: 'Restaurant & Lounge', es: 'Restaurante y Lounge', fr: 'Restaurant & Lounge', it: 'Ristorante & Lounge', pt: 'Restaurante & Lounge' },
    name: { ro: 'RIVO Restaurant & Lounge', hu: 'RIVO Restaurant & Lounge', en: 'RIVO Restaurant & Lounge', de: 'RIVO Restaurant & Lounge', es: 'RIVO Restaurant & Lounge', fr: 'RIVO Restaurant & Lounge', it: 'RIVO Restaurant & Lounge', pt: 'RIVO Restaurant & Lounge' },
    distance: '550 m',
    travelMode: { ro: '🚶 8 min mers pe jos', hu: '🚶 8 perc séta', en: '🚶 8 min walk', de: '🚶 8 Min. zu Fuß', es: '🚶 8 min a pie', fr: '🚶 8 min à pied', it: '🚶 8 min a piedi', pt: '🚶 8 min a pé' },
    desc: {
      ro: 'Restaurant exclusivist pe malul apei cu bucătărie fusion gourmet, steakhouse, sushi bar și terasă chic pe malul râului.',
      hu: 'Exkluzív vízparti étterem fúziós gourmet ételekkel, steakhouse-szal, sushi bárral és elegáns terasszal.',
      en: 'Exclusive waterfront venue featuring gourmet fusion cuisine, steakhouse cuts, sushi bar, and chic riverfront lounge.',
      de: 'Exklusives Restaurant am Flussufer mit Gourmet-Fusion-Küche, Steakhouse, Sushibar und stilvoller Lounge.',
      es: 'Exclusivo local frente al río con cocina de fusión gourmet, carnes a la parrilla, sushi bar y elegante lounge.',
      fr: 'Établissement exclusif en bord de rivière avec cuisine fusion gourmande, steakhouse, bar à sushi et lounge.',
      it: 'Esclusivo locale lungofiume con cucina gourmet fusion, steakhouse, sushi bar ed elegante lounge.',
      pt: 'Local exclusivo à beira-rio com cozinha fusão gourmet, steakhouse, bar de sushi e lounge chique.'
    },
    mapUrl: 'https://maps.google.com/?q=RIVO+Restaurant+Lounge+Oradea'
  },
  {
    id: 'poi_petofi_crisul',
    catGroup: ['near'],
    catName: { ro: 'Parc & Shopping', hu: 'Park & Vásárlás', en: 'Park & Shopping Center', de: 'Park & Einkaufszentrum', es: 'Parque y Compras', fr: 'Parc & Shopping', it: 'Parco & Shopping', pt: 'Parque & Compras' },
    name: { ro: 'Parcul Petőfi Sándor & Crișul Center', hu: 'Petőfi Sándor Park & Crișul Center', en: 'Petőfi Sándor Park & Crișul Mall', de: 'Petőfi Park & Crișul Center', es: 'Parque Petőfi Sándor y Centro Crișul', fr: 'Parc Petőfi Sándor & Centre Crișul', it: 'Parco Petőfi Sándor & Centro Crișul', pt: 'Parque Petőfi Sándor & Centro Crișul' },
    distance: '580 m',
    travelMode: { ro: '🚶 9 min mers pe jos', hu: '🚶 9 perc séta', en: '🚶 9 min walk', de: '🚶 9 Min. zu Fuß', es: '🚶 9 min a pie', fr: '🚶 9 min à pied', it: '🚶 9 min a piedi', pt: '🚶 9 min a pé' },
    desc: {
      ro: 'Parc istoric amenajat și centru comercial cu supermarket, farmacie, magazine, cafenele și bănci.',
      hu: 'Gondozott történelmi park és bevásárlóközpont szupermarkettel, gyógyszertárral, üzletekkel és bankokkal.',
      en: 'Historic landscaped park adjacent to Crișul Shopping Mall with supermarket, pharmacy, retail shops & ATMs.',
      de: 'Historischer Park direkt beim Einkaufszentrum Crișul mit Supermarkt, Apotheke, Geschäften und Banken.',
      es: 'Parque histórico junto al centro comercial Crișul con supermercado, farmacia, tiendas y cajeros.',
      fr: 'Parc historique à côté du centre commercial Crișul avec supermarché, pharmacie et boutiques.',
      it: 'Parco storico adiacente al centro commerciale Crișul con supermercato, farmacia e negozi.',
      pt: 'Parque histórico ao lado do centro comercial Crișul com supermercado, farmácia e lojas.'
    },
    mapUrl: 'https://maps.google.com/?q=Crisul+Shopping+Center+Oradea'
  },
  {
    id: 'poi_nymphaea',
    catGroup: ['near', 'center'],
    catName: { ro: 'Aquapark Termal & Spa', hu: 'Termál Élményfürdő', en: 'Thermal Aquapark & Spa', de: 'Thermal-Aquapark & Spa', es: 'Aquapark Termal y Spa', fr: 'Aquapark Thermal & Spa', it: 'Aquapark Termale & Spa', pt: 'Aquapark Termal & Spa' },
    name: { ro: 'Aquapark Nymphaea Oradea', hu: 'Nymphaea Élményfürdő', en: 'Nymphaea Aquapark Oradea', de: 'Aquapark Nymphaea', es: 'Aquapark Nymphaea', fr: 'Aquapark Nymphaea', it: 'Aquapark Nymphaea', pt: 'Aquapark Nymphaea' },
    distance: '640 m',
    travelMode: { ro: '🚶 9 min mers / 🚗 2 min', hu: '🚶 9 perc séta / 🚗 2 perc', en: '🚶 9 min walk / 🚗 2 min drive', de: '🚶 9 Min. / 🚗 2 Min.', es: '🚶 9 min a pie / 🚗 2 min', fr: '🚶 9 min / 🚗 2 min', it: '🚶 9 min / 🚗 2 min', pt: '🚶 9 min / 🚗 2 min' },
    desc: {
      ro: 'Cel mai mare și modern aquapark termal din regiune, cu 13 tobogane acvatice, bazine termale, saune finlandeze & spa.',
      hu: 'A régió legnagyobb és legmodernebb termál élményfürdője 13 csúszdával, termálmedencékkel és szaunavilággal.',
      en: 'The largest thermal aquapark in Transylvania featuring 13 waterslides, indoor/outdoor thermal pools, saunas & luxury spa.',
      de: 'Der größte Thermal-Aquapark der Region mit 13 Wasserrutschen, Thermalbecken, Finnischen Saunen & Spa.',
      es: 'El aquapark termal más grande de la región con 13 toboganes, piscinas termales, saunas y spa.',
      fr: 'Le plus grand aquapark thermal de la région avec 13 toboggans, bassins thermaux, saunas et spa.',
      it: 'Il più grande aquapark termale della regione con 13 scivoli, piscine termali, saune e spa.',
      pt: 'O maior aquapark termal da região com 13 tobogãs, piscinas termais, saunas e spa.'
    },
    mapUrl: 'https://maps.google.com/?q=Aquapark+Nymphaea+Oradea'
  },
  {
    id: 'poi_castle_oradea',
    catGroup: ['near', 'center'],
    catName: { ro: 'Cetate Istorică & Muzeu', hu: 'Történelmi Vár & Múzeum', en: 'Historic Fortress & Museum', de: 'Historische Festung & Museum', es: 'Fortaleza Histórica y Museo', fr: 'Forteresse Historique & Musée', it: 'Fortezza Storica & Museo', pt: 'Fortaleza Histórica & Museu' },
    name: { ro: 'Cetatea Oradea (Castle of Oradea)', hu: 'Nagyváradi Vár (Cetatea Oradea)', en: 'Oradea Fortress (Castle of Oradea)', de: 'Festung Oradea (Burg)', es: 'Fortaleza de Oradea (Castillo)', fr: 'Forteresse d'Oradea (Château)', it: 'Fortezza di Oradea (Castello)', pt: 'Fortaleza de Oradea (Castelo)' },
    distance: '780 m',
    travelMode: { ro: '🚶 11 min mers pe jos', hu: '🚶 11 perc séta', en: '🚶 11 min walk', de: '🚶 11 Min. zu Fuß', es: '🚶 11 min a pie', fr: '🚶 11 min à pied', it: '🚶 11 min a piedi', pt: '🚶 11 min a pé' },
    desc: {
      ro: 'Cetate medievală în formă de stea cu 5 bastioane, găzduind Muzeul Orașului, ateliere mestesugărești și festivaluri.',
      hu: 'Öt bástyás csillag alakú középkori vár, amely a Városi Múzeumnak, kézműves műhelyeknek és fesztiváloknak ad otthont.',
      en: 'Monumental 11th-century pentagonal star fortress housing the Oradea City Museum, artisan shops, and summer festivals.',
      de: 'Monumentale Fünfeck-Sternfestung aus dem 11. Jahrhundert mit Stadtmuseum, Handwerkerhöfen und Events.',
      es: 'Monumental fortaleza pentagonal en estrella que alberga el Museo de la Ciudad y talleres artesanales.',
      fr: 'Forteresse pentagonale en étoile du XIe siècle abritant le musée de la ville et des ateliers d'artisans.',
      it: 'Monumentale fortezza pentagonale a stella ospitante il Museo della Città e botteghe artigiane.',
      pt: 'Monumental fortaleza pentagonal em estrela que abriga o Museu da Cidade e oficinas artesanais.'
    },
    mapUrl: 'https://maps.google.com/?q=Cetatea+Oradea'
  },
  {
    id: 'poi_piata_unirii',
    catGroup: ['center'],
    catName: { ro: 'Centrul Istoric', hu: 'Történelmi Belváros', en: 'Historic City Center', de: 'Historisches Zentrum', es: 'Centro Histórico', fr: 'Centre Historique', it: 'Centro Storico', pt: 'Centro Histórico' },
    name: { ro: 'Piața Unirii & Palatul Vulturul Negru', hu: 'Szent László Tér & Fekete Sas Palota', en: 'Union Square & Black Eagle Palace', de: 'Piața Unirii & Palast Schwarzer Adler', es: 'Plaza de la Unión y Palacio Águila Negra', fr: 'Place de l'Union & Palais de l'Aigle Noir', it: 'Piazza Unirii & Palazzo Aquila Nera', pt: 'Praça da União & Palácio Águia Negra' },
    distance: '1.6 km',
    travelMode: { ro: '🚗 5 min auto / 🚋 Tram 1,3', hu: '🚗 5 perc autó / 🚋 Villamos', en: '🚗 5 min drive / 🚋 Tram line 1,3', de: '🚗 5 Min. / 🚋 Straßenbahn', es: '🚗 5 min coche / 🚋 Tranvía', fr: '🚗 5 min / 🚋 Tramway', it: '🚗 5 min / 🚋 Tram', pt: '🚗 5 min / 🚋 Elétrico' },
    desc: {
      ro: 'Inima arhitecturală Art Nouveau din Oradea, cu pasajul spectaculos de sticlă Vulturul Negru, Turnul Primăriei și Biserica cu Lună.',
      hu: 'Nagyvárad Art Nouveau építészeti szíve a Fekete Sas üvegpasszázssal, a Városháza tornyával és a Holdas templommal.',
      en: 'Oradea’s breathtaking Art Nouveau square featuring the glass-covered Black Eagle Passage, City Hall Tower & Moon Church.',
      de: 'Oradeas atemberaubender Art-Nouveau-Platz mit der gläsernen Passage Schwarzer Adler und Rathausturm.',
      es: 'El impresionante centro Art Nouveau de Oradea con el pasaje de cristal Águila Negra y la Torre del Ayuntamiento.',
      fr: 'Le cœur Art nouveau d'Oradea avec le passage en verre de l'Aigle Noir et la tour de l'hôtel de ville.',
      it: 'Il cuore Art Nouveau di Oradea con lo spettacolare passaggio in vetro dell'Aquila Nera e la Torre del Comune.',
      pt: 'O coração Art Nouveau de Oradea com a passagem em vidro Águia Negra e a Torre da Câmara.'
    },
    mapUrl: 'https://maps.google.com/?q=Piata+Unirii+Oradea'
  },
  {
    id: 'poi_baile_felix',
    catGroup: ['center'],
    catName: { ro: 'Stațiune Balneară', hu: 'Gyógyfürdő Helység', en: 'Thermal Spa Resort', de: 'Thermen-Kurort', es: 'Balneario Termal', fr: 'Station Thermale', it: 'Stazione Termale', pt: 'Estância Termal' },
    name: { ro: 'Stațiunea Băile Felix', hu: 'Băile Felix (Felixfürdő)', en: 'Băile Felix Thermal Resort', de: 'Thermenresort Băile Felix', es: 'Balneario Băile Felix', fr: 'Station Thermale Băile Felix', it: 'Stazione Termale Băile Felix', pt: 'Estância Termal Băile Felix' },
    distance: '8.2 km',
    travelMode: { ro: '🚗 12 min auto / 🚌 Autobuz 511', hu: '🚗 12 perc autó / 🚌 Busz 511', en: '🚗 12 min drive / 🚌 Bus 511', de: '🚗 12 Min. / 🚌 Bus 511', es: '🚗 12 min coche / 🚌 Autobús 511', fr: '🚗 12 min / 🚌 Bus 511', it: '🚗 12 min / 🚌 Autobus 511', pt: '🚗 12 min / 🚌 Autocarro 511' },
    desc: {
      ro: 'Cea mai renumită stațiune termală din România, cu ape minerale curative, lacuri cu nuferi termali și bazine de relaxare.',
      hu: 'Románia leghíresebb gyógyfürdőhelye gyógyhatású ásványvizekkel, tündérrózsás tavakkal és melegvizes medencékkel.',
      en: 'Romania’s premier thermal resort renowned for curative mineral waters, thermal water lily lakes & wellness spas.',
      de: 'Rumäniens berühmtester Thermenort mit heilendem Mineralwasser, Seerosenseen und Erholungsbädern.',
      es: 'El balneario termal más famoso de Rumanía con aguas minerales curativas y lagos con nenúfares térmicos.',
      fr: 'La station thermale la plus célèbre de Roumanie avec des eaux minérales curatives et des lacs de nénuphars.',
      it: 'La più rinomata stazione termale della Romania con acque minerali curative e laghi con ninfee termali.',
      pt: 'A estância termal mais famosa da Roménia com águas minerais curativas e lagos com nenúfares termais.'
    },
    mapUrl: 'https://maps.google.com/?q=Baile+Felix'
  }
];

const LOCALIZED_ROOM_DATA = {
  room_01: {
    id: 'room_01',
    listingId: '700074193',
    title: 'Lite Residence 01',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074193',
    gallery: generateCleanRoomGallery('room_01', 19),
    subtitle: {
      hu: 'Földszint • Privát Terasz',
      ro: 'Parter • Terasă Privată',
      en: 'Ground Floor • Private Terrace',
      de: 'Erdgeschoss • Private Terrasse',
      es: 'Planta Baja • Terraza Privada',
      fr: 'Rez-de-chaussée • Terrasse Privée',
      it: 'Piano Terra • Terrazza Privata',
      pt: 'Rés-do-chão • Terraço Privado'
    },
    beds: {
      hu: '1 Franciágy',
      ro: '1 Pat Matrimonial', en: '1 Double Bed', de: '1 Doppelbett', es: '1 Cama Doble', fr: '1 Grand Lit', it: '1 Letto Matrimoniale', pt: '1 Cama Casal'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Privát Terasz',
      ro: 'Terasă Privată', en: 'Private Terrace', de: 'Private Terrasse', es: 'Terraza Privada', fr: 'Terrasse Privée', it: 'Terrazza Privata', pt: 'Terraço Privado'
    },
    desc: {
      hu: 'Világos földszinti apartman tágas hálószobával, főzésre felszerelt konyhával, Nespresso kávéfőzővel, étkezősarokkal, etetőszékkel és privát fa terasszal.',
      ro: 'Apartament luminos la parter, cu dormitor matrimonial spațios, bucătărie complet echipată pentru gătit ușor, espressor Nespresso, zonă de dining, scaun înalt pentru copii și terasă din lemn.',
      en: 'Bright ground-floor apartment featuring a spacious master bedroom, fully equipped kitchen prepared for light cooking, Nespresso coffee setup, dining area, high chair for families, and a private wooden terrace.',
      de: 'Lichtdurchflutetes Apartment im Erdgeschoss mit geräumigem Schlafzimmer, voll ausgestatteter Küche für leichte Gerichte, Nespresso-Maschine, Essbereich und privater Holzterrasse.',
      es: 'Luminoso apartamento en planta baja con amplio dormitorio principal, cocina totalmente equipada, cafetera Nespresso, zona de comedor y terraza privada de madera.',
      fr: 'Lumineux appartement au rez-de-chaussée comprenant une grande chambre principale, une cuisine équipée pour les repas légers, une machine Nespresso et une terrasse privée en bois.',
      it: 'Luminoso appartamento al piano terra con spaziosa camera da letto matrimoniale, cucina completamente attrezzata, macchina Nespresso, zona pranzo e terrazza privata in legno.',
      pt: 'Luminoso apartamento no rés-do-chão com quarto principal espaçoso, cozinha totalmente equipada, máquina Nespresso, área de refeições e terraço privado de madeira.'
    }
  },
  room_02: {
    id: 'room_02',
    listingId: '700074200',
    title: 'Lite Residence 02',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074200',
    gallery: generateCleanRoomGallery('room_02', 17),
    subtitle: {
      hu: '1-Hálószobás Suite • Erkély',
      ro: 'Suite 1-Dormitor • Balcon',
      en: '1-Bedroom Suite • Courtyard Balcony',
      de: '1-Schlafzimmer Suite • Balkon',
      es: 'Suite 1 Dormitorio • Balcón',
      fr: 'Suite 1 Chambre • Balcon',
      it: 'Suite 1 Camera • Balcone',
      pt: 'Suite 1 Quarto • Varanda'
    },
    beds: {
      hu: '1 Franciágy',
      ro: '1 Pat Matrimonial', en: '1 Double Bed', de: '1 Doppelbett', es: '1 Cama Doble', fr: '1 Grand Lit', it: '1 Letto Matrimoniale', pt: '1 Cama Casal'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Padlófűtés',
      ro: 'Încălzire Pardoseală', en: 'Heated Floors', de: 'Fussbodenheizung', es: 'Suelo Radiante', fr: 'Chauffage au Sol', it: 'Riscaldamento Pavimento', pt: 'Piso Aquecido'
    },
    desc: {
      hu: 'Modern 1-hálószobás suite padlófűtéssel, klímával, belső udvarra néző privát erkéllyel, Nespresso géppel és nagysebességű Wi-Fi-vel.',
      ro: 'Suite contemporană cu 1 dormitor, încălzire în pardoseală, aer condiționat, balcon privat cu vedere spre curtea interioară, aparat Nespresso și Wi-Fi de mare viteză.',
      en: 'Contemporary 1-bedroom suite equipped with heated floors, climate control air conditioning, private balcony overlooking the calm courtyard, Nespresso machine, and high-speed Wi-Fi.',
      de: 'Moderne 1-Schlafzimmer-Suite mit Fussbodenheizung, Klimaanlage, privatem Balkon mit Blick in den ruhigen Innenhof, Nespresso-Maschine und schnellem WLAN.',
      es: 'Suite contemporánea de 1 dormitorio con suelo radiante, aire acondicionado, balcón privado al patio interior, cafetera Nespresso y Wi-Fi de alta velocidad.',
      fr: 'Suite contemporaine d\'une chambre avec chauffage au sol, climatisation, balcon privé donnant sur la cour calme, machine Nespresso et Wi-Fi haut débit.',
      it: 'Suite contemporanea con 1 camera da letto, riscaldamento a pavimento, aria condizionata, balcone privato con vista sul cortile, macchina Nespresso e Wi-Fi veloce.',
      pt: 'Suite contemporânea de 1 quarto equipada com piso aquecido, ar condicionado, varanda privada com vista para o pátio, máquina Nespresso e Wi-Fi rápido.'
    }
  },
  room_03: {
    id: 'room_03',
    listingId: '700074201',
    title: 'Lite Residence 03',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074201',
    gallery: generateCleanRoomGallery('room_03', 21),
    subtitle: {
      hu: 'Designer Suite • Nappali',
      ro: 'Suite Designer • Living',
      en: 'Designer Suite • Lounge',
      de: 'Designer Suite • Lounge',
      es: 'Suite de Diseño • Salón',
      fr: 'Suite Designer • Salon',
      it: 'Suite Designer • Salotto',
      pt: 'Suite Designer • Sala'
    },
    beds: {
      hu: '1 Queen Size Ágy',
      ro: '1 Pat Queen Size', en: '1 Queen Bed', de: '1 Queen-Size Bett', es: '1 Cama Queen', fr: '1 Lit Queen', it: '1 Letto Queen', pt: '1 Cama Queen'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Udvari Kilátás',
      ro: 'Vedere Curte', en: 'Courtyard View', de: 'Innenhofblick', es: 'Vistas al Patio', fr: 'Vue Cour', it: 'Vista Cortile', pt: 'Vista Pátio'
    },
    desc: {
      hu: 'Stílusos modern suite fa elemekkel, kényelmes nappalival, felszerelt konyhával, Nespresso kávéfőzővel és digitális önálló bejelentkezéssel.',
      ro: 'Suite modernă cu accente elegante din lemn, zonă confortabilă de living, bucătărie complet utilată, espressor Nespresso și check-in digital automatizat.',
      en: 'Stylish modern suite featuring elegant timber accents, a cozy plush lounge area, fully equipped kitchen for light cooking, Nespresso coffee setup, and keyless digital self check-in.',
      de: 'Stilvolle moderne Suite mit edlen Holzelementen, gemütlichem Loungebereich, voll ausgestatteter Küche, Nespresso-Maschine und schlüssellosem Check-in.',
      es: 'Elegante suite moderna con cálidos detalles en madera, acogedora zona de estar, cocina equipada, cafetera Nespresso y acceso digital sin llave.',
      fr: 'Élégante suite moderne dotée de magnifiques touches de bois, d\'un salon douillet, d\'une cuisine équipée, d\'une cafetière Nespresso et d\'un accès autonome.',
      it: 'Elegante suite moderna con raffinati dettagli in legno, accogliente zona salotto, cucina attrezzata, macchina Nespresso e check-in digitale senza chiavi.',
      pt: 'Elegante suite moderna com detalhes em madeira, área de estar acolhedora, cozinha equipada, máquina Nespresso e check-in digital autónomo.'
    }
  },
  room_04: {
    id: 'room_04',
    listingId: '700074202',
    title: 'Lite Residence 04',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074202',
    gallery: generateCleanRoomGallery('room_04', 17),
    subtitle: {
      hu: 'Kilátás a Ciuperca-dombra • 1-Hálószoba',
      ro: 'Vedere Dealul Ciuperca • 1-Dormitor',
      en: 'Hillside View • 1-Bedroom',
      de: 'Hügelblick • 1-Schlafzimmer',
      es: 'Vistas a la Colina • 1 Dormitorio',
      fr: 'Vue Colline • 1 Chambre',
      it: 'Vista Collina • 1 Camera',
      pt: 'Vista Colina • 1 Quarto'
    },
    beds: {
      hu: '1 King Size Ágy',
      ro: '1 Pat King Size', en: '1 King Bed', de: '1 King-Size Bett', es: '1 Cama King', fr: '1 Lit King', it: '1 Letto King', pt: '1 Cama King'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Kilátás a Ciuperca-dombra',
      ro: 'Vedere Dealul Ciuperca', en: 'Hillside View', de: 'Hügelblick', es: 'Vistas a la Colina', fr: 'Vue Colline', it: 'Vista Collina', pt: 'Vista Colina'
    },
    desc: {
      hu: 'Modern emeleti apartman gyönyörű kilátással a Ciuperca-dombra. Prémium ágyneművel, mosogatógéppel, mikrohullámú sütővel, főzőlappal és saját parkolóval.',
      ro: 'Apartament modern situat la etaj superior, cu vedere superbă către Dealul Ciuperca. Echipat cu lenjerii premium, mașină de spălat vase, cuptor cu microunde, plită și loc de parcare dedicat.',
      en: 'Modern serviced apartment located on an upper level, offering peaceful views towards Dealul Ciuperca. Equipped with premium linens, dishwasher, microwave, stove, and dedicated parking spot.',
      de: 'Modernes Apartment in den oberen Etagen mit ruhigem Blick auf den Dealul Ciuperca. Ausgestattet mit Premium-Bettwäsche, Geschirrspüler, Mikrowelle und eigenem Parkplatz.',
      es: 'Moderno apartamento en planta superior con hermosas vistas a Dealul Ciuperca. Equipado con ropa de cama premium, lavavajillas, microondas y plaza de aparcamiento.',
      fr: 'Appartement moderne situé en étage supérieur avec vue paisible sur Dealul Ciuperca. Équipé de linge haut de gamme, lave-vaisselle, micro-ondes et parking réservé.',
      it: 'Moderno appartamento ai piani superiori con splendida vista su Dealul Ciuperca. Dotato di biancheria premium, lavastoviglie, microonde e posto auto dedicato.',
      pt: 'Apartamento moderno localizado num andar superior com vista tranquila para Dealul Ciuperca. Equipado com roupa de cama premium, máquina de lavar louça e lugar de garagem.'
    }
  },
  room_05: {
    id: 'room_05',
    listingId: '700074203',
    title: 'Lite Residence 05',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074203',
    gallery: generateCleanRoomGallery('room_05', 22),
    subtitle: {
      hu: 'Deluxe Terasz • Kültéri Étkező',
      ro: 'Terasă Deluxe • Mobilier Exterior',
      en: 'Deluxe Terrace • Outdoor Dining',
      de: 'Deluxe Terrasse • Essbereich Aussen',
      es: 'Terraza Deluxe • Comedor Exterior',
      fr: 'Terrasse Deluxe • Coin Repas Extérieur',
      it: 'Terrazza Deluxe • Pranzo all\'Aperto',
      pt: 'Terraço Deluxe • Zona de Refeições'
    },
    beds: {
      hu: '1 King Size Ágy',
      ro: '1 Pat King Size', en: '1 King Bed', de: '1 King-Size Bett', es: '1 Cama King', fr: '1 Lit King', it: '1 Letto King', pt: '1 Cama King'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Terasz Étkezővel',
      ro: 'Terasă Dining', en: 'Dining Terrace', de: 'Ess-Terrasse', es: 'Terraza Comedor', fr: 'Terrasse Repas', it: 'Terrazza Pranzo', pt: 'Terraço Refeições'
    },
    desc: {
      hu: 'Deluxe apartman tágas szabadtéri terasszal és étkezőbútorokkal. Tökéletes szabadtéri reggelikhez és esti pihenéshez.',
      ro: 'Apartament Deluxe cu terasă exterioară generoasă, dotată cu mese și scaune. Perfect pentru micul dejun în aer liber și seri relaxante după explorarea centrului istoric din Oradea.',
      en: 'Deluxe apartment featuring an expanded outdoor terrace with outdoor dining furniture. Perfect for outdoor breakfasts and relaxed evening dining after exploring Oradea\'s historic center.',
      de: 'Deluxe-Apartment mit großzügiger Außenterrasse und Gartenmöbeln. Perfekt für das Frühstück im Freien und entspannte Abende nach der Erkundung von Oradea.',
      es: 'Apartamento Deluxe con amplia terraza exterior equipada con mobiliario de comedor. Perfecto para desayunos al aire libre y cenar relajadamente.',
      fr: 'Appartement Deluxe offrant une grande terrasse extérieure avec mobilier de repas. Parfait pour les petits-déjeuners en plein air et les soirées de détente.',
      it: 'Appartamento Deluxe con ampia terrazza esterna arredata con tavolo e sedie. Perfetto per la colazione all\'aperto e serate rilassanti.',
      pt: 'Apartamento Deluxe com amplo terraço exterior equipado com mobiliário de refeições. Perfeito para pequenos-almoços ao ar livre e noites relaxantes.'
    }
  },
  room_06: {
    id: 'room_06',
    listingId: '700074204',
    title: 'Lite Residence 06',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074204',
    gallery: generateCleanRoomGallery('room_06', 17),
    subtitle: {
      hu: 'Executive Suite • Munkasarok',
      ro: 'Suite Executive • Spațiu Lucru',
      en: 'Executive Suite • Extended Stay',
      de: 'Executive Suite • Arbeitsbereich',
      es: 'Suite Executive • Zona de Trabajo',
      fr: 'Suite Executive • Espace Travail',
      it: 'Suite Executive • Area Lavoro',
      pt: 'Suite Executive • Espaço Trabalho'
    },
    beds: {
      hu: '1 Franciágy',
      ro: '1 Pat Matrimonial', en: '1 Double Bed', de: '1 Doppelbett', es: '1 Cama Doble', fr: '1 Grand Lit', it: '1 Letto Matrimoniale', pt: '1 Cama Casal'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Íróasztal & Munkasarok',
      ro: 'Birou de Lucru', en: 'Work Setup', de: 'Arbeitsbereich', es: 'Escritorio Trabajo', fr: 'Espace Travail', it: 'Postazione Lavoro', pt: 'Secretária Trabalho'
    },
    desc: {
      hu: 'Executive apartman üzleti utazóknak és hosszabb tartózkodásra. Külön munkasarokkal, szupergyors Wi-Fi-vel, közös mosókonyha használattal és Nespresso géppel.',
      ro: 'Apartament Executive conceput pentru călătorii de afaceri și sejururi prelungite. Include birou dedicat de lucru, Wi-Fi ultra-rapid, acces la spălătorie comună și espressor Nespresso.',
      en: 'Executive apartment designed for business travelers and long-term stays. Includes dedicated workspace, high-speed Wi-Fi, shared laundry room access with washer & dryer, and Nespresso machine.',
      de: 'Executive-Apartment für Geschäftsreisende und längere Aufenthalte. Mit eigenem Arbeitsplatz, Highspeed-WLAN, Zugang zum Waschraum und Nespresso-Maschine.',
      es: 'Apartamento Executive pensado para viajes de negocios y estancias largas. Incluye escritorio de trabajo, Wi-Fi ultrarrápido, lavandería compartida y cafetera Nespresso.',
      fr: 'Appartement Executive idéal pour affaires et longs séjours. Comprend un bureau dédié, Wi-Fi ultra-rapide, accès buanderie et cafetière Nespresso.',
      it: 'Appartamento Executive pensato per viaggi d\'affari e lunghi soggiorni. Include postazione di lavoro, Wi-Fi ad alta velocità, lavanderia e macchina Nespresso.',
      pt: 'Apartamento Executive concebido para viagens de negócios e estadias longas. Inclui secretária de trabalho, Wi-Fi rápido, lavandaria e máquina Nespresso.'
    }
  },
  room_07: {
    id: 'room_07',
    listingId: '700074205',
    title: 'Lite Residence 07',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074205',
    gallery: generateCleanRoomGallery('room_07', 23),
    subtitle: {
      hu: 'Penthouse • Legfelső Emelet',
      ro: 'Penthouse • Ultimul Etaj',
      en: 'Penthouse Residence • Top Floor',
      de: 'Penthouse Residence • Oberste Etage',
      es: 'Penthouse • Última Planta',
      fr: 'Penthouse • Dernier Étage',
      it: 'Penthouse • Ultimo Piano',
      pt: 'Penthouse • Último Andar'
    },
    beds: {
      hu: '1 King Size Ágy',
      ro: '1 Pat King Size', en: '1 King Bed', de: '1 King-Size Bett', es: '1 Cama King', fr: '1 Lit King', it: '1 Letto King', pt: '1 Cama King'
    },
    baths: {
      hu: '1 Fürdőszoba',
      ro: '1 Baie', en: '1 Bathroom', de: '1 Badezimmer', es: '1 Baño', fr: '1 Salle de Bain', it: '1 Bagno', pt: '1 Casa de Banho'
    },
    feature: {
      hu: 'Panoráma Erkély',
      ro: 'Balcon Panoramic', en: 'Skyline Balcony', de: 'Panorama-Balkon', es: 'Balcón Panorámico', fr: 'Balcon Vue Panoramique', it: 'Balcone Panoramico', pt: 'Varanda Panorâmica'
    },
    desc: {
      hu: 'Exkluzív legfelső emeleti penthouse pazar panorámával Nagyváradra és a Ciuperca-dombra. Tágas nappalival, privát erkéllyel és teljes konyhával.',
      ro: 'Penthouse-ul nostru exclusiv de la ultimul etaj, ce oferă o panoramă spectaculoasă asupra orașului Oradea și Dealului Ciuperca. Cu living generos, balcon privat, bucătărie completă și lenjerii premium.',
      en: 'Flagship top-floor penthouse apartment offering elevated views over Oradea skyline and Dealul Ciuperca. Features spacious lounge, private balcony, full kitchen, and premium linens.',
      de: 'Exklusives Penthouse in der obersten Etage mit herrlichem Panoramablick auf Oradea und den Dealul Ciuperca. Mit großem Wohnzimmer, privatem Balkon und voll ausgestatteter Küche.',
      es: 'Exclusivo ático en la última planta con espectaculares vistas panorámicas de Oradea y Dealul Ciuperca. Cuenta con amplio salón, balcón privado y cocina completa.',
      fr: 'Penthouse d\'exception au dernier étage offrant une vue panoramique imprenable sur Oradea et Dealul Ciuperca. Propose un grand salon, balcon privé et cuisine complète.',
      it: 'Penthouse esclusivo all\'ultimo piano con vista panoramica mozzafiato su Oradea e Dealul Ciuperca. Con ampio soggiorno, balcone privato e cucina completa.',
      pt: 'Penthouse exclusivo no último andar com vistas panorâmicas sobre Oradea e Dealul Ciuperca. Oferece sala ampla, varanda privada e cozinha completa.'
    }
  }
};

let currentLang = 'ro'; // DEFAULT LANGUAGE IS ROMANIAN
let activeRoomId = null;
let currentGalleryIdx = 0;
let wellnessSlideIdx = 0;
let wellnessTimer = null;

// Initialize Page Features & Language Engine
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initNavbarScroll();
  initScrollReveal();
  initModalListeners();
  initWellnessSlideshow();

  initPoiSection();
});

function initPoiSection() {
  const filterBtns = document.querySelectorAll('.poi-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-poi-filter');
      renderPoiCards(filter);
    });
  });
  renderPoiCards('all');
}

function renderPoiCards(filter = 'all') {
  const grid = document.getElementById('poiGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const mapLinkText = TRANSLATIONS[currentLang]?.poi_map_link_text || 'Navighează pe Hărți';

  LOCALIZED_POI_DATA.forEach(poi => {
    if (filter !== 'all' && !poi.catGroup.includes(filter)) return;

    const card = document.createElement('div');
    card.className = 'poi-card reveal-up active';
    card.innerHTML = `
      <div>
        <div class="poi-card-header">
          <span class="poi-category-badge">${poi.catName[currentLang] || poi.catName.ro}</span>
          <span class="poi-distance-badge">📍 ${poi.distance}</span>
        </div>
        <h3 class="poi-name">${poi.name[currentLang] || poi.name.ro}</h3>
        <p class="poi-desc">${poi.desc[currentLang] || poi.desc.ro}</p>
      </div>

      <div class="poi-card-footer">
        <span class="poi-travel-pill">${poi.travelMode[currentLang] || poi.travelMode.ro}</span>
        <a href="${poi.mapUrl}" target="_blank" class="poi-map-link" rel="noopener">
          ${mapLinkText} &nearr;
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}


// ==========================================================================
// LANGUAGE ENGINE CONTROLLER (ROMANIAN DEFAULT)
// ==========================================================================
function initLanguageSelector() {
  const langSelector = document.getElementById('langSelector');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  
  if (!langBtn || !langDropdown) return;

  // Retrieve saved language preference or default to 'ro'
  const savedLang = localStorage.getItem('lite_lang');
  if (savedLang && LANG_CONFIG[savedLang]) {
    currentLang = savedLang;
  } else {
    currentLang = 'ro';
  }

  // Toggle Dropdown Menu
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('open');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove('open');
    }
  });

  // Language Option Clicks
  const options = langDropdown.querySelectorAll('.lang-option');
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');
      if (lang && LANG_CONFIG[lang]) {
        setLanguage(lang);
        langSelector.classList.remove('open');
      }
    });
  });

  // Initial translation apply
  setLanguage(currentLang);
}

function setLanguage(langCode) {
  if (!LANG_CONFIG[langCode] || !TRANSLATIONS[langCode]) return;
  
  currentLang = langCode;
  localStorage.setItem('lite_lang', langCode);

  // Update HTML lang attribute
  document.documentElement.lang = langCode;

  // Update Header Button Flag Image & Code
  const currentFlagImg = document.getElementById('currentLangFlagImg');
  const currentCodeEl = document.getElementById('currentLangCode');
  if (currentFlagImg) currentFlagImg.src = LANG_CONFIG[langCode].flagImg;
  if (currentCodeEl) currentCodeEl.textContent = LANG_CONFIG[langCode].code;

  // Update Active Option in Dropdown
  const options = document.querySelectorAll('.lang-option');
  options.forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === langCode);
  });

  // Update all DOM elements with data-i18n attributes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[langCode][key]) {
      if (key === 'hero_title') {
        el.innerHTML = TRANSLATIONS[langCode][key];
      } else {
        el.textContent = TRANSLATIONS[langCode][key];
      }
    }
  });

  // Update Document Title
  if (TRANSLATIONS[langCode].doc_title) {
    document.title = TRANSLATIONS[langCode].doc_title;
  }

  // Render Localized Room Showcase Cards
  renderRoomCards();
  renderPoiCards(document.querySelector('.poi-filter-btn.active')?.getAttribute('data-poi-filter') || 'all');

  // If Modal is currently open, update its localized strings instantly
  if (activeRoomId && document.getElementById('roomModalOverlay').classList.contains('active')) {
    updateModalLanguage();
  }
}

// Render Localized Cards for Room 01 to 07
function renderRoomCards() {
  for (let i = 1; i <= 7; i++) {
    const roomId = `room_0${i}`;
    const room = LOCALIZED_ROOM_DATA[roomId];
    if (!room) continue;

    const card = document.querySelector(`[onclick="openRoomModal('${roomId}')"]`)?.closest('article');
    if (!card) continue;

    // Localized Badge
    const badgeEl = card.querySelector('.room-badge');
    if (badgeEl && room.subtitle[currentLang]) {
      badgeEl.textContent = room.subtitle[currentLang];
    }

    // Localized Desc
    const descEl = card.querySelector('.room-desc');
    if (descEl && room.desc[currentLang]) {
      descEl.textContent = room.desc[currentLang];
    }

    // Localized Specs
    const specs = card.querySelectorAll('.room-spec span');
    if (specs.length >= 3) {
      if (room.beds[currentLang]) specs[0].textContent = room.beds[currentLang];
      if (room.baths[currentLang]) specs[1].textContent = room.baths[currentLang];
      if (room.feature[currentLang]) specs[2].textContent = room.feature[currentLang];
    }

    // Localized Button Text
    const btnSpan = card.querySelector('.btn-trigger-modal span');
    if (btnSpan) {
      const btnBaseText = TRANSLATIONS[currentLang].view_photos_btn || 'Vezi Poze & Rezervă';
      btnSpan.textContent = `${btnBaseText} Residence 0${i}`;
    }
  }
}

// 1. Sticky Navigation Blur
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// 2. Intersection Observer Scroll-Reveal Animations
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observerOptions = { root: null, threshold: 0.12 };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

// 3. Wellness & Amenities Interactive Slideshow
function initWellnessSlideshow() {
  const wellnessImg = document.getElementById('wellnessSlideImg');
  const prevBtn = document.getElementById('wellnessPrevBtn');
  const nextBtn = document.getElementById('wellnessNextBtn');
  const dotsContainer = document.getElementById('wellnessDots');

  if (!wellnessImg || !dotsContainer) return;

  dotsContainer.innerHTML = '';
  WELLNESS_IMAGES.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `wellness-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => setWellnessSlide(idx));
    dotsContainer.appendChild(dot);
  });

  prevBtn.addEventListener('click', () => {
    wellnessSlideIdx = (wellnessSlideIdx - 1 + WELLNESS_IMAGES.length) % WELLNESS_IMAGES.length;
    setWellnessSlide(wellnessSlideIdx);
  });

  nextBtn.addEventListener('click', () => {
    wellnessSlideIdx = (wellnessSlideIdx + 1) % WELLNESS_IMAGES.length;
    setWellnessSlide(wellnessSlideIdx);
  });

  wellnessTimer = setInterval(() => {
    wellnessSlideIdx = (wellnessSlideIdx + 1) % WELLNESS_IMAGES.length;
    setWellnessSlide(wellnessSlideIdx);
  }, 5000);
}

function setWellnessSlide(idx) {
  wellnessSlideIdx = idx;
  const wellnessImg = document.getElementById('wellnessSlideImg');
  wellnessImg.src = WELLNESS_IMAGES[idx];

  const dots = document.querySelectorAll('.wellness-dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

// 4. In-Site Room Gallery Modal Controller
function openRoomModal(roomId) {
  const room = LOCALIZED_ROOM_DATA[roomId];
  if (!room) return;

  activeRoomId = roomId;
  currentGalleryIdx = 0;

  // Update Localized Modal Content
  updateModalLanguage();

  // Set Direct FlatWhite Booking Link
  const reserveBtn = document.getElementById('modalDirectReserveBtn');
  reserveBtn.href = room.flatwhiteUrl;

  // Render Full Gallery & Thumbnails Strip
  renderModalGallery(room);

  // Show Modal Overlay
  const overlay = document.getElementById('roomModalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateModalLanguage() {
  if (!activeRoomId) return;
  const room = LOCALIZED_ROOM_DATA[activeRoomId];
  if (!room) return;

  document.getElementById('modalRoomTitle').textContent = room.title;
  document.getElementById('modalRoomSubtitle').textContent = room.subtitle[currentLang] || room.subtitle.ro;
  document.getElementById('modalRoomDesc').textContent = room.desc[currentLang] || room.desc.ro;
  document.getElementById('modalSpecBeds').textContent = room.beds[currentLang] || room.beds.ro;
  document.getElementById('modalSpecBaths').textContent = room.baths[currentLang] || room.baths.ro;
  document.getElementById('modalSpecFeature').textContent = room.feature[currentLang] || room.feature.ro;
}

function renderModalGallery(room) {
  const mainImg = document.getElementById('modalRoomImage');
  const thumbsContainer = document.getElementById('modalThumbsContainer');
  const photoCounter = document.getElementById('modalPhotoCounter');

  mainImg.src = room.gallery[currentGalleryIdx];
  if (photoCounter) {
    photoCounter.textContent = `${currentGalleryIdx + 1} / ${room.gallery.length}`;
  }

  thumbsContainer.innerHTML = '';
  let activeThumbElement = null;

  room.gallery.forEach((imgUrl, idx) => {
    const thumb = document.createElement('img');
    thumb.src = imgUrl;
    thumb.className = `modal-thumb ${idx === currentGalleryIdx ? 'active' : ''}`;
    thumb.title = `Photo ${idx + 1} of ${room.gallery.length}`;
    
    thumb.addEventListener('click', () => {
      currentGalleryIdx = idx;
      renderModalGallery(room);
    });

    if (idx === currentGalleryIdx) {
      activeThumbElement = thumb;
    }

    thumbsContainer.appendChild(thumb);
  });

  // Auto scroll active thumbnail into view smoothly
  if (activeThumbElement) {
    setTimeout(() => {
      activeThumbElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 40);
  }
}

function nextModalPhoto() {
  if (!activeRoomId) return;
  const room = LOCALIZED_ROOM_DATA[activeRoomId];
  currentGalleryIdx = (currentGalleryIdx + 1) % room.gallery.length;
  renderModalGallery(room);
}

function prevModalPhoto() {
  if (!activeRoomId) return;
  const room = LOCALIZED_ROOM_DATA[activeRoomId];
  currentGalleryIdx = (currentGalleryIdx - 1 + room.gallery.length) % room.gallery.length;
  renderModalGallery(room);
}

function closeRoomModal() {
  const overlay = document.getElementById('roomModalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  activeRoomId = null;
}

function initModalListeners() {
  const overlay = document.getElementById('roomModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevPhoto');
  const nextBtn = document.getElementById('modalNextPhoto');

  closeBtn.addEventListener('click', closeRoomModal);
  prevBtn.addEventListener('click', prevModalPhoto);
  nextBtn.addEventListener('click', nextModalPhoto);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeRoomModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeRoomModal();
    if (e.key === 'ArrowRight') nextModalPhoto();
    if (e.key === 'ArrowLeft') prevModalPhoto();
  });
}

// 5. Mouse Wheel & Drag Scrolling for Thumbnail Strip
function initThumbnailDragScroll() {
  const container = document.getElementById('modalThumbsContainer');
  if (!container) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('dragging');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('dragging');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2.5;
    container.scrollLeft = scrollLeft - walk;
  });

  // Enable mouse wheel horizontal scrolling
  container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.5;
    }
  }, { passive: false });
}
