import { createApp } from "vue";
// import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./views/HomePage.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

createApp(HomePage).use(bootstrap).mount("#app");
