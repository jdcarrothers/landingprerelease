<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-left">
        <img src="./Logo.png" alt="Socritique Logo" class="logo" />
        <p>
          Revolutionizing education with AI. Automate grading, manage classes, and gain
          insightful analytics. Spend more time teaching and less time on paperwork.
        </p>
        <p>Copyright © 2024 - All rights reserved</p>
      </div>
      <div class="footer-right">
        <div class="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/tos">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        Hey 👋 I'm <strong>Josh</strong>, the creator of QuickCritic. You can follow my
        work on <a href="https://www.linkedin.com/in/joshua-carrothers/">LinkedIn</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  background-color: #f8f8f8;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  padding-left: 15%;
  padding-right: 15%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-left {
  margin-bottom: 20px;
}

.logo {
  max-width: 100px;
  margin-bottom: 10px;
  scale: 2;
  margin-left: 90px;
}

.footer-left p {
  margin: 5px 0;
  font-size: 0.875rem;
  color: #666;
}

.built-with {
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-column {
  min-width: 120px;
}

.footer-column h4 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #333;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 5px;
}

.footer-column a {
  text-decoration: none;
  color: #333;
  font-size: 0.875rem;
}

.footer-bottom {
  text-align: center;
  font-size: 0.875rem;
  color: #666;
}

.footer-bottom a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }

  .footer-left {
    max-width: 300px;
    margin-bottom: 0;
  }

  .footer-right {
    flex-direction: row;
    gap: 40px;
  }
}
</style>
