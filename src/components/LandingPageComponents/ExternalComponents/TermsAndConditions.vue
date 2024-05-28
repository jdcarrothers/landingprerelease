<template>
  <div class="terms-container">
    <button @click="goBack" class="back-button">Back</button>
    <h1>Terms and Conditions for QuickCritic</h1>
    <p>Last Updated: May 28, 2024</p>
    <p>Welcome to QuickCritic!</p>
    <p>
      QuickCritic ("us", "we", or "our") operates the website https://QuickCritic.io (the
      "Service"). *not yet available*
    </p>
    <p>
      By accessing or using the Service, you agree to be bound by these Terms. If you
      disagree with any part of the terms, then you may not access the Service.
    </p>
    <h2>1. Access to the Service</h2>
    <p>
      Access to QuickCritic's software is granted to the user upon registration and email
      verification. Users can manage multiple classes, upload mark schemes, take photos of
      student tests, and analyze those tests with AI to provide detailed insights and
      grading. The product can only be used if the user has enough tokens to mark a paper.
      Please refer to our Pricing Overview for more information.
    </p>
    <p>Users have the option to request a full refund within 7 days of purchase.</p>
    <h2>2. User Data</h2>
    <p>
      QuickCritic collects user email and payment information solely for the purpose of
      providing the Service.
    </p>
    <p>
      For more information on how we collect, use, and disclose personal information,
      please refer to our Privacy Policy.
    </p>
    <h2>3. Non-personal Data</h2>
    <p>
      We may use web cookies to collect non-personal information about users' interactions
      with the Service.
    </p>
    <h2>4. Governing Law</h2>
    <p>
      These Terms shall be governed and construed in accordance with the laws of the
      United Kingdom, without regard to its conflict of law provisions.
    </p>
    <h2>5. Updates to Terms</h2>
    <p>Users will be notified of any updates to these Terms via email.</p>
    <p>
      For any questions or concerns regarding these Terms, please contact us at
      jdcarrothers@icloud.com.
    </p>
    <p>Thank you for using QuickCritic!</p>
  </div>
</template>

<script>
export default {
  name: "TermsAndConditions",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.terms-container {
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

.terms-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.terms-container h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.terms-container p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #666;
}
</style>
