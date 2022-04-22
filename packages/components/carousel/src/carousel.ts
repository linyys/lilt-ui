export const carouselProps = {
    direction: {
        type: String,
        default: 'horizontal' // 'vertical'
    },
    trigger: {
        type: String,
        default: 'click' // 'hover
    },
    arrow: {
        type: String,
        default: 'always' // 'hover' || 'none'
    },
    mousewheel: {
        type: Boolean,
        default: false
    }
}
