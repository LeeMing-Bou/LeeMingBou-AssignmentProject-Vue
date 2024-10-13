// src/i18n.js
import { createI18n } from 'vue-i18n';

// Define messages for each locale
const messages = {
  en: {
    home: 'HOME',
    about: 'ABOUT ME',
    services: 'SERVICES',
    products: 'PRODUCTS',
    team: 'TEAM',
    blog: 'BLOG',
    ABOUT_ME: `ABOUT ME`,
    Additional_Information: `Additional Information`,
    EDUCATIONS: `EDUCATIONS`,
    Work_Experiences: `Work Experiences`,
    Education: `Education`,
    MY_ENTERTAINMENT: `MY ENTERTAINMENT`,
    Our_Services: `Our Services`,
    PRICING: `PRICING`,
    Our_Products: `Our Products`,
    Meet_Our_Team: `Meet Our Team`,
    Our_Mission: `Our Mission`,
    Our_Vision: `Our Vision`,
    Join_Us: `Join Us`,
    Development_Team: `Development Team`,
    WELCOME_TO_MY_BLOG: `WELCOME TO MY BLOG`,
    Contact: `Contact`,
  },
  khm: {
    home: 'ទំព័រដើម',
    about: 'អំពីខ្ញុំ',
    services: 'សេវាកម្ម',
    products: 'ផលិតផល',
    team: 'ក្រុមការងារ',
    blog: 'ប្លុក',
    ABOUT_ME: `អំពីខ្ញុំ`,
    Additional_Information: `ព័ត៌មានបន្ថែម`,
    EDUCATIONS: `កម្រិតវប្បធម៌`,
    Work_Experiences: `បទពិសោធន៍ការងារ`,
    Education: `កម្រិតវប្បធម៌`,
    MY_ENTERTAINMENT: `ការកំសាន្តរបស់ខ្ញុំ`,
    Our_Services: `សេវាកម្ម`,
    PRICING: `តម្លៃសេវាកម្ម`,
    Our_Products: `ផលិតផល`,
    Meet_Our_Team: `ជួបជាមួយក្រុមរបស់យើង`,
    Our_Mission: `បេសកកម្មរបស់យើង`,
    Our_Vision: `ចក្ខុវិស័យរបស់យើង`,
    Join_Us: `ចូលរួមជាមួយពួកយើង`,
    Development_Team: `ក្រុមអភិវឌ្ឍន៍`,
    WELCOME_TO_MY_BLOG: `សូមស្វាគមន៍មកកាន់ប្លុករបស់ខ្ញុំ`,
    Contact: `ទំនាក់ទំនង`,
  },
};

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
