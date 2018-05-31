<template>
  <section id="app" class="section">
    <div class="container">
      <div class="columns is-mobile">
        <aside class="column is-one-quarter">
                <Menu />
        </aside>
        <main class="column is-10 is-offset-2">
          <HomePage />
        </main>
      </div>

    </div>
  </section>
</template>

<script>
import Menu from './components/menu/Menu.vue'
import MenuButton from './components/menu/MenuButton.vue'
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
