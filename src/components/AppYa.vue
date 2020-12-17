<template>
  <div class="m-0 p-0">
    <home-page></home-page>

    <about-page></about-page>

    <pricing-page></pricing-page>

    <contact-page></contact-page>

    <footer-page></footer-page>
  </div>
</template>

<script>
import HomePage from "./HomePage.vue";
import AboutPage from "./AboutPage.vue";
import PricingPage from "./PricingPage.vue";
import ContactPage from "./ContactPage.vue";
import FooterPage from "./FooterPage.vue";

export default {
  components: {
    HomePage,
    AboutPage,
    PricingPage,
    ContactPage,
    FooterPage,
  },
};
</script>