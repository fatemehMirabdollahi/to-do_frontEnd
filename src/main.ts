import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./services/api";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app
  .use(router)
  .use(store)
  .mount("#app");
