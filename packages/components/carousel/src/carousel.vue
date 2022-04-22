<template>
  <div class="l-carousel" ref="root">
    <div @click="prev" class="l-carousel-prev-level">
      <span class="l-carousel-btn-logo">
        <svg x="1649755292707" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
             width="12" height="12"
        ><path
            d="M747.245 81.064c-28.497-29.315-74.739-29.315-103.307 0l-367.236 378.011c-28.483 29.367-28.483 76.982 0 106.291l367.236 377.997c28.562 29.367 74.806 29.367 103.307 0 28.546-29.325 28.546-76.929 0-106.304l-315.6-324.841 315.599-324.803c28.545-29.367 28.544-76.973 0-106.356l0 0z"
            fill="#e6e6e6"
        ></path></svg>
        </span>
    </div>
    <div @click="next" :class="'l-carousel-next-level'">
      <span class="l-carousel-btn-logo">
      <svg x="1649755035787" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
           width="12" height="12"
      ><path
          d="M276.755 942.936c28.497 29.315 74.739 29.315 103.307 0l367.236-378.011c28.483-29.367 28.483-76.982 0-106.291l-367.236-377.997c-28.562-29.367-74.806-29.367-103.307 0-28.546 29.325-28.546 76.929 0 106.304l315.6 324.841-315.599 324.803c-28.545 29.367-28.544 76.973 0 106.356l0 0z"
          fill="#e6e6e6"
      ></path></svg>
      </span>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {carouselProps} from "./carousel";
import {defineProps, onMounted, ref, provide, Ref} from "vue";

const items: Ref = ref([])
const activeItem: Ref = ref(0)
const carouselItemLength = ref()
const animationDirection = ref('left')
const props = defineProps(carouselProps)
const root = ref<HTMLDivElement>()
// 上一张
const prev = () => {
  animationDirection.value = 'right'
  setActiveItem(activeItem.value - 1)
}
// 下一张
const next = () => {
  animationDirection.value = 'left'
  setActiveItem(activeItem.value + 1)
}
// 添加一个子元素
const addItem = (item: any) => {
  items.value.push(item)
}
// 设置显示的子元素
const setActiveItem = (index: number | string) => {
  const itemCount = items.value.length
  const oldIndex = activeItem.value
  if(index < 0) {
    activeItem.value  = itemCount - 1
  }else if (index >= itemCount) {
    activeItem.value = 0
  }else {
    activeItem.value = index
  }
  items.value[activeItem.value].setIsShow(true)
  setTimeout(() => {
    items.value[oldIndex].setIsShow(false)
  },100)
}
onMounted(() => {
  carouselItemLength.value = items.value.length
  items.value[0].setIsShow(true)
})
provide('carouselContext',{addItem,carouselItemLength,animationDirection})
</script>
<script lang="ts">
export default {
  name: "LCarousel"
}
</script>

<style scoped>

</style>
