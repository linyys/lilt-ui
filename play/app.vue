<template>
  <l-button @click="fun">暗</l-button>
  <div>
    <l-streamer/>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
const input = ref('')
const carouselData = [
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
]
const switchData = ref(true)
const fun = () => {
  console.log(input.value)
  // if(switchData.value){
  //   document.body.setAttribute('lilt-theme','dark')
  //   switchData.value = false
  // }else  {
  //   document.body.removeAttribute('lilt-theme')
  //   switchData.value = true
  // }
}
</script>
