/* ==========================================================================
   LITE RESIDENCE ORADEA - COMPLETE FULL-GALLERY IN-SITE MODAL & SLIDESHOW
   ========================================================================== */

// Helper to generate full gallery image array paths
function generateGallery(prefix, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`assets/images/${prefix}_img_${i}.jpg`);
  }
  return images;
}

// Complete Photo Galleries for All 7 Residences
const ROOM_DATA = {
  room_01: {
    id: 'room_01',
    listingId: '700074193',
    title: 'Lite Residence 01',
    subtitle: 'Ground Floor • Private Terrace',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074193',
    beds: '1 Double Bed',
    baths: '1 Bathroom',
    feature: 'Private Terrace',
    gallery: generateGallery('room_01', 19),
    desc: 'Bright ground-floor apartment featuring a spacious master bedroom, fully equipped kitchen prepared for light cooking, Nespresso coffee setup, dining area, high chair for families, and a private wooden terrace.'
  },
  room_02: {
    id: 'room_02',
    listingId: '700074200',
    title: 'Lite Residence 02',
    subtitle: '1-Bedroom Suite • Courtyard Balcony',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074200',
    beds: '1 Double Bed',
    baths: '1 Bathroom',
    feature: 'Heated Floors',
    gallery: generateGallery('room_02', 17),
    desc: 'Contemporary 1-bedroom suite equipped with heated floors, climate control air conditioning, private balcony overlooking the calm courtyard, Nespresso machine, and high-speed Wi-Fi.'
  },
  room_03: {
    id: 'room_03',
    listingId: '700074201',
    title: 'Lite Residence 03',
    subtitle: 'Designer Suite • Lounge',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074201',
    beds: '1 Queen Bed',
    baths: '1 Bathroom',
    feature: 'Courtyard View',
    gallery: generateGallery('room_03', 21),
    desc: 'Stylish modern suite featuring elegant timber accents, a cozy plush lounge area, fully equipped kitchen for light cooking, Nespresso coffee setup, and keyless digital self check-in.'
  },
  room_04: {
    id: 'room_04',
    listingId: '700074202',
    title: 'Lite Residence 04',
    subtitle: 'Hillside View • 1-Bedroom',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074202',
    beds: '1 King Bed',
    baths: '1 Bathroom',
    feature: 'Hillside View',
    gallery: generateGallery('room_04', 17),
    desc: 'Modern serviced apartment located on an upper level, offering peaceful views towards Dealul Ciuperca. Equipped with premium linens, dishwasher, microwave, stove, and dedicated parking spot.'
  },
  room_05: {
    id: 'room_05',
    listingId: '700074203',
    title: 'Lite Residence 05',
    subtitle: 'Deluxe Terrace • Outdoor Dining',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074203',
    beds: '1 King Bed',
    baths: '1 Bathroom',
    feature: 'Dining Terrace',
    gallery: generateGallery('room_05', 22),
    desc: 'Deluxe apartment featuring an expanded outdoor terrace with outdoor dining furniture. Perfect for outdoor breakfasts and relaxed evening dining after exploring Oradeas historic center.'
  },
  room_06: {
    id: 'room_06',
    listingId: '700074204',
    title: 'Lite Residence 06',
    subtitle: 'Executive Suite • Extended Stay',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074204',
    beds: '1 Double Bed',
    baths: '1 Bathroom',
    feature: 'Work Setup',
    gallery: generateGallery('room_06', 17),
    desc: 'Executive apartment designed for business travelers and long-term stays. Includes dedicated workspace, high-speed Wi-Fi, shared laundry room access with washer & dryer, and Nespresso machine.'
  },
  room_07: {
    id: 'room_07',
    listingId: '700074205',
    title: 'Lite Residence 07',
    subtitle: 'Penthouse Residence • Top Floor',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074205',
    beds: '1 King Bed',
    baths: '1 Bathroom',
    feature: 'Skyline Balcony',
    gallery: generateGallery('room_07', 23),
    desc: 'Flagship top-floor penthouse apartment offering elevated views over Oradea skyline and Dealul Ciuperca. Features spacious lounge, private balcony, full kitchen, and premium linens.'
  }
};

const WELLNESS_IMAGES = [
  'assets/images/wellness_1.jpg',
  'assets/images/wellness_2.jpg',
  'assets/images/wellness_3.jpg',
  'assets/images/wellness_4.jpg',
  'assets/images/wellness_5.jpg',
  'assets/images/wellness_6.jpg'
];

let activeRoomId = null;
let currentGalleryIdx = 0;
let wellnessSlideIdx = 0;
let wellnessTimer = null;

// Initialize Page Features
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initScrollReveal();
  initModalListeners();
  initWellnessSlideshow();
});

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

// 4. In-Site Full Multi-Photo Gallery Modal Controller
function openRoomModal(roomId) {
  const room = ROOM_DATA[roomId];
  if (!room) return;

  activeRoomId = roomId;
  currentGalleryIdx = 0;

  // Populate Modal Fields
  document.getElementById('modalRoomTitle').textContent = room.title;
  document.getElementById('modalRoomSubtitle').textContent = room.subtitle;
  document.getElementById('modalRoomDesc').textContent = room.desc;
  document.getElementById('modalSpecBeds').textContent = room.beds;
  document.getElementById('modalSpecBaths').textContent = room.baths;
  document.getElementById('modalSpecFeature').textContent = room.feature;
  
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

function renderModalGallery(room) {
  const mainImg = document.getElementById('modalRoomImage');
  const thumbsContainer = document.getElementById('modalThumbsContainer');
  const photoCounter = document.getElementById('modalPhotoCounter');

  mainImg.src = room.gallery[currentGalleryIdx];
  if (photoCounter) {
    photoCounter.textContent = `${currentGalleryIdx + 1} / ${room.gallery.length}`;
  }

  thumbsContainer.innerHTML = '';
  room.gallery.forEach((imgUrl, idx) => {
    const thumb = document.createElement('img');
    thumb.src = imgUrl;
    thumb.className = `modal-thumb ${idx === currentGalleryIdx ? 'active' : ''}`;
    thumb.title = `Photo ${idx + 1} of ${room.gallery.length}`;
    thumb.addEventListener('click', () => {
      currentGalleryIdx = idx;
      mainImg.src = room.gallery[currentGalleryIdx];
      if (photoCounter) {
        photoCounter.textContent = `${currentGalleryIdx + 1} / ${room.gallery.length}`;
      }
      document.querySelectorAll('.modal-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === currentGalleryIdx);
      });
    });
    thumbsContainer.appendChild(thumb);
  });
}

function nextModalPhoto() {
  if (!activeRoomId) return;
  const room = ROOM_DATA[activeRoomId];
  currentGalleryIdx = (currentGalleryIdx + 1) % room.gallery.length;
  renderModalGallery(room);
}

function prevModalPhoto() {
  if (!activeRoomId) return;
  const room = ROOM_DATA[activeRoomId];
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
