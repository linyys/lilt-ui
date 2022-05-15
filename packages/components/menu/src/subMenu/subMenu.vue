<template>
  <div class='l-sub-menu' @click='ChangeActivity'>
    <div class='l-sub-menu-content'>
      <div
        class='l-sub-menu-title'
        :style="menuContext.isActivitySub.value.includes(props.index) ? 'color: var(--lilt-success);':'color: var(--color-text-1);'"
      >
        <span v-if='($slots.icon && $slots.icon())' class='l-menu-icon'>
          <slot name='icon' />
        </span>
        <span>{{ props.title }}</span>
      </div>
      <div class='l-sub-menu-arrow' :style="isShow ? 'transform: rotate(180deg)':''">
        <svg
          class='icon' viewBox='0 0 1026 1024' xmlns='http://www.w3.org/2000/svg'
          width='12' height='12'
        >
          <path
            d='M857.088 224.256q28.672-28.672 69.12-28.672t69.12 28.672q29.696 28.672 29.696 68.608t-29.696 68.608l-382.976 380.928q-12.288 14.336-30.72 19.968t-38.912 4.608-40.448-8.704-34.304-22.016l-376.832-374.784q-29.696-28.672-29.696-68.608t29.696-68.608q14.336-14.336 32.256-21.504t36.864-7.168 37.376 7.168 32.768 21.504l313.344 309.248z'
          ></path>
        </svg>
      </div>
    </div>
    <!--    <transition name='sub-menu-transition'>-->
    <div
      ref='subMenuBox'
      :style="menuContext.isActivitySub.value.includes(props.index) ? {maxHeight: showHeight + 'px',opacity: '1'} : {maxHeight: '0',opacity: '0'}"
      class='l-sub-menu-item'
    >
      <slot />
    </div>
    <!--    </transition>-->
  </div>
</template>
<script lang='ts' setup>
import { subMenuProps } from './subMenu'
import { inject, onMounted, provide, Ref, ref } from 'vue'

const props = defineProps(subMenuProps)
const menuContext: any = inject('menuContext')
// 保存受控的子菜单
const menuItems: Ref = ref([])
// 添加一个子菜单
const addMenuItem = (item: HTMLElement) => {
  menuItems.value.push(item)
}

// 菜单组应该展开的高度
let showHeight: Ref = ref(0)
const getShowHeight = () => {
  menuItems.value.forEach((item) => {
    showHeight.value += item.ref.offsetHeight
  })
}
// 控制展开
const subMenuBox: Ref = ref()
const isShow: Ref = ref()
const ChangeActivity = () => {
  if (menuContext.isActivitySub.value.includes(props.index)) {
    menuContext.delActivitySub(props.index)
  } else {
    menuContext.setActivitySub(props.index)
  }
}
onMounted(() => {
  // console.log(menuItems.value)
  getShowHeight()
  menuContext.addSubMenu({ index: props.index })
})
provide('subMenuContext', { addMenuItem })
</script>
<script lang='ts'>
export default {
  name: 'LSubMenu'
}
</script>

<style scoped>

</style>
