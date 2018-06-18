import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CreateDatabase from '@/pages/databases/CreateDatabase.vue'

describe('CreateDatabase.vue', () => {
  it('show button to create', () => {
    const wrapper = shallowMount(CreateDatabase)
    const el = wrapper.find('button')
    expect(el.contains('button'))
  })
  it('when click the button, should show a input', () => {
    const wrapper = shallowMount(CreateDatabase)
    const button = wrapper.find('button')
    button.trigger('toogleCreate')
    const el = wrapper.find('input')
    expect(el.contains('input'))
  })
})
