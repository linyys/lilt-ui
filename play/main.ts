import { createApp } from "vue";
import App from "./app.vue";
// import XbbIcon from "@lilt-ui-vue/components/button";
import '@lilt-ui-vue/theme-chalk/src/index.scss'
import {LButton} from "@lilt-ui-vue/components";
const app = createApp(App);

// app.use(XbbIcon);
app.use(LButton)
app.mount("#app");
