export const TagProps = {
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'middle'
  },
  closable: {
    type: Boolean,
    default: false
  },
  color: {
    type: Object,
    default: () => {}
  }
}
export const TagEmit = ['close']
