<template>
  <AboutPage></AboutPage>
  <Services></Services>
  <Product></Product>
  <Counting></Counting>
  <TeamWork></TeamWork>
  <BlogInfo></BlogInfo>
  <Contact></Contact>
  <Footer></Footer>
</template>

<script>
import AboutPage from '@/components/aboutpage.vue';
import Services from '@/components/services.vue';
import Product from '@/components/products.vue';
import TeamWork from '@/components/teamwork.vue';
import Counting from '@/components/counting.vue';
import BlogInfo from '@/components/blogInfo.vue';
import Contact from '@/components/contact.vue';

export default {
  name: 'App',
  components: {
    AboutPage,
    Services,
    Product,
    TeamWork,
    Counting,
    BlogInfo,
    Contact,
  },
};
</script>
