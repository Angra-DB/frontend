<template>
  <section id="app" class="section">
    <div class="container">
      <div class="collumns">
        <aside class="column is-one-quarter">
                <Menu />
        </aside>
        <main class="column is-three-quarter">
        </main>
      </div>

    </div>
  </section>
</template>

<script>
import Menu from './components/menu/Menu.vue'
import MenuButton from './components/menu/MenuButton.vue'

export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>
</style>
