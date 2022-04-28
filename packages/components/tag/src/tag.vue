<template>
  <div :class="['l-tag',`l-tag-${props.type}`,`l-tag-${props.size}`]" :style="colorStyle" >
    <div v-if="this.$slots.avatar && this.$slots.avatar()" class="l-tag-avatar">
      <slot name="avatar"></slot>
    </div>
    <slot/>
    <svg v-if="props.closable" @click="closeEmit" x="1650861025999" class="icon l-tag-closable" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="10"
         height="10"
    >
      <path d="M14.08 919.296L919.424 14.208l90.496 90.496L104.704 1009.92z"></path>
      <path d="M104.704 14.08l905.088 905.216-90.496 90.496L14.08 104.704z"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import {TagProps,TagEmit} from "./tag";

const props = defineProps(TagProps)
const emit = defineEmits(TagEmit)
let colorStyle
if(props.color) {
  colorStyle = {
    color: props.color.textColor,
    border: '1px solid' + props.color.borderColor,
    backgroundColor: props.color.bcColor,
  }
}
const closeEmit = () => {
  emit('close')
}
</script>

<script lang="ts">
export default {
  name: "LTag"
}
</script>


<style scoped>

</style>
