<template>
    <section>
        <div class="columns is-gapless">
            <div class="column is-4 document-list">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <router-link :to="{name: 'databases'}" 
                                        class="button is-light is-medium">
                                <span class="icon is-large">
                                    <i class="fas fa-lg fa-chevron-left"></i>
                                </span>
                            </router-link>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <h1 class="title is-4">{{ tableTitle }}</h1>
                        </div>
                    </div>
                </div>    
                <ul class="menu-list">
                    <li>
                        <div class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <h1 class="is-title">All Documents</h1>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <document-operations />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>                
            </div>
            <div class="column is-8">
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
            }
        },
        components: {
            DocumentOperations
        }
    }
</script>

<style scoped>
h1{
    padding-right: 1rem;
}
li{
    border-bottom: thin solid #999999;
    padding: 0.5rem 1rem;
}
.document-list{
    border-right: thin solid #999999;
    height: 100vh;
}
</style>