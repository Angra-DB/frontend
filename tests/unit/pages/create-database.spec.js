import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CreateDatabase from '@/pages/databases/CreateDatabase.vue'

describe('CreateDatabase.vue', () => {
  it('show button to create', () => {
    const wrapper = shallowMount(CreateDatabase)
    const el = wrapper.find('button')
    expect(el.contains('button'))
  })
  it('when click the button, should show an input', () => {
    const wrapper = shallowMount(CreateDatabase)
    wrapper.find('button').trigger('click')
    const el = wrapper.find('input')
    expect(el.contains('input')).to.be.true
  })
  it('when click close button, should close an input', () => {
    const wrapper = shallowMount(CreateDatabase, {
      data () {
        return {
          form: {
            name: ''
          },
          isVisibleCreate: true
        }
      }
    })
    const button = wrapper.find('a')
    button.trigger('click')
    expect(wrapper.contains('input')).to.be.false
  })
})

function show (text) {
  console.log(`
  -----------------------------------------------------------
  -  console:
  -    ${text}
  -----------------------------------------------------------
  `)
}
