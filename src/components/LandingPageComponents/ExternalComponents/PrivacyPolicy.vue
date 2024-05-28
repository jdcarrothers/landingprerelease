<template>
  <div class="privacy-container">
    <button @click="goBack" class="back-button">Back</button>
    <h1>Privacy Policy for Socritique</h1>
    <p>Last Updated: February 15, 2024</p>
    <p>
      Socritique ("us", "we", or "our") operates the website https://Socritique.io (the
      "Service").
    </p>
    <h2>1. Information Collection and Use</h2>
    <p>
      We collect and use the following types of information for order processing and
      providing our services:
    </p>
    <ul>
      <li>Email address</li>
      <li>Payment information</li>
    </ul>
    <h2>2. Data Collection Methods</h2>
    <p>
      We may use web cookies to collect non-personal information about users' interactions
      with the Service.
    </p>
    <h2>3. Data Sharing</h2>
    <p>We do not share any user data with third parties.</p>
    <h2>4. Children's Privacy</h2>
    <p>
      We do not knowingly collect any personal information from children under the age of
      13. If you are a parent or guardian and you are aware that your child has provided
      us with personal information, please contact us so that we can take necessary
      actions.
    </p>
    <h2>5. Updates to the Privacy Policy</h2>
    <p>Users will be notified of any updates to this Privacy Policy via email.</p>
    <p>
      For any questions or concerns regarding this Privacy Policy, please contact us at
      jdcarrothers@icloud.com.
    </p>
    <p>Thank you for using Socritique!</p>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.privacy-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.back-button {
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #003d80;
}

.privacy-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.privacy-container h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.privacy-container p,
.privacy-container ul {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #666;
}

.privacy-container ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
