<template>
  <div>
    <div class="header">
      <HeaderComp />
    </div>
    <div class="tp">
      <TopLevelComponent />
    </div>
    <SecondLevelParent />
    <div class="faw">
      <FAQComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import TopLevelComponent from "./TopLevelComponent.vue";
import SecondLevelParent from "./SecondLevelParent.vue";
import FAQComponent from "./FAQComponent.vue";
import HeaderComp from "./HeaderComp.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  name: "LandingPage",
  components: {
    TopLevelComponent,
    HeaderComp,
    SecondLevelParent,
    FAQComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.faq-container {
  background-color: #f7f8fc;
}
@media (max-width: 768px) {
  .tp {
    margin-top: 50px;
  }
}
</style>
