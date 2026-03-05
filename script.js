// Tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    // Update buttons
    tabBtns.forEach(b => {
      b.classList.remove('active', 'active-env');
    });
    if (target === 'env') {
      btn.classList.add('active-env');
    } else {
      btn.classList.add('active');
    }

    // Update panels
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
    });
    const activePanel = document.getElementById('tab-' + target);
    if (activePanel) activePanel.classList.add('active');
  });
});

// Thumbnail switcher
const thumbs = document.querySelectorAll('.thumb');
const mainImg = document.querySelector('.main-img');

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const src = thumb.querySelector('img').src.replace('w=200', 'w=800');
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

// On load: show env tab by default so info-tri is visible
// (optional — comment out if you prefer Description tab)
// document.querySelector('[data-tab="env"]').click();
