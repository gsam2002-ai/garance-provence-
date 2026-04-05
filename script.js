/* ============================================================
   La Garance en Provence — Script
   Bilingual (FR/EN), smooth scroll, animations, lightbox
   ============================================================ */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // Translations
  // ----------------------------------------------------------
  const T = {
    fr: {
      nav_about:     'La Maison',
      nav_rooms:     'Chambres',
      nav_amenities: 'Equipements',
      nav_gallery:   'Galerie',
      nav_pricing:   'Tarifs',
      nav_location:  'Accès',
      nav_contact:   'Contact',
      hero_tag:      'Le Thor, Provence',
      hero_title:    'La Garance en Provence',
      hero_sub:      'Ancien Relais de Poste du XVIIe siècle, entre Avignon et le Luberon',
      hero_cta:      'Découvrir',
      about_title:   'Un lieu d\'exception',
      about_sub:     'Ancien Relais de Poste du XVIIe siècle restauré dans le respect des matériaux d\'origine',
      about_p1:      'Nichée entre Avignon et L\'Isle-sur-la-Sorgue, aux portes du Luberon, La Garance en Provence est une demeure de caractère qui allie le charme de l\'authentique à un confort contemporain. Cette ancienne halte de diligences a été restaurée avec passion, préservant pierres apparentes, poutres anciennes et sols en pierre.',
      about_p2:      'La propriété offre une vue imprenable sur le Château de Thouzon et s\'étend dans un parc ombragé de platanes centenaires. Louée en exclusivité, elle accueille jusqu\'à 12 convives dans 6 chambres raffinées, chacune dotée de sa salle de bain privative.',
      about_f1:      '6 chambres',
      about_f2:      '12 convives',
      about_f3:      'Piscine 17m',
      about_f4:      'Parc arboré',
      about_owners:  'Régis et Chantal vous accueillent avec passion dans leur demeure familiale.',
      rooms_title:   'Les Chambres',
      rooms_sub:     'Six chambres de caractère, toutes orientées plein sud, avec salle de bain privative et douche à l\'italienne',
      room1_title:   '2 Chambres Jardin',
      room1_desc:    'Deux chambres en rez-de-jardin avec accès direct au parc et à la piscine. Lit 160 cm, salle de bain privative avec douche à l\'italienne.',
      room1_tag1:    'Rez-de-chaussée',
      room1_tag2:    'Accès jardin',
      room2_title:   '2 Chambres Bastide',
      room2_desc:    'Deux chambres à l\'étage offrant une vue dégagée sur le parc et le Château de Thouzon. Lit 160 cm, salle de bain privative avec douche à l\'italienne.',
      room2_tag1:    'Étage',
      room2_tag2:    'Vue château',
      room3_title:   '2 Chambres Provence',
      room3_desc:    'Deux chambres à l\'étage baignées de lumière, décorées dans l\'esprit provençal. Lit 160 cm, salle de bain privative avec douche à l\'italienne.',
      room3_tag1:    'Étage',
      room3_tag2:    'Plein sud',
      amen_title:    'Équipements & Services',
      amen_sub:      'Tout le confort pour un séjour inoubliable en Provence',
      amen1_title:   'Piscine à débordement',
      amen1_desc:    'Bassin de 17 mètres dans un écrin de verdure',
      amen2_title:   'Pétanque',
      amen2_desc:    'Terrain ombragé sous les platanes centenaires',
      amen3_title:   'WiFi gratuit',
      amen3_desc:    'Connexion haut débit dans toute la propriété',
      amen4_title:   'Parking privé',
      amen4_desc:    'Stationnement sécurisé, borne de recharge VE',
      amen5_title:   'Terrasse couverte',
      amen5_desc:    'Espace repas en plein air face au parc',
      amen6_title:   'Bien-être',
      amen6_desc:    'Soins et massages sur rendez-vous, à la demande',
      amen7_title:   'Local vélos',
      amen7_desc:    'Abri sécurisé pour les cyclistes',
      amen8_title:   'Famille',
      amen8_desc:    'Lit bébé et baignoire sur demande',
      amen9_title:   'Ping-pong',
      amen9_desc:    'Table de ping-pong en plein air',
      amen10_title:  'Plancha',
      amen10_desc:   'Plancha extérieure pour grillades',
      gallery_title: 'Galerie',
      gallery_sub:   'Découvrez La Garance en images',
      price_title:   'Tarifs',
      price_sub:     'Location exclusive de l\'ensemble de la propriété (6 chambres, 12 personnes)',
      price_s1:      'Haute saison',
      price_s1m:     'Juillet — Août',
      price_s2:      'Moyenne saison',
      price_s2m:     'Juin — Septembre',
      price_s3:      'Reste de l\'année',
      price_s3m:     'Octobre — Mai',
      price_week:    '/ semaine',
      price_badge:   'Populaire',
      price_note:    'Frais de ménage : <strong>250 €</strong> par semaine. Meublé de tourisme classé <strong>3 étoiles</strong>.',
      nav_booking:   'Réserver',
      price_cta:     'Vérifier les disponibilités',
      loc_title:     'Situation',
      loc_sub:       'Au cœur du Vaucluse, entre Avignon et le Luberon',
      loc_h3:        'Un emplacement privilégié',
      loc_d1:        'Avignon (centre / Palais des Papes)',
      loc_d1v:       '15 km',
      loc_d2:        'L\'Isle-sur-la-Sorgue',
      loc_d2v:       '8 km',
      loc_d3:        'Gordes / Luberon',
      loc_d3v:       '25 km',
      loc_d4:        'Aéroport Marseille-Provence',
      loc_d4v:       '75 km',
      loc_d5:        'Gare TGV Avignon',
      loc_d5v:       '18 km',
      loc_d6:        'Les Baux-de-Provence',
      loc_d6v:       '30 km',
      contact_title: 'Contact',
      contact_sub:   'Pour toute demande de réservation ou d\'information',
      ct_owner:      'Propriétaire',
      ct_address:    'Adresse',
      ct_phone:      'Téléphone',
      ct_email:      'Email',
      form_name:     'Nom',
      form_email:    'Email',
      form_dates:    'Dates souhaitées',
      form_guests:   'Nombre de personnes',
      form_message:  'Votre message',
      form_send:     'Envoyer',
      form_ph_name:  'Votre nom complet',
      form_ph_email: 'votre@email.com',
      form_ph_dates: 'ex. 12-19 juillet 2026',
      form_ph_msg:   'Précisez vos dates, nombre de personnes, questions...',
      footer_desc:   'Ancien Relais de Poste du XVIIe siècle restauré avec passion. Meublé de tourisme classé 3 étoiles.',
      footer_nav:    'Navigation',
      footer_ct:     'Contact',
      footer_copy:   '© 2026 La Garance en Provence. Tous droits réservés.',
    },
    en: {
      nav_about:     'The House',
      nav_rooms:     'Rooms',
      nav_amenities: 'Amenities',
      nav_gallery:   'Gallery',
      nav_pricing:   'Rates',
      nav_location:  'Location',
      nav_contact:   'Contact',
      hero_tag:      'Le Thor, Provence',
      hero_title:    'La Garance en Provence',
      hero_sub:      'A 17th-century former coaching inn, between Avignon and the Luberon',
      hero_cta:      'Discover',
      about_title:   'A place like no other',
      about_sub:     'A 17th-century former coaching inn, restored with original materials',
      about_p1:      'Nestled between Avignon and L\'Isle-sur-la-Sorgue, at the gateway to the Luberon, La Garance en Provence is a character-filled estate combining authentic charm with contemporary comfort. This former stagecoach stop has been lovingly restored, preserving exposed stone walls, antique beams, and stone floors.',
      about_p2:      'The property offers stunning views of Château de Thouzon and is set within grounds shaded by century-old plane trees. Available for exclusive rental, it welcomes up to 12 guests in 6 refined bedrooms, each with its own private bathroom.',
      about_f1:      '6 bedrooms',
      about_f2:      '12 guests',
      about_f3:      '17m pool',
      about_f4:      'Parkland',
      about_owners:  'Régis and Chantal warmly welcome you to their family home.',
      rooms_title:   'The Rooms',
      rooms_sub:     'Six character-filled bedrooms, all south-facing, with private bathroom and Italian shower',
      room1_title:   '2 Garden Rooms',
      room1_desc:    'Two ground-floor rooms with direct access to the garden and pool. 160 cm bed, private bathroom with Italian shower.',
      room1_tag1:    'Ground floor',
      room1_tag2:    'Garden access',
      room2_title:   '2 Bastide Rooms',
      room2_desc:    'Two upstairs rooms offering open views over the grounds and Château de Thouzon. 160 cm bed, private bathroom with Italian shower.',
      room2_tag1:    'Upper floor',
      room2_tag2:    'Castle view',
      room3_title:   '2 Provence Rooms',
      room3_desc:    'Two light-filled upstairs rooms decorated in Provençal style. 160 cm bed, private bathroom with Italian shower.',
      room3_tag1:    'Upper floor',
      room3_tag2:    'South-facing',
      amen_title:    'Amenities & Services',
      amen_sub:      'Everything you need for an unforgettable stay in Provence',
      amen1_title:   'Infinity pool',
      amen1_desc:    '17-metre pool set within lush greenery',
      amen2_title:   'Pétanque',
      amen2_desc:    'Shaded court beneath century-old plane trees',
      amen3_title:   'Free WiFi',
      amen3_desc:    'High-speed connection throughout the property',
      amen4_title:   'Private parking',
      amen4_desc:    'Secure parking with EV charging station',
      amen5_title:   'Covered terrace',
      amen5_desc:    'Outdoor dining space overlooking the grounds',
      amen6_title:   'Wellness',
      amen6_desc:    'Spa treatments and massages by appointment, on request',
      amen7_title:   'Bike storage',
      amen7_desc:    'Secure shelter for cyclists',
      amen8_title:   'Family-friendly',
      amen8_desc:    'Baby bed and bath available on request',
      amen9_title:   'Table tennis',
      amen9_desc:    'Outdoor ping-pong table',
      amen10_title:  'Plancha',
      amen10_desc:   'Outdoor plancha grill for barbecues',
      gallery_title: 'Gallery',
      gallery_sub:   'Discover La Garance in pictures',
      price_title:   'Rates',
      price_sub:     'Exclusive rental of the entire property (6 bedrooms, 12 guests)',
      price_s1:      'High season',
      price_s1m:     'July — August',
      price_s2:      'Mid season',
      price_s2m:     'June — September',
      price_s3:      'Rest of the year',
      price_s3m:     'October — May',
      price_week:    '/ week',
      price_badge:   'Popular',
      price_note:    'Cleaning fee: <strong>€250</strong> per week. Classified <strong>3-star</strong> vacation rental (meublé de tourisme).',
      nav_booking:   'Book',
      price_cta:     'Check availability',
      loc_title:     'Location',
      loc_sub:       'In the heart of Vaucluse, between Avignon and the Luberon',
      loc_h3:        'A privileged location',
      loc_d1:        'Avignon (city centre / Papal Palace)',
      loc_d1v:       '15 km',
      loc_d2:        'L\'Isle-sur-la-Sorgue',
      loc_d2v:       '8 km',
      loc_d3:        'Gordes / Luberon',
      loc_d3v:       '25 km',
      loc_d4:        'Marseille-Provence Airport',
      loc_d4v:       '75 km',
      loc_d5:        'Avignon TGV station',
      loc_d5v:       '18 km',
      loc_d6:        'Les Baux-de-Provence',
      loc_d6v:       '30 km',
      contact_title: 'Contact',
      contact_sub:   'For booking enquiries or information',
      ct_owner:      'Owner',
      ct_address:    'Address',
      ct_phone:      'Phone',
      ct_email:      'Email',
      form_name:     'Name',
      form_email:    'Email',
      form_dates:    'Preferred dates',
      form_guests:   'Number of guests',
      form_message:  'Your message',
      form_send:     'Send',
      form_ph_name:  'Your full name',
      form_ph_email: 'your@email.com',
      form_ph_dates: 'e.g. 12-19 July 2026',
      form_ph_msg:   'Dates, number of guests, questions...',
      footer_desc:   'A 17th-century former coaching inn, lovingly restored. Classified 3-star vacation rental.',
      footer_nav:    'Navigation',
      footer_ct:     'Contact',
      footer_copy:   '© 2026 La Garance en Provence. All rights reserved.',
    }
  };

  let currentLang = 'fr';

  // ----------------------------------------------------------
  // DOM Ready
  // ----------------------------------------------------------
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupLanguage();
    setupHeader();
    setupMobileMenu();
    setupSmoothScroll();
    setupRevealAnimations();
    setupLightbox();
    setupContactForm();
    // Hero slow zoom
    setTimeout(() => document.querySelector('.hero')?.classList.add('loaded'), 100);
  }

  // ----------------------------------------------------------
  // Language system
  // ----------------------------------------------------------
  function setupLanguage() {
    // Check URL hash or localStorage
    const saved = localStorage.getItem('garance-lang');
    if (saved === 'en' || saved === 'fr') currentLang = saved;

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('garance-lang', currentLang);
        applyTranslations();
        updateLangButtons();
      });
    });

    applyTranslations();
    updateLangButtons();
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  function applyTranslations() {
    const t = T[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });
    document.documentElement.lang = currentLang;
  }

  // ----------------------------------------------------------
  // Header scroll behavior
  // ----------------------------------------------------------
  function setupHeader() {
    const header = document.querySelector('.site-header');
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a[href^="#"]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // ----------------------------------------------------------
  // Mobile menu
  // ----------------------------------------------------------
  function setupMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });

    // Close on link click
    navLinks?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----------------------------------------------------------
  // Smooth scroll
  // ----------------------------------------------------------
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ----------------------------------------------------------
  // Reveal on scroll
  // ----------------------------------------------------------
  function setupRevealAnimations() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ----------------------------------------------------------
  // Gallery lightbox
  // ----------------------------------------------------------
  function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lbImg = lightbox.querySelector('img');
    const items = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    items.forEach((item, idx) => {
      item.addEventListener('click', () => {
        currentIndex = idx;
        openLightbox();
      });
    });

    function openLightbox() {
      const img = items[currentIndex].querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    lightbox.querySelector('.lightbox-prev').addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      openLightbox();
    });

    lightbox.querySelector('.lightbox-next').addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % items.length;
      openLightbox();
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + items.length) % items.length; openLightbox(); }
      if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % items.length; openLightbox(); }
    });
  }

  // ----------------------------------------------------------
  // Contact form (mailto — no backend needed)
  // ----------------------------------------------------------
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]').value;
      const email = form.querySelector('[name="email"]').value;
      const dates = form.querySelector('[name="dates"]').value || '-';
      const guests = form.querySelector('[name="guests"]').value || '-';
      const message = form.querySelector('[name="message"]').value || '-';

      const subject = encodeURIComponent(`Contact La Garance - ${name}`);
      const body = encodeURIComponent(
        `Nom: ${name}\nEmail: ${email}\nDates souhaitees: ${dates}\nVoyageurs: ${guests}\n\nMessage:\n${message}`
      );

      const _e = atob('Y29udGFjdEBnYXJhbmNlLXByb3ZlbmNlLmNvbQ==');
      window.location.href = `mailto:${_e}?subject=${subject}&body=${body}`;

      form.innerHTML = currentLang === 'fr'
        ? '<div style="text-align:center;padding:40px 0"><h3 style="color:var(--olive);margin-bottom:8px">Message envoy\u00e9 !</h3><p>R\u00e9gis vous r\u00e9pondra dans les meilleurs d\u00e9lais.</p></div>'
        : '<div style="text-align:center;padding:40px 0"><h3 style="color:var(--olive);margin-bottom:8px">Message sent!</h3><p>R\u00e9gis will get back to you shortly.</p></div>';
    });
  }

})();
