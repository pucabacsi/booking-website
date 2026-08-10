/* ==========================================================================
   LITE RESIDENCE ORADEA - IN-SITE PRESENTATION & DIRECT CHECKOUT HIJACK ENGINE
   ========================================================================== */

// Room Database with Hostify Listing IDs & Details
const ROOM_DATA = {
  room_01: {
    id: 'room_01',
    listingId: '700074193',
    title: 'Lite Residence 01',
    subtitle: 'Ground Floor • Private Terrace',
    image: 'assets/images/room_01.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074193',
    beds: '1 Double Bed',
    baths: '1 Bathroom',
    feature: 'Private Terrace',
    maxGuests: 2,
    desc: 'Bright ground-floor apartment featuring a spacious master bedroom, fully equipped kitchen prepared for light cooking, Nespresso coffee setup, dining area, high chair for families, and a private wooden terrace.'
  },
  room_02: {
    id: 'room_02',
    listingId: '700074200',
    title: 'Lite Residence 02',
    subtitle: '1-Bedroom Suite • Courtyard Balcony',
    image: 'assets/images/room_02.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074200',
    beds: '1 Double Bed',
    baths: '1 Bathroom',
    feature: 'Heated Floors',
    maxGuests: 2,
    desc: 'Contemporary 1-bedroom suite equipped with heated floors, climate control air conditioning, private balcony overlooking the calm courtyard, Nespresso machine, and high-speed Wi-Fi.'
  },
  room_03: {
    id: 'room_03',
    listingId: '700074201',
    title: 'Lite Residence 03',
    subtitle: 'Designer Suite • Lounge',
    image: 'assets/images/room_03.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074201',
    beds: '1 Queen Bed',
    baths: '1 Bathroom',
    feature: 'Courtyard View',
    maxGuests: 2,
    desc: 'Stylish modern suite featuring elegant timber accents, a cozy plush lounge area, fully equipped kitchen for light cooking, Nespresso coffee setup, and keyless digital self check-in.'
  },
  room_04: {
    id: 'room_04',
    listingId: '700074202',
    title: 'Lite Residence 04',
    subtitle: 'Hillside View • 1-Bedroom',
    image: 'assets/images/room_04.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074202',
    beds: '1 King Bed',
    baths: '1 Bathroom',
    feature: 'Hillside View',
    maxGuests: 2,
    desc: 'Modern serviced apartment located on an upper level, offering peaceful views towards Dealul Ciuperca. Equipped with premium linens, dishwasher, microwave, stove, and dedicated parking spot.'
  },
  room_05: {
    id: 'room_05',
    listingId: '700074203',
    title: 'Lite Residence 05',
    subtitle: 'Deluxe Terrace • Outdoor Dining',
    image: 'assets/images/room_05.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074203',
    beds: '1 King Bed',
    baths: '1 Bathroom',
    feature: 'Dining Terrace',
    maxGuests: 2,
    desc: 'Deluxe apartment featuring an expanded outdoor terrace with outdoor dining furniture. Perfect for outdoor breakfasts and relaxed evening dining after exploring Oradeas historic center.'
  },
  room_06: {
    id: 'room_06',
    listingId: '700074204',
    title: 'Lite Residence 06',
    subtitle: 'Executive Suite • Extended Stay',
    image: 'assets/images/room_06.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074204',
    beds: '1 Double Bed',
    baths: '1 Bathroom',
    feature: 'Work Setup',
    maxGuests: 2,
    desc: 'Executive apartment designed for business travelers and long-term stays. Includes dedicated workspace, high-speed Wi-Fi, shared laundry room access with washer & dryer, and Nespresso machine.'
  },
  room_07: {
    id: 'room_07',
    listingId: '700074205',
    title: 'Lite Residence 07',
    subtitle: 'Penthouse Residence • Top Floor',
    image: 'assets/images/room_07.jpg',
    flatwhiteUrl: 'https://rezervare.flatwhite.ro/listing/700074205',
    beds: '1 King Bed',
    baths: '1 Bathroom',
    feature: 'Skyline Balcony',
    maxGuests: 2,
    desc: 'Flagship top-floor penthouse apartment offering elevated views over Oradea skyline and Dealul Ciuperca. Features spacious lounge, private balcony, full kitchen, and premium linens.'
  }
};

let activeRoomId = null;

// Initialize Page Features
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initScrollReveal();
  initModalListeners();
  setDefaultModalDates();
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

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

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

// 3. In-Site Room Modal Controller
function openRoomModal(roomId) {
  const room = ROOM_DATA[roomId];
  if (!room) return;

  activeRoomId = roomId;

  // Populate Modal Fields
  document.getElementById('modalRoomTitle').textContent = room.title;
  document.getElementById('modalRoomSubtitle').textContent = room.subtitle;
  document.getElementById('modalRoomImage').src = room.image;
  document.getElementById('modalRoomDesc').textContent = room.desc;
  document.getElementById('modalSpecBeds').textContent = room.beds;
  document.getElementById('modalSpecBaths').textContent = room.baths;
  document.getElementById('modalSpecFeature').textContent = room.feature;
  document.getElementById('modalFloatingFlatwhite').href = room.flatwhiteUrl;

  // Show Modal Overlay
  const overlay = document.getElementById('roomModalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
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
  const checkoutBtn = document.getElementById('modalCheckoutBtn');

  closeBtn.addEventListener('click', closeRoomModal);

  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeRoomModal();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeRoomModal();
    }
  });

  // Hijacked Checkout Submission
  checkoutBtn.addEventListener('click', handleDirectCheckoutSubmit);
}

// 4. Default Date Calculation (Tomorrow to +2 Days)
function setDefaultModalDates() {
  const today = new Date();
  const checkinDate = new Date(today);
  checkinDate.setDate(today.getDate() + 1);

  const checkoutDate = new Date(checkinDate);
  checkoutDate.setDate(checkinDate.getDate() + 2);

  const checkinInput = document.getElementById('modalCheckinInput');
  const checkoutInput = document.getElementById('modalCheckoutInput');

  if (checkinInput && checkoutInput) {
    checkinInput.value = formatDateForInput(checkinDate);
    checkinInput.min = formatDateForInput(today);
    checkoutInput.value = formatDateForInput(checkoutDate);
    checkoutInput.min = formatDateForInput(checkinDate);

    checkinInput.addEventListener('change', () => {
      const newIn = new Date(checkinInput.value);
      const newOutMin = new Date(newIn);
      newOutMin.setDate(newIn.getDate() + 1);
      checkoutInput.min = formatDateForInput(newOutMin);

      if (new Date(checkoutInput.value) <= newIn) {
        const nextDay = new Date(newIn);
        nextDay.setDate(newIn.getDate() + 2);
        checkoutInput.value = formatDateForInput(nextDay);
      }
    });
  }
}

function formatDateForInput(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// 5. HIJACK CHECKOUT REDIRECT ENGINE
// Submits a form targeting Hostify's payment step directly (/payment)!
function handleDirectCheckoutSubmit() {
  if (!activeRoomId || !ROOM_DATA[activeRoomId]) return;

  const room = ROOM_DATA[activeRoomId];
  const checkin = document.getElementById('modalCheckinInput').value;
  const checkout = document.getElementById('modalCheckoutInput').value;
  const guests = document.getElementById('modalGuestsSelect').value;

  if (!checkin || !checkout) {
    alert('Vă rugăm să selectați perioada de cazare.');
    return;
  }

  // Form POST directly to Hostify Payment page endpoint
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://rezervare.flatwhite.ro/payment';
  form.target = '_blank'; // Opens payment tab seamlessly

  const params = {
    'listing_id': room.listingId,
    'date_start': checkin,
    'date_end': checkout,
    'adults': guests,
    'children': '0',
    'infants': '0',
    'pets': '0'
  };

  for (const [key, value] of Object.entries(params)) {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = key;
    hiddenField.value = value;
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
