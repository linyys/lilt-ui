import { ref } from 'vue'
import type { Ref } from 'vue'
const ZIndex:Ref = ref(2000)
const getZIndex = () => {
  return ZIndex.value++
}
const reduceZIndex = () => {
  ZIndex.value -= 1
}
export {
  getZIndex,
  reduceZIndex
}
