<template>
  <button class="l-button" @click="animation()" :style="[buttonSizeStyle,buttonRoundStyle]" ref="_ref"
          :class="[`l-button-${props.size}`]">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { ref} from "vue";
import {buttonProps} from "./button";

const _ref = ref<HTMLButtonElement>()
// 控制按钮动画
const animation = () => {
  if (props.type == 'text') {
    return
  }
  let time = 1
  const interval = setInterval(() => {
    time++
    _ref.value!.style.boxShadow = `0 0 0 ${time}px  ${props.color}${6 - time}5`
    if (time === 6) {
      clearInterval(interval)
      _ref.value!.style.boxShadow = ``
    }
  }, 60)
}
const props = defineProps(buttonProps)
// 大小
const buttonSizeStyle = (
    props.type === "hollow" ?
        {
          color: props.color,
          border: `1px solid ${props.color}`,
          backgroundColor: 'rgba(0,0,0,0)',
        }
        : props.type === "text" ?
            {
              backgroundColor: 'rgba(0,0,0,0)',
              border: '0'
            } :
            props.type === "secondary" ?
                {
                  backgroundColor: props.color+25,
                  border: `1px solid ${props.color}25`,
                  color: props.color
                } :
                {
                  backgroundColor: props.color,
                  border: `1px solid ${props.color}`
                }
)
// 圆角
const buttonRoundStyle = props.round ? {borderRadius: '12px'} : {borderRadius: '4px'}
</script>
<script lang="ts">
export default {
  name: 'LButton'
}
</script>
