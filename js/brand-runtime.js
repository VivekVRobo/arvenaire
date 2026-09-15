/**
 * ARVENAIRE Brand Runtime v1.0
 * Applies the approved symbol + wordmark consistently to legacy static pages.
 */
(function () {
  'use strict';

  const PATHS = {
    favicon: 'assets/icons/favicon.svg',
    manifest: 'site.webmanifest',
    stylesheet: 'css/brand.css'
  };

  function ensureHeadLink(rel, href, attrs) {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
    if (attrs) Object.entries(attrs).forEach(([key, value]) => link.setAttribute(key, value));
    return link;
  }

  function installHeadAssets() {
    if (!document.querySelector('link[data-arvenaire-brand-css]')) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = PATHS.stylesheet;
      css.dataset.arvenaireBrandCss = 'v1';
      document.head.appendChild(css);
    }
    ensureHeadLink('icon', PATHS.favicon, { type: 'image/svg+xml' });
    ensureHeadLink('manifest', PATHS.manifest);
    let theme = document.querySelector('meta[name="theme-color"]');
    if (!theme) {
      theme = document.createElement('meta');
      theme.name = 'theme-color';
      document.head.appendChild(theme);
    }
    theme.content = '#05070A';
  }

  function buildLockup(node, type) {
    if (!node || node.dataset.arvenaireBrandified) return;
    node.dataset.arvenaireBrandified = type;
    node.classList.add(type === 'preloader' ? 'brand-preloader' : type === 'reader' ? 'brand-reader-lockup' : 'brand-lockup');
    node.setAttribute('aria-label', 'Arvenaire');
    node.textContent = '';
    const symbol = document.createElement('span');
    symbol.className = 'brand-symbol-mask';
    symbol.setAttribute('aria-hidden', 'true');
    const wordmark = document.createElement('span');
    wordmark.className = 'brand-wordmark';
    wordmark.textContent = 'ARVENAIRE';
    node.append(symbol, wordmark);
  }

  function applyBrand() {
    document.querySelectorAll('.nav-logo,.jp-nav-logo,.kr-nav-logo,.de-nav-logo,#navLogo').forEach(node => buildLockup(node, 'nav'));
    document.querySelectorAll('.pl-logo,.preloader-logo').forEach(node => buildLockup(node, 'preloader'));
    document.querySelectorAll('.ro-logo').forEach(node => buildLockup(node, 'reader'));
  }

  function init() {
    installHeadAssets();
    applyBrand();
    const observer = new MutationObserver(applyBrand);
    observer.observe(document.documentElement, { childList:true, subtree:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
  else init();
})();
