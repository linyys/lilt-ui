<template>
  <div class='l-menu'>
    <slot />
  </div>
</template>
<script lang='ts' setup>
import { menuProps,emits } from './menu'
import { defineEmits, provide, Ref, ref } from 'vue'

const props = defineProps(menuProps)
const emit = defineEmits(emits)
// 受控的子菜单
const menuItem: Ref = ref([])
// 受控的组菜单
const subMenu: Ref = ref([])
const addMenuItem = item => {
  menuItem.value.push(item)
}
const addSubMenu = item => {
  subMenu.value.push(item)
}

const isActivitySub: Ref = ref([])
const setActivitySub = (index: String | Number) => {
  if (props.accordion) {
    isActivitySub.value.length = 0
  }
  isActivitySub.value.push(index)
}
const delActivitySub = (index: String | Number) => {
  const itemIndex = isActivitySub.value.indexOf(index)
  if(itemIndex > -1) {
    isActivitySub.value.splice(itemIndex,1)
  }
}

const isActivityItem: Ref = ref()
const setActivityItem = (index: String | Number) => {
  isActivityItem.value = index
}
const emitItemChange= () => {
  emit('itemChange',isActivityItem.value)
}
provide('menuContext', { emitItemChange,addMenuItem, addSubMenu, setActivitySub, setActivityItem,delActivitySub, isActivitySub, isActivityItem })
</script>
<script lang='ts'>
export default {
  name: 'LMenu'
}
</script>

<style scoped></style>
