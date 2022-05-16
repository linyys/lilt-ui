<template>
  <l-button @click='fun'>test中</l-button>
  <div>
    <l-menu accordion>
      <l-sub-menu title='567' index='1'>
        <l-menu-item index='1-1'>
          子菜单
        </l-menu-item>
        <l-menu-item index='1-2'>
          子菜单
        </l-menu-item>
        <l-menu-item index='1-3'>
          子菜单
        </l-menu-item>
        <l-menu-item index='1-4'>
          子菜单
        </l-menu-item>
      </l-sub-menu>
      <l-sub-menu title='567' index='2'>
        <l-menu-item index='2-1'>
          子菜单
        </l-menu-item>
        <l-menu-item index='2-2'>
          子菜单
        </l-menu-item>
        <l-menu-item index='2-3'>
          子菜单
        </l-menu-item>
        <l-menu-item index='2-4'>
          子菜单
        </l-menu-item>
      </l-sub-menu>
    </l-menu>
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
</script>
