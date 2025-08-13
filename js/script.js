
    // Initialize map
    const map = L.map('map').setView([39.8283, -98.5795], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const campgrounds = [
      {
        name: 'Mountain View Camp',
        lat: 39.7392,
        lng: -104.9903,
        rating: 4.8,
      },
      {
        name: 'Lakeside Retreat',
        lat: 39.0968,
        lng: -120.0324,
        rating: 4.6,
      },
      {
        name: 'Forest Haven',
        lat: 47.8021,
        lng: -123.6044,
        rating: 4.9,
      },
    ];

    // Add markers with animation
    campgrounds.forEach((camp, index) => {
      setTimeout(() => {
        L.marker([camp.lat, camp.lng])
          .bindPopup(`<strong>${camp.name}</strong><br>Rating: ${camp.rating}⭐`)
          .addTo(map);
      }, index * 300);
    });

    // Lightbox functionality
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = lightboxOverlay.querySelector('img');
    const galleryImages = document.querySelectorAll('.screenshot-gallery img');

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxOverlay.style.display = 'flex';
        lightboxOverlay.focus();
      });
    });

    lightboxOverlay.addEventListener('click', () => {
      lightboxOverlay.style.display = 'none';
      lightboxImage.src = '';
      lightboxImage.alt = '';
    });

    // Close lightbox with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxOverlay.style.display === 'flex') {
        lightboxOverlay.style.display = 'none';
        lightboxImage.src = '';
        lightboxImage.alt = '';
      }
    });
