<template>
  <div style="width: 100px;height: 100px;position: fixed;left: 40%;top: 40%">
    <l-button @click="fun" color="#2080f0">一二三</l-button>
    <l-button @click="fun">四五六</l-button>
    <l-button @click="fun">七八九</l-button>
<!--    <l-streamer :quantity="200">-->

<!--    </l-streamer>-->
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
  // if(switchData.value){
  //   document.body.setAttribute('lilt-theme','dark')
  //   switchData.value = false
  // }else  {
  //   document.body.removeAttribute('lilt-theme')
  //   switchData.value = true
  // }
}
</script>
