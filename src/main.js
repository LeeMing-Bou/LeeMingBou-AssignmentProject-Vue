import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from '@/pages/homepage.vue';
import AboutPage from '@/components/aboutpage.vue';
import Services from '@/components/services.vue';
import Product from '@/components/products.vue';
import TeamWork from '@/components/teamwork.vue';
import BlogInfo from '@/components/blogInfo.vue';
import NotFoundPage from '@/components/notFoundPage.vue'

//Must Assign route name as "routes"
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutPage },
  { path: '/services', component: Services },
  { path: '/products', component: Product },
  { path: '/teamwork', component: TeamWork },
  { path: '/blogcontent', component: BlogInfo },
  //Wrong URL Will show page NOT Found
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create a function to load an external script
// function loadScript(url) {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = url;
//       script.onload = resolve;
//       script.onerror = reject;
//       document.head.appendChild(script);
//     });
//   }

const app = createApp(App);

// // Load jQuery script before mounting the app
// loadScript('/assets/js/jquery-1.12.4.min.js')
// .then(() => {
//     console.log('jQuery loaded');
//     app.use(router).mount('#app');
// })
// .catch((err) => {
//     console.error('Failed to load jQuery:', err);
//     app.use(router).mount('#app');
// });

app.use(router);
app.use(i18n);
app.mount('#app');
