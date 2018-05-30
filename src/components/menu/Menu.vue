<template>
<aside class="menu">
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li>
      <a>
        <span class="icon">
        <i class="fas fa-database"></i></span>
        Databases
      </a>
    </li>
        <li>
      <a>
        <span class="icon">
        <i class="fas fa-book"></i></span>
        Documentation
      </a>
    </li>
  </ul>
</aside>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
