<template>
  <l-carousel>
    <l-carousel-item v-for="(item,index) in carouselData" :key="index">
      <img :src="item" alt=""/>
    </l-carousel-item>
  </l-carousel>
</template>
<script setup lang="ts">
const carouselData = [
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
]
const fun = () => {
  console.log(1)
}
</script>
