<template>
  <section class="s-contacts">
    <div class="container">
      <h1 class="title" data-aos="fade">Contacts</h1>

      <div class="layout">
        <div class="col">
          <h3 class="subtitle">
            <span>GMS</span> Headquarters</h3>
            <div class="layout">
              <div class="sub-col">
                <p>Global Message Services Ukraine LLC</p>
                <p>Bundesstrasse 5 | 3rd Floor</p>
                <p>6300 Zug</p>
                <p>Switzerland</p>
                <a class="large-link" href="tel:+41 41 544 62 00">+41 41 544 62 00</a>
              </div>
              <div class="sub-col">
                <div class="contact">
                  <span>Email</span>
                  <a href="mail:info@gms-worldwide.com">info@gms-worldwide.com</a>
                </div>
                <div class="contact">
                  <span>Send message</span>
                  <a href="viber.com">Viber us</a>
                </div>
                <div class="contact">
                  <span>Send form</span>
                  <a href="#" v-scroll-to="'#contact-us'">Contact us</a>
                </div>
              </div>
            </div>
        </div>

        <div class="col">
          <h3 class="subtitle">
            Technical support <span>24/7</span>
          </h3>
          <p>GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
          <a class="large-link" href="tel:+41 41 544 62 06">+41 41 544 62 06</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
    name: 'Contacts',
};
</script>
