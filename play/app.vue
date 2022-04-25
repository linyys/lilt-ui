<template>
  <l-tag size="small">标签标签标签标签</l-tag>
  <l-tag type="success" closable >标签标签标签标签</l-tag>
  <l-tag type="info" size="large">标签标签标签标签</l-tag>
  <l-tag type="error" :color="{ bcColor: '#BBB', textColor: '#555', borderColor: '#555' }">标签标签标签标签</l-tag>
  <l-tag type="warning" closable @close="fun">标签标签标签标签</l-tag>
  <l-card shadow="hover">
   <template #footer>
     底部
   </template>
    111
  </l-card>
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
