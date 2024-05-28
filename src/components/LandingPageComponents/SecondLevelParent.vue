<template>
  <div>
    <div class="cont2">
      <PositivesAndNegatives />
    </div>
    <div class="cont">
      <HowToComponent />
    </div>
  </div>
</template>

<script>
import PositivesAndNegatives from "./SecondLevelChildren/PositivesAndNegatives.vue";
import HowToComponent from "./SecondLevelChildren/HowToComponent.vue";
export default {
  name: "SecondLevelParent",
  components: {
    PositivesAndNegatives,
    HowToComponent,
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .cont {
    margin-top: 2rem;
  }
}
</style>
