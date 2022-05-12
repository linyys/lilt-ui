<template>
  <div class='l-menu'>
    <slot/>
  </div>
</template>
<script lang='ts' setup>
import { menuProps } from './menu'
const props = defineProps(menuProps)
</script>
<script lang='ts'>
export default {
  name: 'LMenu'
}
</script>

<style scoped></style>
