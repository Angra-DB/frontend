<template>
    <section>
        <div class="columns is-gapless">
            <div class="column is-4 document-list">
                <div class="header is-flex">
                <router-link :to="{name: 'databases'}" 
                             class="button is-light is-medium">
                    <span class="icon is-large">
                        <i class="fas fa-lg fa-chevron-left"></i>
                    </span>
                </router-link>
                    <h1 class="is-title">{{ tableTitle }}</h1>
                </div>
                <ul class="menu-list">
                    <li class="is-flex">
                        <h1 class="is-title">All Documents</h1>
                        <document-operations />
                    </li>
                </ul>                
            </div>
            <div class="column is-8">
                <div class="header">
                    <h1 class="is-title">{{ operationTitle }}</h1>
                </div>
                <router-view name="documentView"></router-view>
            </div>
        </div>
    </section>
</template>

<script>
import DocumentOperations from './DocumentOperations'
    export default {
        computed:{
            tableTitle: function(){
                return this.$route.params.db_name;
            },
            operationTitle: function(){
                return `operationTitle`;
            },
        },
        components: {
            DocumentOperations
        }
    }
</script>

<style scoped>
.header{
    border-bottom: 1px solid #999999;
    box-shadow: 0px 5px 0px 0px #DDDDDD;
    height: 3rem;
    align-items: center;
}
li{
    border-bottom: thin solid #999999;
    padding: 0.5rem 0rem;
}
li.is-flex{
    justify-content: space-evenly;
}
.document-list{
    border-right: thin solid #999999;
    height: 100vh;
}
</style>