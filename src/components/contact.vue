<template>
  <!-- START CONTACT -->
  <section id="contact" class="contact_us section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h1 class="font-moonspace-special">contact</h1>
        <p class="font-moonspace" style="text-align: center !important">
          After reviewing, if you are interesting in something on our services or Product, DO NOT Hesitate to contact us
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-8 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset="0"
        >
          <div class="contact">
            <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
              <div class="row">
                <div class="form-group col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Name" required />
                </div>
                <div class="form-group col-md-6">
                  <input type="email" name="email" class="form-control" placeholder="Email" required />
                </div>
                <div class="form-group col-md-12">
                  <input type="text" name="subject" class="form-control" placeholder="Subject" required />
                </div>
                <div class="form-group col-md-12">
                  <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required></textarea>
                </div>
                <div class="col-md-12 text-center">
                  <button
                    type="submit"
                    value="Send message"
                    name="submit"
                    id="submitButton"
                    class="btn btn-lg contact_btn font-moonspace"
                    style="text-align: center !important"
                    title="Submit Your Message!"
                  >
                    Touch here
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- END COL  -->
        <div
          class="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-wow-offset="0"
        >
          <div class="address_bg">
            <div class="single_address">
              <div class="address_br">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                  />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <h4>Address</h4>
              <p class="font-moonspace" style="text-align: center !important">
                St.371, Terk Tla, Sen Sok
                <br />
                Phnom Penh
              </p>
            </div>
            <div class="single_address">
              <div class="address_br">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </div>
              <h4>Phone</h4>
              <p class="font-moonspace" style="text-align: center !important">+855 012 345 678</p>
            </div>
            <div class="single_address">
              <div class="address_br">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                  />
                </svg>
              </div>
              <h4>Email</h4>
              <p class="font-moonspace" style="text-align: center !important">pozzzming123@gmail.com</p>
            </div>
            <div class="single_address">
              <div class="address_br">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-calendar-day"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V7.418h-.672z"
                  />
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                  />
                </svg>
              </div>
              <h4>Working Hours</h4>
              <p class="font-moonspace" style="text-align: center !important">Mon to Fri 9:00am to 5:00pm</p>
            </div>
          </div>
        </div>
        <!-- END COL  -->
      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </section>
  <!-- END CONTACT -->
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8949.788735180888!2d104.90911947747932!3d11.653065142407767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516bdea989b3%3A0x372d2c5e0e14b706!2sCambodia%20Academy%20of%20Digital%20Technology%20(CADT)!5e1!3m2!1sen!2skh!4v1728676468198!5m2!1sen!2skh"
      width="800"
      height="600"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
