import loadingBar from './loadingBar.vue'
import { createVNode, render } from 'vue'

interface loadingBar {
  appendTo: HTMLElement,
  start: Function,
  finish: Function,
  error: Function,
}

export const useLoadingBar: loadingBar = {
  appendTo: document.body,
  start: function() {
    const container = document.createElement('div')
    if(document.getElementById('l-loading-bar')) {
      document.getElementById('l-loading-bar')!.remove()
    }
    const vm = createVNode(
      loadingBar,
      {
        id: 'l-loading-bar'
      }
    )
    render(vm, container)
    this.appendTo.appendChild(container.firstElementChild!)
  },
  finish: function() {
    console.log(loadingBar)
  },
  error: function() {

  }
}
