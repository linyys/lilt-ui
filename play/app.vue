<template>
  <l-carousel direction="vertical" trigger="hover" mousewheel style="width: 500px;height: 500px">
    <template #prev="slotProps">
      <div @click="slotProps.prevFun" style="position: relative;left: 0;top: 0;width: 50px;height: 50px;background-color: aqua;z-index: 1">
      </div>
    </template>
    <l-carousel-item v-for="(item,index) in carouselData" :key="index">
      <img :src="item" alt="" style="width: 500px;height: 500px"/>
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
