<template>
  <div class="l-card" :style="props.bordered ? '' : 'border: 0;' " :class="[props.embedded === false ? `l-card-shadow-${props.shadow}` : 'l-card-embedded']">
    <div class="l-card-header" v-if="props.title.length > 0 || (this.$slots.extra && this.$slots.extra())">
      <span class="l-card-header-title">{{ props.title }}</span>
      <span class="l-card-header-extra">
        <slot name="extra"/>
      </span>
    </div>
    <slot/>
    <div class="l-card-footer" v-if="this.$slots.footer && this.$slots.footer()">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {cardProps} from './card'
import {defineProps} from "vue";
const props = defineProps(cardProps)
</script>
<script lang="ts">
export default {
  name: "LCard"
}
</script>

<style scoped>
</style>
