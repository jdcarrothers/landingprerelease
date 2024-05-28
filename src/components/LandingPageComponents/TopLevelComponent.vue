<template>
  <div class="main-container">
    <div class="header-container">
      <h1 class="custom-header">Focus on living,</h1>
      <h1 class="custom-header">not marking.</h1>
    </div>
    <div class="subtitle">
      <p class="custom-subtitle">
        Empower your teaching with AI for marking, analysis, and support, so you can focus
        on what matters most.
      </p>
    </div>
    <v-btn
      prepend-icon="mdi-send"
      color="#05ab76"
      class="register-btn"
      @click="navigateToRegister()"
      >Register interest.</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "PositivesAndNegatives",
  data() {
    return {};
  },
  components: {},
  methods: {
    navigateToRegister() {
      this.$router.push("/interested");
    },
  },
  computed: {
    // Your computed properties go here
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>

<style scoped>
.custom-header {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.05em;
  color: #30313d;
  margin: 0;
}

.custom-subtitle {
  text-align: center;
  color: #5c5b61;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  padding: 0 5%;
  word-wrap: break-word;
  padding-bottom: 5%;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  background: radial-gradient(circle, #ffff, #d6c8f7);
  padding: 20px;
}

.header-container {
  margin-top: 10%;
  padding-bottom: 5%;
}

.register-btn {
  margin-top: 20px; /* Adjusted margin for better spacing */
  font-family: "Open Sans", sans-serif;
}

@media (min-width: 768px) {
  .main-container {
    padding: 40px;
    max-height: 50vh;
  }
  .custom-header {
    font-size: 3rem;
  }
  .custom-subtitle {
    padding: 0 20%;
  }
}

@media (max-width: 767px) {
  .main-container {
    padding: 20px;
    background: radial-gradient(circle, #ffff, #d6c8f7);
  }
  .custom-header {
    font-size: 1.75rem;
  }
  .custom-subtitle {
    padding: 0 10%;
  }
  .header-container {
    margin-top: 40%;
  }
}
</style>
