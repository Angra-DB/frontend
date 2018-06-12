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
                showList: true
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

</style>