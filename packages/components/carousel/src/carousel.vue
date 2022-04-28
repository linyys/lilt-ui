<template>
  <div class="l-carousel" ref="root" @mouseenter=" props.arrow === 'none' ? false : arrow = true"
       @mouseleave="props.arrow === 'always'? false : arrow = false"
       @mousewheel.prevent="props.mousewheel ? mousewheelFun : false"
  >
    <transition :name="`prev-${props.direction}`">
      <div @click="prev" v-show="arrow" :class="`l-carousel-prev-${props.direction}`">
      <span class="l-carousel-btn-logo">
        <svg x="1649755292707" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
             width="12" height="12"
        ><path
            d="M747.245 81.064c-28.497-29.315-74.739-29.315-103.307 0l-367.236 378.011c-28.483 29.367-28.483 76.982 0 106.291l367.236 377.997c28.562 29.367 74.806 29.367 103.307 0 28.546-29.325 28.546-76.929 0-106.304l-315.6-324.841 315.599-324.803c28.545-29.367 28.544-76.973 0-106.356l0 0z"
            fill="#e6e6e6"
        ></path></svg>
        </span>
      </div>
    </transition>
    <transition :name="`next-${props.direction}`">
      <div @click="next" v-show="arrow" :class="`l-carousel-next-${props.direction}`">
      <span class="l-carousel-btn-logo">
      <svg x="1649755035787" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
           width="12" height="12"
      ><path
          d="M276.755 942.936c28.497 29.315 74.739 29.315 103.307 0l367.236-378.011c28.483-29.367 28.483-76.982 0-106.291l-367.236-377.997c-28.562-29.367-74.806-29.367-103.307 0-28.546 29.325-28.546 76.929 0 106.304l315.6 324.841-315.599 324.803c-28.545 29.367-28.544 76.973 0 106.356l0 0z"
          fill="#e6e6e6"
      ></path></svg>
      </span>
      </div>
    </transition>
    <slot name="prev" :prevFun="prev"/>
    <slot name="next" :nextFun="next"/>
    <slot/>
    <div :class="`l-carousel-dot-${props.direction}`">
      <div :class="index === activeItem ? 'l-carousel-dot-content-activity' : 'l-carousel-dot-content'"
           v-for="(item,index) in items.length" @mouseenter=" props.trigger === 'hover' ? setActiveItem(index) : false"
           @click="props.trigger === 'hover' ? false : setActiveItem(index) "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import
{carouselProps} from "./carousel";
import {defineProps, onMounted, ref, provide, Ref} from "vue";

const props = defineProps(carouselProps)

const items: Ref = ref([])
const activeItem: Ref = ref(0)
const carouselItemLength = ref()
const arrow = ref(!(props.arrow === 'hover' || props.arrow === 'none'))
const animationDirection = ref('left')
let timer: any = null
const root = ref<HTMLDivElement>()
// 上一张
const prev = () => {
  setActiveItem(activeItem.value - 1)
}
// 下一张
const next = () => {
  setActiveItem(activeItem.value + 1)
}
// 添加一个子元素
const addItem = (item: any) => {
  items.value.push(item)
}
// 监听滚动
const mousewheelFun = (e) => {
  if (timer) {
    return
  }
  timer = setTimeout(() => {
    e.preventDefault()
    if (e.deltaY > 0) {
      setActiveItem(activeItem.value + 1)
    } else {
      setActiveItem(activeItem.value - 1)
    }
    timer = null
  }, 300)

}
// 设置显示的子元素
const setActiveItem = (index: number | string) => {
  const itemCount = items.value.length
  const oldIndex = activeItem.value
  if (props.direction === 'vertical') {
    if (oldIndex > index) {
      animationDirection.value = 'down'
    } else {
      animationDirection.value = 'up'
    }
  } else {
    if (oldIndex > index) {
      animationDirection.value = 'left'
    } else {
      animationDirection.value = 'right'
    }
  }
  if (index < 0) {
    activeItem.value = itemCount - 1
  } else if (index >= itemCount) {
    activeItem.value = 0
  } else {
    activeItem.value = index
  }
  items.value[activeItem.value].setIsShow(true)
  setTimeout(() => {
    items.value[oldIndex].setIsShow(false)
  }, 100)
}
onMounted(() => {
  carouselItemLength.value = items.value.length
  root.value?.addEventListener('mousewheel', mousewheelFun)
  items.value[0].setIsShow(true)
})
provide('carouselContext', {addItem, carouselItemLength, animationDirection})
</script>
<script lang="ts">
export default {
  name: "LCarousel"
}
</script>

<style scoped>

</style>
