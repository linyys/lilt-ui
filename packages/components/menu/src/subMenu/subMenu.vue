<template>
  <div class='l-sub-menu' @click='ChangeActivity'>
    <div class='l-sub-menu-content'>
      <div class='l-sub-menu-title'>
        <span>{{ props.title }}</span>
      </div>
      <div class='l-sub-menu-arrow'></div>
    </div>
    <!--    <transition name='sub-menu-transition'>-->
    <div v-show='isShow' class='l-sub-menu-item-box'>
      <div class='l-sub-menu-item'>
        <slot />
      </div>
    </div>
    <!--    </transition>-->
  </div>
</template>
<script lang='ts' setup>
import {subMenuProps} from './subMenu'
import { provide, Ref, ref } from 'vue'
const props = defineProps(subMenuProps)
const isShow = ref(false)
// 保存受控的子菜单
const menuItems:Ref = ref([])
// 添加一个子菜单
const addMenuItem = (item:HTMLElement) => {
  menuItems.value.push(item)
}
const ChangeActivity = () => {
  isShow.value = !isShow.value
}
provide('menuContext',{addMenuItem})
</script>
<script lang='ts'>
export default {
  name: 'LSubMenu'
}
</script>

<style scoped>

</style>
