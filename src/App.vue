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
