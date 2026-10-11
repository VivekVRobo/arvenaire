/**
 * ARVENAIRE Commercial Offer Configuration & Tracking
 * Single Source of Truth for Pricing, URLs, and Analytics
 */

const ARVENAIRE_OFFERS = {
  // Tier 1: DIY Execution Kit
  kit: {
    name: "Germany Automation & Robotics Transition Kit",
    version: "1.2 FINAL",
    price: "₹499",
    numericPrice: 499,
    currency: "INR",
    url: "https://topmate.io/vivekvrobo/2291780?utm_source=arvenaire&utm_medium=website&utm_campaign=germany_transition&utm_content=kit",
    badge: "v1.2 FINAL",
    note: "Two editable German ATS CV files, a 30-company tracker, recruiter and hiring-manager scripts, four portfolio blueprints, four GitHub README templates, Germany checklist, source registry, CV bullet examples, German/English job-search keywords, and a 14-day sprint."
  },

  // Tier 2: Personalized 1-on-1 Strategy Session + Kit Included
  session: {
    name: "Germany Engineering Strategy Session (120 Min)",
    price: "₹2,499",
    numericPrice: 2499,
    currency: "INR",
    duration: "120 minutes",
    url: "https://topmate.io/vivekvrobo/2291828?utm_source=arvenaire&utm_medium=website&utm_campaign=germany_transition&utm_content=strategy_session",
    badge: "1-on-1 Personalized Advisory",
    bonus: "Includes the complete Germany Automation & Robotics Transition Kit v1.2 FINAL",
    note: "120-minute video meeting covering profile and target-role assessment, study or direct-career positioning, CV/LinkedIn review, portfolio gaps, employer and Werkstudent outreach strategy, and an action plan."
  }
};

// Analytics Event Tracking Helper
function trackOfferClick(offerType, locationName) {
  const offer = ARVENAIRE_OFFERS[offerType];
  if (!offer) return;

  console.log(`[ARVENAIRE Analytics] Clicked ${offerType} (${offer.price}) from ${locationName}`);
  
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'select_promotion', {
      promotion_name: offer.name,
      creative_slot: locationName,
      value: offer.numericPrice,
      currency: offer.currency || 'INR'
    });
  }
}

// Global initialization helper for CTA buttons and grounded product copy.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-offer-link]').forEach(btn => {
    const type = btn.getAttribute('data-offer-link');
    if (ARVENAIRE_OFFERS[type]) {
      btn.href = ARVENAIRE_OFFERS[type].url;
      btn.addEventListener('click', () => trackOfferClick(type, btn.getAttribute('data-offer-location') || 'page_body'));
    }
  });

  // Do not show a crossed-out reference price unless ARVENAIRE has a real,
  // supportable prior selling price for the same product.
  document.querySelectorAll('.offer-original-price').forEach(el => el.remove());

  // Keep legacy HTML copy synchronized with the final v1.2 buyer bundle.
  document.querySelectorAll('.offer-features li').forEach(li => {
    const text = li.textContent.trim();
    if (text.startsWith('3 portfolio project blueprints')) {
      li.textContent = '4 portfolio project blueprints (TwinCAT, ROS2, embedded systems, machine vision)';
    }
  });

});

