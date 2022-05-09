import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { size: 'mini' }
    })
    expect(wrapper.classes()).toContain('l-button-mini')
  })
})
