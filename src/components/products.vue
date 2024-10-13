<template>
  <!-- START PORTFOLIOS -->
  <section id="portfolio" class="portfolio_area section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h1 class="font-moonspace-special">{{ $t(`Our_Products`) }}</h1>
        <p class="font-moonspace" style="text-align: center !important">We can implement and customize any type of the project depend on your business and requirements</p>
      </div>
      <div class="row portfolio_item">
        <!-- <div class="col-lg-12 text-center">
					<div class="portfolio_filter">
						<ul>
							<li class="active filter" data-filter="all">All</li>
							<li class="filter" data-filter=".design">Design</li>
							<li class="filter" data-filter=".print">print</li>
							<li class="filter" data-filter=".logo">logo</li>
							<li class="filter" data-filter=".marketing">Marketing</li>
							<li class="filter" data-filter=".media">Social media</li>
							<li class="filter" data-filter=".web">Web Details</li>
							<li class="filter" data-filter=".video">Video</li>
						</ul>
					</div>
				</div>END COL				 -->
        <!-- <div class="col-xs-12 col-sm-6 col-lg-4 mix print marketing">		 -->
        <div v-for="(productData, index) in productInfo" :key="index" class="col-xs-12 col-sm-6 col-lg-4 print marketing">
          <div class="box">
            <img :src= productData.img alt="Image Not Found" />
            <div class="box-content">
              <h3 class="title">{{productData.title}}</h3>
              <span class="post">{{productData.post}}</span>
            </div>
            <ul class="icon">
              <li>
                <a :href=productData.img class="port-icon lightbox" data-gall="gall-work">
                  <i class="bi bi-zoom-in"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank"><i class="fa fa-link"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <!--- END COL -->
      </div>
      <!-- / END ROW -->
    </div>
    <!-- END CONTAINER  -->
  </section>
  <!-- END PORTFOLIOS -->
</template>

<script>
export default {
  data () {
    return {
        productInfo : [
          { img : `assets/img/portfolio/1.jpg` , title : `Design Landing Page` , post : `Branding , Design` },
          { img : `assets/img/portfolio/2.jpg` , title : `Web Project` , post : `Website, logo` },
          { img : `assets/img/portfolio/3.jpg` , title : `logo company` , post : `logo,graphics` },
          { img : `assets/img/portfolio/4.jpg` , title : `Digital Marketing` , post : `Design, Web` },
          { img : `assets/img/portfolio/5.jpg` , title : `Print media` , post : `Print media` },
          { img : `assets/img/portfolio/6.jpg` , title : `Logo Marketing` , post : `social, media` },
        ],
    }
  }
}
</script>
