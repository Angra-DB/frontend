import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Databases from '@/pages/databases/Databases.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Databases.vue', () => {
  it('show message when none database is registered', () => {
    const msg = "Haven't found any databases"
    const data = () => { return {databases: [], isVisibleCreate: false}}
    const wrapper = shallowMount(Databases, {
      localVue,
      router,
      data
    })
    const el = wrapper.find('h2')
    expect(el.text()).to.include(msg)
  })
})
