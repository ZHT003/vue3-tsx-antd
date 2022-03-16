import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import plugins from "./plugins";

import "./assets/css/base.less";
const app = createApp(App);
app.use(store).use(router).use(plugins).mount("#app");
