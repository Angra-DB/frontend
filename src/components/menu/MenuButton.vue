<template>
<li>
  <a :href="url">
    <span class="icon">
      <i :class="icon"></i></span>
      {{ placeholder }}
  </a>
</li>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    icon: String,
    placeholder: String,
    url: String
  }
}
</script>

<style scoped>
</style>
