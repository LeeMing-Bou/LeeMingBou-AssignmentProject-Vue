<template>
  <!-- START TEAM -->
  <section id="team" class="our_team section-padding">
    <div class="container">
      <div class="team-content">
        <h1 class="font-moonspace-special">{{ $t(`Meet_Our_Team`) }}</h1>
        <div class="container px-4 py-5">
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div v-for="(team, index) in TeamInfo" :key="index" class="col d-flex align-items-start">
              <div
                class="icon-square font-moonspace-special bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
              >
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#cpu-fill"></use>
                </svg>
              </div>
              <div>
                <h3 class="fs-2 text-body-emphasis sub-header-team">{{ team.header }}</h3>
                <br />
                <p v-if="team.isTurnText == true" class="font-moonspace">
                  {{ team.shortText }}
                </p>
                <p v-if="team.isTurnText !== true" class="font-moonspace">
                  {{ team.fullText }}
                </p>
                <br />
                <button class="w-5 btn btn-sm btn-primary" @click="toggleReadMore(index)">
                  {{ team.isTurnText ? 'Read More' : 'Read Less' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h1 class="font-moonspace-special">{{ $t(`Development_Team`) }}</h1>
        <!-- Development Team -->
        <div
          v-for="(devinfo, index) in devTeam"
          :key="index"
          class="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <div class="single-team">
            <div class="img">
              <img :src="devinfo.img" class="img-fluid" alt="" />
            </div>
            <div class="team-content">
              <h3 class="font-moonspace-special">{{ devinfo.name }}</h3>
              <p class="font-moonspace" style="text-align: center !important">{{ devinfo.position }}</p>
              <!-- Social Info -->
              <div class="container">
                <ul class="button-socials col-md-4 justify-content-end list-unstyled d-flex">
                  <li class="ms-3">
                    <a class="text-body-secondary" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a class="text-body-secondary" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a class="text-body-secondary" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-telegram"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- End Social Info -->
            </div>
          </div>
        </div>
        <!-- Development Team -->
      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </section>
  <!-- END TEAM -->
</template>

<script>
export default {
  data() {
    return {
      TeamInfo: [
        {
          header: 'Our Mission',
          isTurnText: true,
          fullText: `Welcome to our team page! We are a dedicated group of professionals committed to delivering innovative
                      solutions and exceptional results. Our diverse expertise and collaborative spirit drive the success of
                      our projects and the satisfaction of our clients.`,
          shortText: 'Welcome to our team page! We are a dedicated group of professionals',
        },
        {
          header: 'Our Vision',
          isTurnText: true,
          fullText: `We Envision A Future Where Technology Seamlessly Integrates With Daily Life, Enhancing Productivity, Creativity, And Connectivity. Our Goal Is To Be At The Forefront Of This Transformation, Leading The Way With Cutting-Edge Solutions That Make A Meaningful Impact On Society And The Global Community.`,
          shortText: 'We Envision A Future Where Technology Seamlessly Integrates With Daily Life',
        },
        {
          header: 'Join Us',
          isTurnText: true,
          fullText: `We are excited about the future and invite you to join us on this journey. Whether you are a potential
                  client, partner, or team member, we look forward to collaborating with you to create a brighter and
                  more innovative future.`,
          shortText: 'We are excited about the future and invite you to join us on this journey',
        },
      ],

      devTeam: [
        {
          name: `Mr. Mac`,
          position: `Team Lead Developer`,
          img: `assets/img/team/team1.jpg`,
        },
        {
          name: `Mrs. ASUS`,
          position: `Database Manager`,
          img: `assets/img/team/team2.jpg`,
        },
        {
          name: `Mr. DELL`,
          position: `Cyber Security Manager`,
          img: `assets/img/team/team3.jpg`,
        },
        {
          name: `Mrs. Apple`,
          position: `UX/UI Design Manager`,
          img: `assets/img/team/team4.jpg`,
        },
      ],
    };
  },
  methods: {
    //Array check with index
    toggleReadMore(index) {
      //Dynamic changed True False Condition
      this.TeamInfo[index].isTurnText = !this.TeamInfo[index].isTurnText;
      console.log('ReadMore', !this.TeamInfo.isTurnText);
    },
  },
};
</script>

<style scoped>
.font-moonspace {
  text-align: left;
  font-size: 1.5rem;
}
.header-team {
  text-decoration: underline overline;
}
.sub-header-team {
  text-decoration: underline whitesmoke 3px;
}
.button-socials {
  margin: 20px 100px;
}
</style>
