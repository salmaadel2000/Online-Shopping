/*
createApp(App).mount("#app");
import { createApp } from "vue";
import App from "./MainApp.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
*/

import App from "./MainApp.vue";

const app = createApp(App);
import { createApp } from "vue";
import router from "./router";

import { createPinia } from "pinia";
const pinia = createPinia();

app.use(pinia).use(router).mount("#app");
