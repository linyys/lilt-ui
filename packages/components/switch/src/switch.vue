<template>
  <div
    role="switch"
    class="l-switch"
    :style="[
      {
        backgroundColor: props.modelValue
          ? props.activeColor
          : props.inactiveColor
      },
      switchRadius
    ]"
    @click="changeState"
  >
    <input class="l-switch-input" />
    <div
      class="l-switch-ball"
      :style="[
        {
          left: props.modelValue
            ? 'calc(100% - (21px + 21px + 4px) /2)'
            : ' 2px'
        },
        switchRadius
      ]"
      ref="ball"
    >
      <slot name="ball" />
    </div>
    <!--      <div v-if="props.modelValue" class="l-switch-active-text">-->
    <!--        <slot name="active-text"/>-->
    <!--      </div>-->
    <!--      <div v-if="!props.modelValue" class="l-switch-unactive-text">-->
    <!--        <slot name="unactive-text"/>-->
    <!--      </div>-->
  </div>
</template>
<script lang="ts" setup>
import { switchProps, switchEmit } from './switch'
import { ref } from 'vue'

const props = defineProps(switchProps)
const emits = defineEmits(switchEmit)
const ball = ref()
let switchRadius
let timer: any = null
if (props.square) {
  switchRadius = {
    borderRadius: '2px'
  }
} else {
  switchRadius = {
    borderRadius: '25px'
  }
}
const changeState = () => {
  if (timer) {
    return
  }
  timer = setTimeout(() => {
    ball.value.style.width = '80%'
    emits('update:modelValue', !props.modelValue)
    setTimeout(() => {
      ball.value.style.width = '21px'
    }, 300)
    timer = null
  }, 400)
}
</script>
<script lang="ts">
export default {
  name: 'LSwitch'
}
</script>

<style scoped></style>
