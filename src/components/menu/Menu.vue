<template>
  <aside class="angra-menu">
    <div @click="toogle" class="toogleButton">
      <span class="icon is-large">
        <i class="fas fa-bars"></i>
      </span>
    </div>
    <div class="menu">
      <ul class="menu-list">
        <MenuButton placeholder="Databases"
                    icon="fas fa-database"
                    url="#"/>
        <MenuButton placeholder="Documentation"
                    icon="fas fa-book"
                    url="#"/>
        <MenuButton placeholder="Configuration"
                    icon="fas fa-toolbox"
                    url="#"/>
      </ul>
    </div>
  </aside>
</template>

<script>
import MenuButton from './MenuButton.vue';

export default {
  name: 'Menu',
  props: {
    msg: String
  },
  methods: {
    toogle: function(){
      const menu = this.$el;
      menu.classList.toggle('close');
    }
  },
  components:{
    MenuButton
  }
}
</script>

<style scoped>
.angra-menu{
  background-color: #00D1B2;
}

.close{
  width: 3rem;
}

.toogleButton{
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .angra-menu{
    height: 3rem;
    width: 100vw;
  }
  .toogleButton{
    display: none;
  }
}
@media (min-width: 769px) and (max-width: 1023px) {
  .angra-menu{
    height: 100vh;
  }
}
@media (min-width: 1024px) and (max-width: 1215px) {
  .angra-menu{
    height: 100vh;
  }
}
@media (min-width: 1216px) and (max-width: 1407px) {
  .angra-menu{
    height: 100vh;
  }
}
@media (min-width: 1408px){
  .angra-menu{
    height: 100vh;
  }
}
</style>
