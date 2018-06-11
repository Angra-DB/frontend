import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Databases from '@/pages/databases/Databases.vue'

describe('Databases.vue', () => {
  it('show message when any database is registered', () => {
    const msg = "Haven't found any databases"
    const wrapper = shallowMount(Databases)
    expect(wrapper.find('h2').text).to.include(msg)
  })
})
