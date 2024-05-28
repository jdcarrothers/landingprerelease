<template>
  <div>
    <h1 class="custom-header">Automate Your Marking Process!</h1>
    <div class="container">
      <div class="steps-container">
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step-question" @click="toggle(index)">
            <h3>{{ step.title }}</h3>
            <span>{{ activeStep === index ? "▼" : "►" }}</span>
          </div>
          <div v-if="activeStep === index" class="step-content">
            <p class="step-description">{{ step.description }}</p>
            <img v-if="isMobile" :src="step.image" alt="photo" class="photo-mobile" />
          </div>
        </div>
      </div>
      <div v-if="!isMobile" class="image-container">
        <img :src="currentSRC" alt="photo" class="photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          title: "1. Create a class",
          description:
            "Upload the markscheme for the assessment. It takes just a few seconds.",
          image: "/Markscheme.png",
        },
        {
          title: "2. Take photos of a student's test",
          description: "Take clear photos of the student's pages to upload for feedback.",
          image: "./Photos.png",
        },
        {
          title: "3. Receive feedback on the student",
          description:
            "Receive detailed feedback on the uploaded pages. Includes suggestions for improvement.",
          image: "./Student.png",
        },
        {
          title: "4. Receive feedback for the class",
          description:
            "Receive comprehensive feedback on the class's performance, including key weaknesses and the top and bottom students.",
          image: "./Class.png",
        },
      ],
      currentSRC: "./Markscheme.png",
      activeStep: null,
      isMobile: window.innerWidth <= 767,
    };
  },
  methods: {
    toggle(index) {
      this.activeStep = this.activeStep === index ? null : index;
      this.currentSRC = this.steps[index].image;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 767;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
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
  margin-bottom: 3rem;
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
  min-height: 50vh;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding: 0;
  }
  .custom-header {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
}

.steps-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.step {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.step:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.step-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;
}

.step-question:hover {
  background-color: #e0e0e0;
}

.step-question h3 {
  font-size: 1.5rem;
  margin: 0;
}

.step-content {
  padding: 1rem;
  background-color: #fff;
}

.step-description {
  margin-bottom: 1rem;
}

.photo {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  max-height: 400px;
  object-fit: contain;
}

.photo-mobile {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  object-fit: contain;
}

.photo:hover {
  transform: scale(1.05);
}

@media (max-width: 767px) {
  .custom-header {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .step-question h3 {
    font-size: 1.25rem;
  }
  .step-description {
    font-size: 0.875rem;
  }
  .photo {
    display: none;
  }
}
</style>
