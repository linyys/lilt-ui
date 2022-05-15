<template>
  <div ref='_ref' :class="menuContext.isActivityItem.value === props.index ?'l-menu-item-isActivity':  'l-menu-item'" @click.stop='isItem()'>
      <slot/>
  </div>
</template>

<script lang='ts' setup>
import { inject, onMounted, Ref, ref } from 'vue'
import { menuItemProps } from './menuItem'
const props = defineProps(menuItemProps)
const menuContext:any = inject('menuContext')
const subMenuContext:any = inject('subMenuContext')
const _ref = ref()
// const isActivity:Ref = ref()
const isItem = () => {
  menuContext.setActivityItem(props.index)
  menuContext.emitItemChange()
}
onMounted(() => {
  subMenuContext.addMenuItem({ref: _ref.value,index:props.index })
  menuContext.addMenuItem({ref: _ref.value,index:props.index })
})
</script>
<script lang='ts'>
export default {
  name: 'LMenuItem'
}
</script>

<style scoped>

</style>
