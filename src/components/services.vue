<template>
  <!-- START SERVICE -->
  <section id="service" class="service_area section-padding">
    <div class="container">
      <h1 class="font-moonspace-special">{{ $t(`Our_Services`) }}</h1>
      <strong class="font-moonspace">WE MAKE YOU FEEL COMFORT, SAFE, EASY AND LASTLY, SUPER SAVE</strong>
      <div class="row text-center">
        <div v-for="(service, index) in serviceInfo" :key="index"
          class="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <div  class="serviceBox sbbr">
            <div class="service-icon">
              <span>
                <svg
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 511.883 511.883"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <polygon
                      style="fill: #ccd1d9"
                      points="341.251,479.885 170.618,479.885 191.894,373.316 319.942,373.285 "
                    ></polygon>
                    <g>
                      <path
                        style="fill: #e6e9ed"
                        d="M511.883,383.909c0,5.905-4.781,10.653-10.67,10.653H10.654C4.78,394.561,0,389.814,0,383.908 V42.651c0-5.889,4.78-10.653,10.654-10.653h490.559c5.889,0,10.67,4.764,10.67,10.653V383.909z"
                      ></path>
                      <path
                        style="fill: #e6e9ed"
                        d="M341.251,479.885H170.618c-5.874,0-10.654-4.779-10.654-10.653c0-5.905,4.78-10.686,10.654-10.686 h170.633c5.889,0,10.669,4.78,10.669,10.686C351.92,475.107,347.139,479.885,341.251,479.885z"
                      ></path>
                    </g>
                    <path
                      style="fill: #656d78"
                      d="M501.213,31.998H10.654C4.78,31.998,0,36.762,0,42.651v287.926h511.883V42.651 C511.883,36.762,507.102,31.998,501.213,31.998z"
                    ></path>
                    <path
                      style="fill: #434a54"
                      d="M266.595,362.569c0,5.905-4.765,10.685-10.654,10.685c-5.889,0-10.669-4.779-10.669-10.685 c0-5.874,4.78-10.653,10.669-10.653C261.83,351.916,266.595,356.695,266.595,362.569z"
                    ></path>
                    <path
                      style="fill: #fc6e51"
                      d="M373.243,74.644H53.317c-5.89,0-10.669,4.78-10.669,10.669c0,5.89,4.78,10.67,10.669,10.67h319.926 c5.889,0,10.67-4.78,10.67-10.67C383.913,79.424,379.131,74.644,373.243,74.644z"
                    ></path>
                    <path
                      style="fill: #ac92eb"
                      d="M53.317,138.63h170.632c5.89,0,10.654-4.765,10.654-10.654c0-5.905-4.764-10.669-10.654-10.669 H53.317c-5.89,0-10.669,4.764-10.669,10.669C42.647,133.865,47.427,138.63,53.317,138.63z"
                    ></path>
                    <path
                      style="fill: #48cfad"
                      d="M53.317,181.29h234.618c5.89,0,10.654-4.78,10.654-10.669s-4.765-10.653-10.654-10.653H53.317 c-5.89,0-10.669,4.764-10.669,10.653C42.647,176.51,47.427,181.29,53.317,181.29z"
                    ></path>
                    <path
                      style="fill: #5d9cec"
                      d="M53.317,223.938l149.293,0.016c5.905,0,10.669-4.78,10.669-10.669 c0-5.889-4.764-10.669-10.669-10.669H53.317c-5.89,0-10.669,4.78-10.669,10.669C42.647,219.173,47.427,223.938,53.317,223.938z"
                    ></path>
                    <path
                      style="fill: #ffce54"
                      d="M330.581,245.275H53.317c-5.89,0-10.669,4.78-10.669,10.654c0,5.905,4.78,10.67,10.669,10.67h277.264 c5.905,0,10.67-4.765,10.67-10.654C341.251,250.057,336.486,245.275,330.581,245.275z"
                    ></path>
                    <path
                      style="fill: #ed5564"
                      d="M138.625,287.93H53.317c-5.89,0-10.669,4.781-10.669,10.654c0,5.905,4.78,10.686,10.669,10.686 h85.309c5.905,0,10.669-4.78,10.669-10.686C149.295,292.711,144.53,287.93,138.625,287.93z"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <h3 class="title">{{service.header}}</h3>
            <p class="font-moonspace">
              {{ service.desc }}
            </p>
          </div>
        </div>
        <!-- END COL -->

      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </section>
  <!-- END SERVICE -->

  <!-- START PRICING -->
  <div class="container py-3">
    <main>
      <h1 class="font-moonspace-special">{{ $t(`PRICING`) }}</h1>
      <br />
      <p class="font-moonspace" style="text-align: center !important">
        Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built
        with default Bootstrap components and utilities with little customization.
      </p>
      <br />
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div  v-for="(priceData , index) in pricingInfo" :key="index" class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="header-card-color card-header py-3">
              <h4 class="font-moonspace-special">{{priceData.haeder}}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                {{priceData.price}}
              </h1>
              <ul class="font-moonspace mt-3 mb-4" style="text-align: center !important">
                <li>{{ priceData.info }}</li><br>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return {
      serviceInfo : [
        { header: "Software Development" , desc : "We develop software solutions that address your specific business needs and challenges, ensuring a perfect fit for your operations and convenient to use." },
        { header: "Mobile App Development" , desc : "Our team creates intuitive and engaging mobile applications for both Android and iOS platforms, designed to enhance UX and drive engagement." },
        { header: "Web Development" , desc : "We build responsive and dynamic websites that offer seamless navigation, superior performance, and an outstanding user experience." },
        { header: "Enterprise Solutions" , desc : "We provide scalable enterprise software solutions that streamline business processes, improve productivity, and support your growth and fullfil quality" },
        { header: "Cloud Computing" , desc : "Our cloud solutions offer enhanced flexibility, scalability, and security, enabling you to access your data and applications anytime, anywhere." },
        { header: "UI/UX Design" , desc : "Our design team focuses on creating user-centric interfaces and experiences that are not only visually appealing but also highly functional." },
      ],

      pricingInfo: [
        { haeder : "Small Enterprises" , info : "30 users included 15 GB of storage Phone and email support Help center access" , price: "$20000"},
        { haeder : "Medium Enterprises" , info : "30 users included 15 GB of storage Phone and email support Help center access", price: "$50000" },
        { haeder : "Large Enterprises" , info : "30 users included 15 GB of storage Phone and email support Help center access", price: "$200000"},
      ],
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #191a1c;
  border-color: whitesmoke;
}
.header-card-color {
  border-color: whitesmoke;
}
</style>
