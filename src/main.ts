import { createApp } from "vue";
import "./style.css";
import "virtual:uno.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./pinia";

const app = createApp(App);
app.use(router).use(pinia).mount("#app");