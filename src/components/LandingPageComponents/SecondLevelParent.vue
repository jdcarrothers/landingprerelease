<template>
  <div>
    <PositivesAndNegatives />
    <QuoteComponent />
  </div>
</template>

<script>
import PositivesAndNegatives from "./SecondLevelChildren/PositivesAndNegatives.vue";
import QuoteComponent from "./SecondLevelChildren/QuoteComponent.vue";
export default {
  name: "SecondLevelParent",
  components: {
    PositivesAndNegatives,
    QuoteComponent,
  },
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
