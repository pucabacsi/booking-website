# Lite Residence Oradea — Luxury Serviced Aparthotel

A modern, high-end presentation and direct reservation website designed for **Lite Residence Oradea**, featuring 7 luxury serviced hotel-style apartments located at Dealul Ciuperca (Strada Olteniei 64, Oradea, Bihor County, Romania).

Managed by **Flat White Properties** (*transitioning to independent direct hosting*).

---

## 🌟 Key Features

- **7 Serviced Residences (01–07)**: Full showcase of all 7 luxury apartments with individual specs (Double/Queen/King beds, private terraces, heated floors, hillside views, executive work setups, penthouse skyline views).
- **In-Site Multi-Photo Gallery Modal**: Interactive 2-column modal with zero native scrollbars, smooth thumbnail auto-centering, mouse wheel scrolling, drag-to-scroll panning, and photo counter badge (`1 / N`).
- **Clean Room Galleries**: 100% filtered room galleries showcasing only private indoor apartment spaces (master bedroom, kitchen, bathroom, living room, private balcony). All shared Jacuzzi & Sauna photos are cleanly separated into the Wellness section.
- **Interactive Wellness & Amenities Slideshow**: Dedicated slideshow featuring the private courtyard Jacuzzi hot tub, wooden sauna, and outdoor relaxation areas.
- **Direct FlatWhite Properties Redirect**: High-converting CTA buttons redirecting guests seamlessly to each residence's official FlatWhite booking page.
- **Location & Information**: House policies, check-in timings (from 16:00 keyless self check-in, check-out until 11:00), 1 private courtyard parking spot per room, quiet hours (21:00–08:00), starter pack details, and embedded interactive map.
- **Bright Scandinavian Aesthetic**: High-contrast LITE theme with warm gold accents, glassmorphic blurred navbar, smooth entrance animations, and responsive layout.

---

## 📂 Project Structure

```
booking-website/
├── index.html            # Main markup, SEO metadata & modal overlays
├── style.css             # LITE bright Scandinavian design system & modal styling
├── app.js                # Room database, gallery modal engine & wellness slideshow logic
├── scratch_inspector.html # Full visual image inspector tool for all 7 residences
└── assets/
    └── images/           # High-resolution real photos labeled by room (room_01_img_1 to room_07_img_23)
```

---

## 💻 Local Development & Testing

Run a local HTTP web server using Python:

```bash
python -m http.server 8088
```

Then open `http://localhost:8088` in your browser.

To launch the visual image inspector tool, navigate to `http://localhost:8088/scratch_inspector.html`.

---

## 🚀 Deployment (Cyberfolks NVMe Hosting)

1. Upload all files (`index.html`, `style.css`, `app.js`, `assets/`) to `public_html` via cPanel File Manager or FTP.
2. Ensure permissions are set to `0644` for files and `0755` for directories.
3. Test SSL and HTTPS routing.

---

## 👨‍💻 Credits

- **Designed & Developed By**: **Szabadhegyi Laszlo**
- **Location**: Strada Olteniei 64, Oradea, Bihor County, Romania
- **Managed By**: Flat White Properties (`reservations@flatwhite.ro` | `+40.770.146.298`)
