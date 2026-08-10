/**
 * LUXURY BOOKING PRESENTATION WEBSITE ENGINE
 * iCal 2-Way Calendar Synchronization & OTA Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Default Mock Sync Dates (Simulating live iCal feeds from Airbnb & Booking.com)
  const bookedDates = {
    airbnb: [5, 6, 7, 18, 19, 20],
    booking: [12, 13, 14, 25, 26],
    direct: [2, 3]
  };

  // Calendar Engine
  const calendarDaysContainer = document.getElementById('calendar-days-container');
  const monthYearLabel = document.getElementById('calendar-month-year');
  let currentDate = new Date();

  function renderCalendar(date) {
    if (!calendarDaysContainer) return;
    calendarDaysContainer.innerHTML = '';
    
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    monthYearLabel.textContent = `${monthNames[month]} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const adjustedFirstDay = (firstDayIndex === 0 ? 6 : firstDayIndex - 1); // Monday start
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    // Render Blank Cells for padding
    for (let i = 0; i < adjustedFirstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'calendar-day-cell empty';
      calendarDaysContainer.appendChild(emptyCell);
    }

    // Render Days
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-day-cell';

      const dayNumber = document.createElement('span');
      dayNumber.textContent = day;
      dayCell.appendChild(dayNumber);

      const statusTag = document.createElement('span');
      statusTag.className = 'day-status';

      if (bookedDates.airbnb.includes(day)) {
        dayCell.classList.add('booked-airbnb');
        statusTag.textContent = 'Airbnb';
      } else if (bookedDates.booking.includes(day)) {
        dayCell.classList.add('booked-booking');
        statusTag.textContent = 'Booking';
      } else if (bookedDates.direct.includes(day)) {
        dayCell.classList.add('booked-direct');
        statusTag.textContent = 'Reserved';
      } else {
        dayCell.classList.add('available');
        statusTag.textContent = 'Available';

        dayCell.addEventListener('click', () => {
          openBookingModal(`Selected Date: ${monthNames[month]} ${day}, ${year}`);
        });
      }

      dayCell.appendChild(statusTag);
      calendarDaysContainer.appendChild(dayCell);
    }
  }

  // Prev / Next Month Controls
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');

  if (prevMonthBtn && nextMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });
  }

  renderCalendar(currentDate);

  // Booking Modal Workflow
  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const bookingForm = document.getElementById('booking-form');

  window.openBookingModal = function(propertyName = "Direct Reservation Inquiry") {
    const modalTitle = document.getElementById('modal-property-title');
    if (modalTitle) modalTitle.textContent = propertyName;
    if (bookingModal) bookingModal.classList.add('active');
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      bookingModal.classList.remove('active');
    });
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookingModal.classList.remove('active');
      showToast('Reservation inquiry sent successfully! Our team will contact you within 15 minutes.');
      bookingForm.reset();
    });
  }

  // Toast Notification System
  window.showToast = function(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="#F59E0B" stroke-width="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // Search Filter Interaction
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Filtering properties based on your selected dates & guest count...');
      document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
