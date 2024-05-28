<template>
  <v-container class="register-container">
    <img src="/Logo.png" alt="Logo" class="logo" />
    <v-card class="pa-5 register-card">
      <v-card-title class="headline">
        Empower your teaching with AI for marking, analysis, and support, so you can focus
        on what matters most.
      </v-card-title>
      <v-card-subtitle class="subheading">Register Your Interest</v-card-subtitle>
      <v-card-text>
        <v-form @submit.prevent="registerInterest">
          <v-text-field
            v-model="name"
            label="Name"
            :rules="[nameRule]"
            required
            outlined
            color="primary"
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="[EmailRules.required, EmailRules.email]"
            required
            outlined
            color="primary"
            class="mb-4"
          ></v-text-field>
          <v-btn
            type="submit"
            prepend-icon="mdi-check"
            color="#05ab76"
            class="register-btn"
            >Submit</v-btn
          >
        </v-form>
        <v-alert type="info" v-if="infoMessage" dismissible class="mt-4">{{
          infoMessage
        }}</v-alert>
        <v-alert type="error" v-if="errorMessage" dismissible class="mt-4">{{
          errorMessage
        }}</v-alert>
        <p class="privacy-note mt-4">
          Don't worry, we won't add you to any mailing list. We value your privacy and
          will only use your information to improve our services.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { db } from "@/services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      email: "",
      infoMessage: "",
      errorMessage: "",
      EmailRules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || "E-mail must be valid.";
        },
      },
      nameRule: (v) => !!v || "Name is required",
    };
  },
  methods: {
    async registerInterest() {
      try {
        if (!this.name || !this.email) {
          this.errorMessage = "Please fill in all fields.";
          return;
        }
        await addDoc(collection(db, "interests"), {
          name: this.name,
          email: this.email,
          timestamp: new Date(),
        });
        this.infoMessage = "Thank you for registering your interest!";
      } catch (error) {
        console.error("Error registering interest: ", error);
        this.errorMessage = "Failed to register your interest. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffff;
  padding: 20px;
}

.logo {
  width: 200px;
  margin-bottom: 20px;
  scale: 1.9;
}

.register-card {
  max-width: 600px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.headline {
  font-size: 1.75rem;
  margin-bottom: 16px;
  color: #212529;
  text-align: center;
  white-space: normal;
  overflow-wrap: break-word;
}

.subheading {
  font-size: 1.25rem;
  margin-bottom: 24px;
  color: #6c757d;
  text-align: center;
}

.register-btn {
  width: 100%;
  background-color: #05ab76;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.register-btn:hover {
  background-color: #039f68;
}

.privacy-note {
  margin-top: 20px;
  font-size: 0.875rem;
  color: #6c757d;
  text-align: center;
}

.v-alert {
  margin-top: 20px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mt-4 {
  margin-top: 16px;
}

@media (max-width: 600px) {
  .headline {
    font-size: 1.5rem;
  }

  .subheading {
    font-size: 1rem;
  }

  .register-btn {
    font-size: 0.875rem;
    padding: 10px 20px;
  }

  .privacy-note {
    font-size: 0.75rem;
  }
  .logo {
    scale: 1.2;
  }
}
</style>
