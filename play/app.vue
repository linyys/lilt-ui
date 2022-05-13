<template>
  <l-button @click='fun'>test中</l-button>
  <div>
    <l-menu>
      <l-sub-menu title='567'>
        <l-menu-item>
          子菜单
        </l-menu-item><l-menu-item>
          子菜单
        </l-menu-item><l-menu-item>
          子菜单
        </l-menu-item><l-menu-item>
          子菜单
        </l-menu-item>
      </l-sub-menu>
    </l-menu>
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
  if(switchData.value){
    document.body.setAttribute('lilt-theme','dark')
    switchData.value = false
  }else  {
    document.body.removeAttribute('lilt-theme')
    switchData.value = true
  }
}
</script>
