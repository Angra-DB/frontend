import { expect } from 'chai'
import sinon from 'sinon'
import moxios from 'moxios'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Notifications from 'vue-notification'
import Databases from '@/pages/databases/Databases.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Notifications)
const router = new VueRouter()
const databases = [{name: 'mydatabase'}]

describe('Databases.vue', () => {
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('show message when none database is registered', () => {
    const msg = "Haven't found any databases"
    const data = () => { return {databases: [], isVisibleCreate: false} }
    const wrapper = shallowMount(Databases, {
      localVue,
      router,
      data
    })
    const el = wrapper.find('h2')
    expect(el.text()).to.include(msg)
  })
  it('show table filled when are databases', () => {
    const data = () => { return {databases: databases, isVisibleCreate: false} }
    const wrapper = shallowMount(Databases, {
      localVue,
      router,
      data
    })
    const el = wrapper.findAll('tbody tr')
    expect(el.length).to.equal(databases.length)
  })
  it('when click delete button, should call delete method', () => {
    const data = () => { return {databases: databases, isVisibleCreate: false} }
    const fakeFn = sinon.fake()
    const wrapper = shallowMount(Databases, {
      localVue,
      router,
      data,
      methods: {
        deleteDb: fakeFn
      }
    })
    const el = wrapper.find('button.is-danger')
    el.trigger('click')
    expect(fakeFn.callCount).to.be.equal(1)
  })
  it('before mount component, should call load method', () => {
    const data = () => { return {databases: databases, isVisibleCreate: false} }
    const wrapper = shallowMount(Databases, {
      localVue,
      router,
      data
    })
  })
  it('when cannot load database, should call notification', () => {
    const data = () => { return {databases: databases, isVisibleCreate: false} }
    const wrapper = shallowMount(Databases, {
      localVue,
      router,
      data
    })
    moxios.withMock(() => {
      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 500,
          response: {}
        })
      })
    })
  })
})
