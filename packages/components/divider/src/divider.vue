<template>
  <div class="l-divider">
    <div
      class="l-divider-line-left"
      :style="[props.dashed ? 'border-bottom: 1px dashed var(--color-border-2)' : 'border-bottom: 1px solid var(--color-border-2)',
               props.placement === 'left' ? 'width: 28px' : '' ]"
    />
    <div class="l-divider-text">
      <slot />
    </div>
    <div
      class="l-divider-line-right"
      :style="[props.dashed ? 'border-bottom: 1px dashed var(--color-border-2)' : 'border-bottom: 1px solid var(--color-border-2)',
               props.placement === 'right' ? 'width: 28px' : '' ]"
    />
  </div>
</template>

<script setup lang="ts">
import {dividerProps} from "./divider";

const props = defineProps(dividerProps)
</script>
<script lang="ts">
export default {
  name: "LDivider"
}
</script>

<style scoped>

</style>
