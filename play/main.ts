import { createApp } from "vue";
import App from "./app.vue";
import '@lilt-ui-vue/theme-chalk/src/index.scss'
import {LButton,LScrollbar,LCarousel,LCarouselItem,LTag,LCard,LMenu,LDivider,LSwitch,LWatermark,LInput} from "@lilt-ui-vue/components";
const app = createApp(App);

app.use(LButton)
app.use(LScrollbar)
app.use(LCarousel)
app.use(LCarouselItem)
app.use(LTag)
app.use(LCard)
app.use(LMenu)
app.use(LDivider)
app.use(LSwitch)
app.use(LWatermark)
app.use(LInput)
app.mount("#app");
