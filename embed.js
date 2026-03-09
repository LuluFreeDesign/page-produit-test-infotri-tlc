/**
 * QFDM Product Demo Embed Script
 *
 * Intégration simple de la démo Info-Tri sur n'importe quel site
 *
 * Usage:
 * ------
 * <div data-qfdm-embed data-qfdm-width="100%" data-qfdm-height="1200px"></div>
 * <script src="https://lulufreedesign.github.io/page-produit-test-infotri-tlc/embed.js"></script>
 *
 * Options (data attributes):
 * - data-qfdm-width: largeur de l'iframe (défaut: 100%)
 * - data-qfdm-height: hauteur de l'iframe (défaut: 1200px)
 */

(function() {
  const DEMO_URL = 'https://lulufreedesign.github.io/page-produit-test-infotri-tlc/';

  function initEmbed() {
    const containers = document.querySelectorAll('[data-qfdm-embed]');

    containers.forEach(container => {
      // Éviter les doublons
      if (container.querySelector('iframe[data-qfdm-iframe]')) {
        return;
      }

      const width = container.dataset.qfdmWidth || '100%';
      const height = container.dataset.qfdmHeight || '1200px';

      // Créer l'iframe
      const iframe = document.createElement('iframe');
      iframe.src = DEMO_URL;
      iframe.setAttribute('data-qfdm-iframe', '');
      iframe.style.width = width;
      iframe.style.height = height;
      iframe.style.border = 'none';
      iframe.style.borderRadius = '8px';
      iframe.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      iframe.frameborder = '0';
      iframe.allow = 'geolocation; microphone; camera';
      iframe.loading = 'lazy';

      container.appendChild(iframe);
    });
  }

  // Initialiser dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmbed);
  } else {
    initEmbed();
  }
})();
