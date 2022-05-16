<template>
  <l-button @click='start'>start</l-button>
  <l-button @click='finish'>finish</l-button>
  <l-button @click='error'>error</l-button>
  <div>

  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { useLoadingBar } from '@lilt-ui-vue/components'

const input = ref('')
const carouselData = [
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg'
]
const switchData = ref(true)
const fun = (e) => {
  useLoadingBar.start()
  // if (switchData.value) {
  //   document.body.setAttribute('lilt-theme', 'dark')
  //   switchData.value = false
  // } else {
  //   document.body.removeAttribute('lilt-theme')
  //   switchData.value = true
  // }
}
const start = () => {
  useLoadingBar.start()
}
const finish = () => {
  useLoadingBar.finish()
}
const error = () => {
  useLoadingBar.error()
}
</script>
