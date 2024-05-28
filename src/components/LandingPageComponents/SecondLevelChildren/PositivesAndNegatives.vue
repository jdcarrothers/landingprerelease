<template>
  <div>
    <h1 class="custom-header">Fed up with marking?</h1>
    <div class="container">
      <div class="content bg-rose">
        <h3>Challenges of Traditional Marking</h3>
        <ul>
          <li v-for="(item, index) in withoutSocratique" :key="index">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="icon"
            >
              <path :d="item.path"></path>
            </svg>
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="content bg-emerald">
        <h3>Advancements with QuickCritic</h3>
        <ul>
          <li v-for="(item, index) in withSocratique" :key="index">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="icon"
            >
              <path :d="item.path"></path>
            </svg>
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PositivesAndNegatives",
  data() {
    return {
      withoutSocratique: [
        {
          text: "Spend hours marking by hand.",
          path:
            "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z",
        },
        {
          text: "Increased risk of human error.",
          path:
            "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z",
        },
        {
          text: "Slow turnaround time for grading and feedback.",
          path:
            "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z",
        },
        {
          text: "Struggles to handle large class sizes efficiently.",
          path:
            "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z",
        },
      ],
      withSocratique: [
        {
          text: "Instant, consistent grading at scale.",
          path:
            "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
        },
        {
          text: "Detailed, constructive feedback generated.",
          path:
            "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
        },
        {
          text: "Instant student performance insights.",
          path:
            "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
        },
        {
          text: "Enhanced learning through advanced analytics.",
          path:
            "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
        },
      ],
    };
  },
  methods: {
    // Your methods go here
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");

.custom-header {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 2.25rem;
  letter-spacing: -0.05em;
  color: #333;
  padding-top: 5%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    gap: 24px;
    padding: 0;
  }
  .custom-header {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
}

.content {
  background-color: #fff0f1;
  color: #b42335;
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
}

.bg-emerald {
  background-color: #e6f4ea;
  color: #047857;
}

h3 {
  font-weight: bold;
  margin-bottom: 16px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

li {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}

.icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 767px) {
  .custom-header {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .content {
    padding: 24px;
  }
  li {
    font-size: 0.875rem;
  }
}
</style>
