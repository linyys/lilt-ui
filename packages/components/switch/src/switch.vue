<template>
  <div role="switch" class="l-switch"
       :style="[{backgroundColor : props.modelValue ? props.activeColor : props.inactiveColor}]"
       @click="changeState"
  >
    <input class="l-switch-input"/>
    <div class="l-switch-ball" :style="{left: props.modelValue ? 'calc(100% - (21px + 21px + 4px) /2)' : ' 4px'}"></div>
  </div>
</template>
<script lang="ts" setup>
import {switchProps, switchEmit} from "./switch";
import {defineProps, defineEmits} from "vue";

const props = defineProps(switchProps)
const emits = defineEmits(switchEmit)
const changeState = () => {
  emits('update:modelValue', !props.modelValue)
}
</script>
<script lang="ts">
export default {
  name: "LSwitch"
}
</script>

<style scoped>

</style>
