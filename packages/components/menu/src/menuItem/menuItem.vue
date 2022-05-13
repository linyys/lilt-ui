<template>
  <div class='l-menu-item' @click.stop='fun()'>
      <slot/>
  </div>
</template>

<script lang='ts' setup>
import {inject} from 'vue'
const menuContext = inject('menuContext')
console.log(menuContext.addMenuItem)
const fun = () => {
  console.log(1)
}
</script>
<script lang='ts'>
export default {
  name: 'LMenuItem'
}
</script>

<style scoped>

</style>
