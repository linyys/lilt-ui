import {h} from 'vue'

const transitionStyle = '.3s height ease-in-out'


const Transition = {
  beforeEnter(el: HTMLElement) {
    el.style.transition = transitionStyle
    el.style.height = '0'
  },
  enter(el:HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = '';
    }
    el.style.overflow = 'hidden';
  },
  afterEnter(el:HTMLElement) {
    el.style.transition = ''
    el.style.height = ''
  },
  beforeLeave(el:HTMLElement) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el:HTMLElement) {
    if(el.scrollHeight !== 0) {
      el.style.transition = transitionStyle
      el.style.height = '0'
    }
  },
  afterLeave(el:HTMLElement) {
    el.style.transition = ''
    el.style.transition = ''
  }
}
export default {
  name: 'SubMenuTransition',
  render:(h,{children}) => {
    const data = {
      on: Transition
    }
    return h('transition',data,children)
  }
}
