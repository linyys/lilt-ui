<template>
  <l-button @click="fun">暗</l-button>
  <div>

  </div>
</template>
<script setup lang="ts">
const carouselData = [
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
]
const fun = () => {
  document.body.setAttribute('lilt-theme','dark')
}
</script>
