<template>
  <div @scroll="fun">
    <slot />
  </div>
</template>

<script setup lang="ts">
const fun = () => {
  console.log(1)
}
</script>
<script lang="ts">
export default {
  name: 'LScrollbar'
}
</script>
