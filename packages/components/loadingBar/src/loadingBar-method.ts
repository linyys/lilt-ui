import loadingBar from './loadingBar.vue'
import { createVNode, render } from 'vue'

interface loadingBar {
  start: Function,
  finish: Function,
  error: Function,
  dom: HTMLElement | null
}

export const useLoadingBar: loadingBar = {
  dom: null,
  start: function() {
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
    this.dom = document.getElementById('l-loading-bar')
  },
  finish: function() {
    if(this.dom !== null) {
      this.dom.style.maxWidth = '100vw'
      this.dom.style.width = '100vw'
      this.dom.style.opacity = '0'
    }
  },
  error: function() {
    if(this.dom !== null) {
      this.dom.style.maxWidth = '100vw'
      this.dom.style.width = '100vw'
      this.dom.style.backgroundColor = 'var(--lilt-error)'
      this.dom.style.opacity = '0'
    }
  }
}
