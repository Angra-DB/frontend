<template>
  <aside class="menu">
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <MenuButton placeholder="Databases"
                  icon="fas fa-database"
                  url="db"/>
      <MenuButton placeholder="Documentation"
                  icon="fas fa-book"
                  url="#"/>
      <MenuButton placeholder="Configuration"
                  icon="fas fa-toolbox"
                  url="#"/>
    </ul>
  </aside>
</template>

<script>
import MenuButton from './MenuButton.vue';

export default {
  name: 'Menu',
  props: {
    msg: String
  },
  components:{
    MenuButton
  }
}
</script>

<style scoped>
</style>
