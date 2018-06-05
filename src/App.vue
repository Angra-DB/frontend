<template>
  <section id="app" class="section">
    <div class="container">
      <div class="columns is-mobile">
        <aside class="column is-2">
          <Menu />
        </aside>
        <main class="column is-10">
          <HomePage />
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
