<template>
  <section id="app" class="section">
    <div class="container">
      <div class="columns is-mobile">
        <aside class="column">
        </aside>
        <main class="column is-10 is-offset-2">
          <HomePage />
        </main>
      </div>

    </div>
  </section>
</template>

<script>
import HomePage from './pages/homepage/HomePage'
export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
</style>
