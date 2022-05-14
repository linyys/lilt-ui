<template>
  <div ref='_ref' :class="isActivity ?'l-menu-item-isActivity':  'l-menu-item'" @click.stop='fun()'>
      <slot/>
  </div>
</template>

<script lang='ts' setup>
import { inject, onMounted, Ref, ref } from 'vue'
const menuContext:any = inject('menuContext')
const _ref = ref()
const isActivity:Ref = ref()
const fun = () => {
  isActivity.value = true
}
onMounted(() => {
  menuContext.addMenuItem(_ref.value)
})
</script>
<script lang='ts'>
export default {
  name: 'LMenuItem'
}
</script>

<style scoped>

</style>
