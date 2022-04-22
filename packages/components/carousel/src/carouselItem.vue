<template>
    <div v-show="isShow" class="l-carousel-item" :class="[ani]">
      <slot/>
    </div>
</template>
<script lang="ts" setup>
import {inject, onMounted, getCurrentInstance, ref, Ref} from 'vue'
const instance = getCurrentInstance()
const carouselContext:any = inject('carouselContext')
const isShow : Ref = ref(false)
const ani = ref('')
const setIsShow = (flag: boolean) => {
  isShow.value = flag
  ani.value = `l-carousel-item-animation-${carouselContext.animationDirection.value}`
}
onMounted(() => {
  carouselContext.addItem({
    uid: instance?.uid,
    setIsShow: setIsShow
  })
})
</script>

<script lang="ts">
export default {
  name: "LCarouselItem"
}
</script>

<style scoped>

</style>
