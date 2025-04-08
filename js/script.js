document.addEventListener('DOMContentLoaded', () => {
  // ========================
  // Toggle Mobile Navigation
  // ========================
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // ========================
  // Sample Location Cards
  // ========================
  const locationsContainer = document.getElementById('locations-container');

  // Temporary sample data
  const sampleLocations = [
    { name: 'Hops & Barley Brewery', type: 'Brewery', city: 'Pittsburgh, PA' },
    { name: 'Golden Vine Winery', type: 'Winery', city: 'Greensburg, PA' },
    { name: 'Steel Barrel Distillery', type: 'Distillery', city: 'Latrobe, PA' }
  ];

  sampleLocations.forEach(loc => {
    const card = document.createElement('div');
    card.innerHTML = `<h3>${loc.name}</h3><p>${loc.type} — ${loc.city}</p>`;
    card.style.border = '1px solid #ccc';
    card.style.padding = '1rem';
    card.style.background = '#fff';
    locationsContainer.appendChild(card);
  });
});
