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
    default: -1
  },
  placeholder: {
    type: String,
    default: ''
  }
}
export const inputEmits = ['update:modelValue']
