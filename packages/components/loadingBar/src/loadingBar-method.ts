import loadingBar from './loadingBar.vue'
import { createVNode, render } from 'vue'

interface loadingBar {
  start: Function,
  finish: Function,
  error: Function,
}
let dom:HTMLElement | null = null
let flag:Boolean = false
export const useLoadingBar: loadingBar = {
  start: function() {
    flag = false
    const appendTo = document.body
    const container = document.createElement('div')
    if (document.getElementById('l-loading-bar')) {
      document.getElementById('l-loading-bar')!.remove()
    }
    const vm = createVNode(
      loadingBar,
      {
        id: 'l-loading-bar'
      }
    )
    render(vm, container)
    appendTo.appendChild(container.firstElementChild!)
    dom = document.getElementById('l-loading-bar')
    let timer:any = null
    timer = setTimeout(() => {
      if(timer) {
        clearTimeout(timer)
      }
      flag = true
    },1500)
  },
  finish: function() {
    const timer =  setInterval(() => {
      if(dom !== null && flag) {
        dom.style.maxWidth = '100vw'
        dom.style.width = '100vw'
        dom.style.opacity = '0'
        flag = false
        clearInterval(timer)
      }
    },100)

  },
  error: function() {
    const timer = setInterval(() => {
      if(dom !== null && flag) {
        dom.style.maxWidth = '100vw'
        dom.style.width = '100vw'
        dom.style.backgroundColor = 'var(--lilt-error)'
        dom.style.opacity = '0'
        flag = false
        clearInterval(timer)
      }
    },100)
  }
}
