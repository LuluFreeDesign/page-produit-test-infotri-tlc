// Thumbnail switcher
const thumbs = document.querySelectorAll('.thumb');
const mainImg = document.querySelector('.main-img');

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const src = thumb.querySelector('img').src;
    mainImg.src = src;
  });
});

// Color swatches
const swatches = document.querySelectorAll('.swatch');
swatches.forEach(s => {
  s.addEventListener('click', () => {
    swatches.forEach(x => x.classList.remove('active'));
    s.classList.add('active');
  });
});

// Size buttons
const sizeBtns = document.querySelectorAll('.size-btn');
sizeBtns.forEach(s => {
  s.addEventListener('click', () => {
    sizeBtns.forEach(x => x.classList.remove('active'));
    s.classList.add('active');
  });
});

// Chargement du widget Info-Tri
const infotriWrap = document.getElementById('infotri-wrap');

if (infotriWrap) {
  const script = document.createElement('script');
  script.src = 'https://quefairedemesdechets.ademe.fr/infotri/iframe.js';
  script.dataset.config = 'categorie=textile&consigne=3&avec_phrase=false';
  infotriWrap.appendChild(script);
}
