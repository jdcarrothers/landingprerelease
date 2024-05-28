<template>
  <div class="pricing-container">
    <button @click="goBack" class="back-button">Back</button>
    <h1>Pricing Overview for Socritique</h1>
    <p>
      Welcome to Socritique! We use a flexible token-based system to help you manage and
      mark your students' papers efficiently.
    </p>

    <h2>Initial Tokens</h2>
    <p>
      When you create an account, you will receive a preset amount of tokens to try out
      our service. These tokens allow you to experience the full capabilities of our
      AI-driven marking system.
    </p>

    <h2>Top Up Tokens</h2>
    <p>
      After using your initial tokens, you will need to top up tokens to continue marking
      papers. Tokens can be purchased through our secure payment system powered by Stripe,
      ensuring your payment information is safe and secure.
    </p>

    <h2>Cost to Mark a Paper</h2>
    <p>
      The cost to mark a paper is approximately 30 cents (around 20 pence) per 20 pages.
      This ensures that you only pay for what you use, making our service cost-effective
      and flexible.
    </p>

    <h2>Secure Payments with Stripe</h2>
    <p>
      We use Stripe to handle all payment transactions. Stripe is a trusted and secure
      payment processing platform, so you can be confident that your payment information
      is protected.
    </p>

    <p>
      If you have any questions about our pricing or need assistance, please contact us at
      jdcarrothers@icloud.com
    </p>
  </div>
</template>

<script>
export default {
  name: "PricingComponent",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.pricing-container {
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

.pricing-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.pricing-container h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.pricing-container p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #666;
}
</style>
