<template>
  <li>
    <a :href="url">
      <span class="icon has-text-white ">
        <i :class="icon"></i></span>
        <span class="text has-text-white">{{ placeholder }}</span>
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
.angra-menu.close li{
  width: 3rem;
}

.angra-menu.close .text{
  display: none;
}

@media (max-width: 768px) {
  li{
    width: 3rem;
    display: block;
    float: left;
  }
  .text{
    display: none;
  }
}
@media (min-width: 769px) and (max-width: 1023px) {
}
@media (min-width: 1024px) and (max-width: 1215px) {
}
@media (min-width: 1216px) and (max-width: 1407px) {
}
@media (min-width: 1408px){
}
</style>
