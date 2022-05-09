<template>
  <div
    class="l-card"
    :style="props.bordered ? '' : 'border: 0;' "
    :class="[props.embedded === false ? `l-card-shadow-${props.shadow}` : 'l-card-embedded']"
  >
    <div
      v-if="props.title.length > 0 || ($slots.extra && $slots.extra())"
      class="l-card-header"
    >
      <span class="l-card-header-title">{{ props.title }}</span>
      <span class="l-card-header-extra">
        <slot name="extra" />
      </span>
    </div>
    <slot />
    <div
      v-if="$slots.footer && $slots.footer()"
      class="l-card-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {cardProps} from './card'
const props = defineProps(cardProps)
</script>
<script lang="ts">
export default {
  name: "LCard"
}
</script>

<style scoped>
</style>
