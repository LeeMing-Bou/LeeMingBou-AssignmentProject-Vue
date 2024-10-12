<template>
  <!-- START NAVBAR -->
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light nav-sticky">
    <div class="container">
      <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt="" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mdi mdi-menu"></span>
      </button>
      <!--END BUTTON-->
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul id="navbar-navlist" class="navbar-nav ms-auto">
          <li
            v-for="(navBar, index) in navs"
            :key="index"
            :class="{ active: $route.path == navBar.path }"
            class="nav-item"
          >
            <router-link :to="navBar.path" class="nav-link">{{ $t(navBar.name) }}</router-link>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-primary me-2" @click="changeLanguage">
              <img v-if="this.$i18n.locale == 'en'" src="../assets/khflag1.png" alt="KH-Flag" width="60" height="30" />
              <img v-if="this.$i18n.locale !== 'en'" src="../assets/enflag1.png" alt="KH-Flag" width="60" height="30" />
            </button>
          </li>
        </ul>
        <!--END NAVBAR NAV-->
      </div>
      <!--END COLLAPSE-->
    </div>
    <!--END CONTAINER -->
  </nav>
  <!-- END NAVBAR-->
  <!-- START HOME -->
  <section
    data-stellar-background-ratio="0.3"
    id="home"
    class="home_bg"
    style="background-image: url(assets/img/bg.jpg); background-size: cover; background-position: center center"
  >
    <div id="particles-js"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12 col-xs-12">
          <div class="about_me_content">
            <span class="welcome">WELCOME TO MY PORTFOLIO</span>
            <br />
            <h1
              class="typewrite"
              data-period="2000"
              data-type='[ "Name: LeeMing BOU", "Contact: +855 012 345 678", "Email: pozzzming123@gamil.com", "Address: Phnom Penh", "Position: Student"]'
            >
              <span class="wrap"></span>
            </h1>
          </div>
        </div>
        <!-- END COL-->
      </div>
      <!--- END ROW -->
    </div>
    <!--- END CONTAINER -->
  </section>
  <!-- END  HOME -->
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: 'home',
          path: '/',
        },
        {
          name: 'about',
          path: '/about',
        },
        {
          name: 'services',
          path: '/services',
        },
        {
          name: 'products',
          path: '/products',
        },
        {
          name: 'team',
          path: '/teamwork',
        },
        {
          name: 'blog',
          path: '/blogcontent',
        },
      ],
    };
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale == 'en') {
        this.$i18n.locale = 'khm';
      } else {
        this.$i18n.locale = 'en';
      }
    },
  },
};
</script>

<style scoped>
.welcome {
  font-size: 2rem;
  margin: auto;
  text-shadow: 2px 2px whitesmoke;
}
</style>
