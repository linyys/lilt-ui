import { createApp } from "vue";
import App from "./app.vue";
// import XbbIcon from "@lilt-ui-vue/components/button";
import '@lilt-ui-vue/theme-chalk/src/index.scss'
import {LButton,LScrollbar,LCarousel,LCarouselItem} from "@lilt-ui-vue/components";
const app = createApp(App);

// app.use(XbbIcon);
app.use(LButton)
app.use(LScrollbar)
app.use(LCarousel)
app.use(LCarouselItem)
app.mount("#app");
