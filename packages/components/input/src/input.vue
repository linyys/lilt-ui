<template>
  <div class="l-input" ref="inputBox">
    <slot name="prefix"/>
    <input :type="props.type" class="l-input-internal" @focus="getFocus" @blur="lostFocus" @input="valueChange($event)" />
    <span class="l-input-textNum">
      {{ textNum + '/' + props.maxText }}
    </span>
    <slot name="suffix"/>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {inputProps,inputEmits} from "./input";

const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
const inputBox = ref()
const textNum = ref(0)
const getFocus = () => {
  inputBox.value.style.boxShadow = '0 0 0 3px var(--lilt-success-translucent)'
  inputBox.value.style.border = '1px solid var(--lilt-success)'
}
const lostFocus = () => {
  inputBox.value.style.boxShadow = '0 0 0 0 var(--lilt-success-translucent)'
  inputBox.value.style.border = '1px solid var(--color-border-1)'
}
const valueChange = (e) => {
  const inputValue = e.currentTarget.value
  if(inputValue.length <= props.maxText) {
    textNum.value = inputValue.length
    emits('update:modelValue',inputValue)
  }else {
    e.currentTarget.value = props.modelValue
  }
}
</script>
<script lang="ts">
export default {
  name: "LInput"
}
</script>

<style scoped>

</style>
