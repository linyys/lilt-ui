import { ref } from 'vue';
const ZIndex = ref(2000);
const getZIndex = () => {
    return ZIndex.value++;
};
const reduceZIndex = () => {
    ZIndex.value -= 1;
};
export { getZIndex, reduceZIndex };
