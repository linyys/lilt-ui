export const switchProps = {
    modelValue: {
      type: Boolean
    },
    activeColor: {
        type: String,
        default: 'var(--lilt-success)'
    },
    inactiveColor: {
        type: String,
        default: 'var(--color-border-2)'
    },
    square: {
        type: Boolean,
        default: false
    }
}
export const switchEmit = ['update:modelValue']
