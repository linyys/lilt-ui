<template>
  <div class="l-input" ref="inputBox">
    <slot name="prefix"/>
    <input type="text" class="l-input-internal" @focus="getFocus" @blur="lostFocus" />
    <slot name="suffix"/>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {inputProps} from "./input";

const props = defineProps(inputProps)
const inputBox = ref()
const getFocus = () => {
  inputBox.value.style.boxShadow = '0 0 0 3px var(--lilt-success-translucent)'
  inputBox.value.style.border = '1px solid var(--lilt-success)'
}
const lostFocus = () => {
  inputBox.value.style.boxShadow = '0 0 0 0 var(--lilt-success-translucent)'
  inputBox.value.style.border = '1px solid var(--color-border-1)'
}
</script>
<script lang="ts">
export default {
  name: "LInput"
}
</script>

<style scoped>

</style>
