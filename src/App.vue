<template>
  <section id="app">
    <div class="">
      <div class="columns is-gapless">
        <aside class="column is-2">
                <Menu />
        </aside>
        <main class="column is-10">
          <router-view></router-view>
        </main>
      </div>

    </div>
    <notifications group="warning">
      <template slot="body" scope="props">
        <div class="notification is-warning">
          <button class="delete" @click="props.close"></button>
          <strong>{{props.item.title}}</strong><br >
          <span v-html="props.item.text"></span>
        </div>
      </template>
    </notifications>
    <notifications group="success">
      <template slot="body" scope="props">
        <div class="notification is-success">
          <button class="delete" @click="props.close"></button>
          <strong>{{props.item.title}}</strong><br >
          <span v-html="props.item.text"></span>
        </div>
      </template>
    </notifications>
    <notifications group="danger">
      <template slot="body" scope="props">
        <div class="notification is-danger">
          <button class="delete" @click="props.close"></button>
          <strong>{{props.item.title}}</strong><br >
          <span v-html="props.item.text"></span>
        </div>
      </template>
    </notifications>
  </section>
</template>

<script>
import Menu from './components/menu/Menu.vue'
import HomePage from './pages/homepage/HomePage'

export default {
  name: 'app',
  components: {
    Menu,
    HomePage
  }
}
</script>

<style>
</style>
