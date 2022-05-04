export const inputProps = {
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String
    },
    maxText: {
        type: Number,
        default: Infinity
    }
}
export const inputEmits = ['update:modelValue']
