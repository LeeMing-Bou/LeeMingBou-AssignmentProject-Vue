<template>
  <!-- START ABOUT -->
  <section id="about" class="about_area section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h1 class="font-moonspace-special">{{ $t(`ABOUT_ME`) }}</h1>
        <p class="font-moonspace" style="text-align: center !important;">
          Hi! My name is
          <span style="color: greenyellow">LeeMing Bou</span>
          .
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-sm-12 col-xs-12 fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <div class="about_img">
            <img src="assets/img/myprofile.JPG" class="img-fluid" alt="profile-picture" />
          </div>
        </div>
        <!-- / END COL -->
        <div
          class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset="0"
        >
          <div class="about_info">
            <h2 class="font-moonspace-special">{{ $t(`Additional_Information`) }}</h2><br>
            <p class="font-moonspace">
              Currently, I have such a great opportunity to study the Professional course that organized by the MPTC as a "FULLSTACK DEVELOPMENT" course THE
              SUBJECTS THAT I HAVE LEARNED AT CADT AS A FULL STACK DEVELOPMENT are including
            </p>
          </div>
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">UX/UI Design</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Web Development</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Front-End Vue</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Database</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Back-End Express JS</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 10%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              10%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Dev Ops</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Mobile App Development</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Project 1</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
          <!-- PROFRESS BAR -->
          <span><h3 class="font-moonspace">Project 2</h3></span>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </div>
          </div>
          <!-- END PROGRESS BAR -->
        </div>
        <!-- / END COL -->
      </div>
      <!-- / END ROW -->
    </div>
    <!-- END CONTAINER  -->
  </section>
  <!-- END ABOUT -->

  <!-- START RESUME -->
  <section id="resume" class="resume_area section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h1 class="font-moonspace-special">{{ $t(`EDUCATIONS`) }}</h1>
        <p class="font-moonspace" style="text-align: center !important">
          Education is significant wealth that is priceless
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset="0"
        >
          <h4 class="timeline_title">{{ $t(`Education`) }}</h4>
          <div class="single_timeline">
            <h4>Royal University of Phnom Penh</h4>
            <span class="active_year">2016 ~ 2020</span>
            <span class="active_company">- Bachelor's Degree in Computer Science.</span>
            <p class="font-moonspace">I am thrilled to annouce you should learn what you love the most</p>
          </div>
          <div class="single_timeline">
            <h4>Institue of Foreign Languages</h4>
            <span class="active_year">2019 ~ 2023</span>
            <span class="active_company">- BA of Professional Communication.</span>
            <p class="font-moonspace">
              It was such a great moment when I studied there because I can learn many new things from there.
            </p>
          </div>
          <div class="single_timeline">
            <h4>FullStack Development at CADT</h4>
            <span class="active_year">2024 ~ Present</span>
            <span class="active_company">UX/UI, Web Basic, Front-End, Back-End, Database, Mobile</span>
            <p class="font-moonspace">
              I am thrilled that I have a great opportunity to study at CADT in additional, I can learn many things that
              have been taught by good lecturer
            </p>
          </div>
        </div>
        <!--END COL -->
        <div
          class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-wow-offset="0"
        >
          <h4 class="timeline_title">{{ $t(`Work_Experiences`) }}</h4>
          <div class="single_timeline">
            <h4>Mobile C&C Inc</h4>
            <span class="active_year">2020 ~ 2023</span>
            <span class="active_company">- I was a software Engineer.</span>
            <p class="font-moonspace">
              I have learnt many things from my previous workplace more importantly, I have implemented some projects for the client
              as well.
            </p>
          </div>
          <div class="single_timeline">
            <h4>Work at Ministry of Culture and Fine Arts</h4>
            <span class="active_year">2024 ~ Present</span>
            <span class="active_company">- Civil Servant</span>
            <p class="font-moonspace">
              Currently, I am working at MCFA under Department of CopyRight and Related Right
            </p>
          </div>
          <div class="single_timeline single_timeline_mbnone">
            <h4>Stuying</h4>
            <span class="active_year">2024 ~ Present</span>
            <span class="active_company">- Studying</span>
            <p class="font-moonspace">Still studying the Professional course at CADT</p>
          </div>
        </div>
        <!--END COL -->
      </div>
      <!-- / END ROW -->
    </div>
    <!-- END CONTAINER  -->
  </section>
  <!-- END RESUME -->

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="../assets/entertainment.jpg"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 font-moonspace-special">{{ $t(`MY_ENTERTAINMENT`) }}</h1>
        <p class="font-moonspace">
          I like to play badminton the most because of researching I have found one of this sports is the safety sport
          ever that has less accident during competition. Moreover, this sport is good for everyone to play in and enjoy
          it.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
