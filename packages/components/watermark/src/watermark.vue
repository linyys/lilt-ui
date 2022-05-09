<template>
  <div
    class="l-watermark"
    :style="{ backgroundImage: `url(${imgUrl})` }"
    :class="props.fullscreen ? 'l-watermark-isFullscreen' : ''"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { watermarkProps } from './watermark'
import { onMounted, ref } from 'vue'
const props = defineProps(watermarkProps)
const imgUrl = ref('')
// 使用canvas来创建水印
const createWatermark = () => {
  const canvas = document.createElement('canvas')
  canvas.height = props.fontSize * 10 + 150
  canvas.width = props.fontSize * 10 + 250
  const canvasContext = canvas.getContext('2d')
  canvasContext!.clearRect(0, 0, canvas.width, canvas.height)
  canvasContext!.fillStyle = props.textColor + '90'
  canvasContext!.font = props.fontSize + 'px arial'
  canvasContext!.textBaseline = 'middle'
  // 倾斜字体
  canvasContext!.rotate(-Math.PI / 7)
  //  渲染文本
  canvasContext!.fillText(props.text, props.fontSize / 3, props.fontSize * 3)
  imgUrl.value = canvas.toDataURL('image/png')
}
onMounted(() => {
  createWatermark()
})
</script>
<script lang="ts">
export default {
  name: 'LWatermark'
}
</script>

<style scoped></style>
