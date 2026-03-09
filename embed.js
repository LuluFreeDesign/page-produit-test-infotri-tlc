/**
 * QFDM Product Demo Embed Script
 *
 * Intégration ultra-simple de la démo Info-Tri sur n'importe quel site
 *
 * Usage (une seule ligne à ajouter):
 * ------
 * <script src="https://lulufreedesign.github.io/page-produit-test-infotri-tlc/embed.js"
 *         data-width="100%" data-height="1200px"></script>
 *
 * Options (data attributes sur le script):
 * - data-width: largeur de l'iframe (défaut: 100%)
 * - data-height: hauteur de l'iframe (défaut: 1200px)
 */

(function() {
  const DEMO_URL = 'https://lulufreedesign.github.io/page-produit-test-infotri-tlc/';

  function createEmbed() {
    // Récupérer le script lui-même
    const currentScript = document.currentScript ||
                         document.querySelector('script[src*="embed.js"]');

    if (!currentScript) return;

    // Récupérer les options depuis les data attributes du script
    const width = currentScript.dataset.width || '100%';
    const height = currentScript.dataset.height || '1200px';

    // Créer un conteneur
    const container = document.createElement('div');
    container.style.display = 'inline-block';
    container.style.width = width;

    // Créer l'iframe
    const iframe = document.createElement('iframe');
    iframe.src = DEMO_URL;
    iframe.style.width = '100%';
    iframe.style.height = height;
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    iframe.style.display = 'block';
    iframe.frameborder = '0';
    iframe.allow = 'geolocation; microphone; camera';
    iframe.loading = 'lazy';

    container.appendChild(iframe);

    // Insérer avant le script
    currentScript.parentNode.insertBefore(container, currentScript);
  }

  // Initialiser dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createEmbed);
  } else {
    createEmbed();
  }
})();
