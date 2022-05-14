<template>
  <div ref='_ref' class='l-menu-item' @click.stop='fun()'>
      <slot/>
  </div>
</template>

<script lang='ts' setup>
import { inject, onMounted, ref } from 'vue'
const menuContext:any = inject('menuContext')
const _ref = ref()

const fun = () => {
  console.log(1)
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
