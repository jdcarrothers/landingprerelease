import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
loadFonts();
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPageComponents/LandingPage.vue";
import TermsAndConditions from "./components/LandingPageComponents/ExternalComponents/TermsAndConditions.vue";
import PrivacyPolicy from "./components/LandingPageComponents/ExternalComponents/PrivacyPolicy.vue";
import PricingOverview from "./components/LandingPageComponents/ExternalComponents/PricingOverview.vue";
import RegisterInterest from "./components/LandingPageComponents/ExternalComponents/RegisterInterest.vue";
const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/tos",
    name: "TermsAndConditions",
    component: TermsAndConditions,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/pricing",
    name: "PricingOverview",
    component: PricingOverview,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/interested",
    name: "RegisterInterest",
    component: RegisterInterest,
    meta: {
      requiresAuth: false,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(vuetify).use(router).mount("#app");
