<template>
  <div class='l-sub-menu' @click.self='ChangeActivity'>
    <div class='l-sub-menu-content'>
      <div class='l-sub-menu-title'>
        <span>{{ props.title }}</span>
      </div>
      <div class='l-sub-menu-arrow'></div>
    </div>
    <transition name='sub-menu-transition'>
      <div v-if='isShow' class='l-sub-menu-item'>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang='ts' setup>
import { subMenuProps } from './subMenu'
import { ref } from 'vue'

const props = defineProps(subMenuProps)
const isShow = ref()
const ChangeActivity = () => {
  isShow.value = !isShow.value
}
</script>
<script lang='ts'>
export default {
  name: 'LSubMenu'
}
</script>

<style scoped>

</style>
