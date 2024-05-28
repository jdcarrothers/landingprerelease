<template>
  <div class="cont">
    <div class="faq-container">
      <div class="faq-header-section">
        <h2 class="faq-header">Frequently Asked Questions</h2>
      </div>
      <div class="faq-items-section">
        <div v-for="(item, index) in faqs" :key="index" class="faq-item">
          <div class="faq-question" @click="toggle(index)">
            <h3>{{ item.question }}</h3>
            <v-icon>{{ item.open ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </div>
          <div v-if="item.open" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqSection",
  data() {
    return {
      faqs: [
        {
          question: "How does the AI mark student tests?",
          answer:
            "Our AI uses advanced image recognition and natural language processing to analyze and mark student tests accurately. It compares the answers with the uploaded markschemes and provides detailed feedback.",
          open: false,
        },
        {
          question: "Can I manage multiple classes with this app?",
          answer:
            "Yes, our app allows you to manage multiple classes efficiently. You can create, edit, share, and organise classes, keeping track of each student's performance and progress.",
          open: false,
        },
        {
          question: "How do I upload mark schemes and students' tests?",
          answer:
            "You can upload mark schemes in various formats, including PDFs and Word documents. For student tests, you can simply take photos from your camera roll. Our app will process the mark schemes and use them to mark and grade the student tests.",
          open: false,
        },
        {
          question: "What kind of insights does the AI provide?",
          answer:
            "The AI provides detailed insights into student performance, including areas of strength and weakness, overall class performance, and individual student progress. These insights help teachers tailor their teaching strategies. Specifically, the AI summarizes all the information and identifies the best student, worst student, class average, and highlights where the class is struggling the most. This comprehensive analysis enables teachers to focus on improving specific areas and providing targeted support to students who need it the most.",
          open: false,
        },
        {
          question: "Is the data secure?",
          answer:
            "Yes, we take data security very seriously. All data is encrypted and stored securely. We comply with all relevant data protection regulations to ensure your data is safe.",
          open: false,
        },
        {
          question: "How accurate is the AI marking?",
          answer:
            "Our AI marking system is highly accurate, with regular updates and improvements to ensure precision. It has been tested extensively to handle various types of student responses effectively.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
.faq-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.cont {
  background-color: #f7f8fc;
  padding-bottom: 10%;
}

.faq-header-section {
  padding: 20px;
}

.faq-header {
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.faq-items-section {
  flex-grow: 1;
  border-left: 1px solid #e0e0e0;
  padding-left: 20px;
}

.faq-item {
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.faq-question h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.faq-question:hover {
  background: #f5f5f5;
}

.faq-answer {
  padding: 15px;
  background: #ffffff;
}

.v-icon {
  font-size: 24px;
  color: #333;
}

@media (min-width: 768px) {
  .faq-container {
    flex-direction: row;
  }

  .faq-header-section {
    flex: 0 0 250px;
    border-right: 1px solid #e0e0e0;
  }

  .faq-header {
    text-align: left;
    padding-right: 20px;
  }

  .faq-items-section {
    flex: 1;
    padding-left: 40px;
  }
}

@media (max-width: 767px) {
  .faq-header {
    font-size: 1.5rem;
  }
  .faq-question h3 {
    font-size: 0.875rem;
  }
  .v-icon {
    font-size: 20px;
  }

  .faq-header-section {
    text-align: center;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
  }

  .faq-items-section {
    border-left: none;
    padding-left: 0;
  }
}
</style>
