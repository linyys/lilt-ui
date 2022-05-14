<template>
  <div class='l-menu'>
    <slot/>
  </div>
</template>
<script lang='ts' setup>
import { menuProps } from './menu'
import { provide, Ref, ref } from 'vue'
const props = defineProps(menuProps)
const menuItem:Ref = ref([])
const subMenu:Ref = ref([])
const addMenuItem = (item) => {
  menuItem.value.push(item)
}
const addSubMenu = (item) => {
  subMenu.value.push(item)
}
provide('menuContext',{ addMenuItem,addSubMenu })
</script>
<script lang='ts'>
export default {
  name: 'LMenu'
}
</script>

<style scoped></style>
