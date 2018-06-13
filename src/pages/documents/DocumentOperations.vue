<template>
    <aside>
        <button @click="toogleMenu"
                class="button is-primary is-rounded">
            <i class="fas fa-plus"></i>
        </button>
        
        <ul v-if="showList" class="menu-list">
            <p class="menu-label">Add new</p>
            <li>
                <router-link :to="{name: 'document_create'}">
                    New Doc
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: 'DocumentOperations',
        data(){
            return {
                showList: false
            }
        },
        methods: {
            toogleMenu: function(){
                this.showList = !this.showList
            }
        }
    }
</script>

<style scoped>
aside{
    position: relative;
    top: 0%;
    left: 0%;
}
ul.menu-list{
    position: absolute;
    top: 5vh;
    left: -10vh;
    width: 20vh;
}
</style>