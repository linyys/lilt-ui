<template>
  <l-carousel>
    <l-carousel-item v-for="item in 3" :key="item">
      <div style="height: 100px;width: 200px;" :style="{backgroundColor: `#${item * 3}${item * 3}${item * 3}` }">
        {{item}}
      </div>
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
