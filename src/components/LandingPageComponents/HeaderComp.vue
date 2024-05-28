<template>
  <header class="app-bar">
    <div class="container d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <img src="/Logo.png" alt="Socratque Logo" class="logo" />
      </div>
      <div class="d-flex align-center">
        <v-btn
          prepend-icon="mdi-send"
          color="#05ab76"
          class="register-btn"
          @click="this.$router.push('/interested')"
          >Opt-in</v-btn
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style scoped>
.app-bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  padding-left: 5%;
  padding-right: 5%;
  z-index: 1000; /* Ensures it stays above other content */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 60px;
  margin-left: -10px;
  scale: 1.2;
}

.title {
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  color: #30313d;
}

.btn {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.outlined {
  border: 1px solid #05ab76;
  color: #05ab76;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
@media (max-width: 600px) {
  .logo {
    height: 40px;
    scale: 1.2;
    margin-top: 5px;
    margin-left: 5px;
  }
}
</style>
