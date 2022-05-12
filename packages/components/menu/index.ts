import menu from './src/menu.vue'
import subMenu from './src/subMenu/subMenu.vue'
import menuItem from './src/menuItem/menuItem.vue'
import { withInstall } from '@lilt-ui-vue/utils/with-install'

const LMenu = withInstall(menu)
const LSubMenu = withInstall(subMenu)
const LMenuItem = withInstall(menuItem)
export { LMenu, LMenuItem, LSubMenu }
export default {
  LMenu,
  LSubMenu,
  LMenuItem
}
