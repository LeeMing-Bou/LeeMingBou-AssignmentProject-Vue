// src/i18n.js
import { createI18n } from 'vue-i18n';

// Define messages for each locale
const messages = {
  en: {
    home: 'HOME',
    about: 'ABOUT US',
    services: 'SERVICES',
    products: 'PRODUCTS',
    team: 'TEAM',
    blog: 'BLOG',
  },
  khm: {
    home: 'ទំព័រដើម',
    about: 'អំពីយើង',
    services: 'សេវាកម្ម',
    products: 'ហេតុអ្វី',
    team: 'ក្រុមការងារ',
    blog: 'ប្លុក',

  },
};

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
