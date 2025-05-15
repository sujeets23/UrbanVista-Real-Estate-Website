// ===== Slideshow =====
const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

document.addEventListener('DOMContentLoaded', function() {
  // Property Data Example
  const propertyData = [
    {
      title: "The Pinnacle at Highland Park",
      address: "123 Maple Street, New York",
      features: ["🛏 5 Bedrooms", "🛁 2 Bathroom"],
      price: "$3,56798.00",
      description: "A beautiful home with modern amenities and a spacious garden.",
      images: [
        "Assets/property 3.jpg",
        "Assets/property 1.jpg",
        "Assets/property 2.jpg"
      ]
    },
    {
      title: "The Pinnacle at Highland Park",
      address: "789 Forest Lane, Denver, CO",
      features: ["🛏 5 Bedrooms", "🛁 2 Bathroom"],
      price: "$2,49089.99",
      description: "Elegant interiors and a prime location make this property a top choice.",
      images: [
        "Assets/property 1.jpg",
        "Assets/property 2.jpg",
        "Assets/property 3.jpg"
      ]
    },
    {
      title: "The Pinnacle at Highland Park",
      address: "123 Serenity Drive, Austin, TX",
      features: ["🛏 5 Bedrooms", "🛁 2 Bathroom"],
      price: "$4,56745.00",
      description: "Luxury living with all the comforts you desire.",
      images: [
        "Assets/property 2.jpg",
        "Assets/property 3.jpg",
        "Assets/property 1.jpg"
      ]
    }
  ];

  // Modal logic
  const modal = document.getElementById('propertyModal');
  const closeModal = document.querySelector('.close-modal');
  const modalMainImg = document.getElementById('modalMainImg');
  const modalThumbs = document.getElementById('modalThumbs');
  const modalTitle = document.getElementById('modalTitle');
  const modalAddress = document.getElementById('modalAddress');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');

  document.querySelectorAll('.property-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      const data = propertyData[idx];
      modalTitle.textContent = data.title;
      modalAddress.textContent = data.address;
      modalFeatures.innerHTML = data.features.map(f => `<span>${f}</span>`).join('');
      modalPrice.textContent = data.price;
      modalDescription.textContent = data.description;
      modalMainImg.src = data.images[0];
      // Thumbnails
      modalThumbs.innerHTML = '';
      data.images.forEach((img, i) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        if (i === 0) thumb.classList.add('active');
        thumb.addEventListener('click', () => {
          modalMainImg.src = img;
          modalThumbs.querySelectorAll('img').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
        modalThumbs.appendChild(thumb);
      });
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});
