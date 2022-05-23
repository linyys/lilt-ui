import { LButton,LCard,LCarousel,LDivider,LInput,LMenu,LRate,LScrollbar,LStreamer,LSwitch,LTag,LWatermark } from "@lilt-ui-vue/components";
import type { App } from "vue"; // ts中的优化只获取类型

const components = [LButton,LCard,LCarousel,LDivider,LInput,LMenu,LRate,LScrollbar,LStreamer,LSwitch,LTag,LWatermark];
const liltUi = (app: App) => {
  // 每个组件在编写的时候都提供了install方法

  // 有的是组建 有的可能是指令 xxx.install = ()=>{app.directive()}
  components.forEach((component) => app.use(component));
};
export { liltUi }
export * from "@lilt-ui-vue/components";
