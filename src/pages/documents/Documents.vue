<template>
    <section>
        <div class="columns is-gapless">

        </div>
        <div class="columns is-gapless">
            <div class="column is-4 document-list">
                <div class="header">
                    <h1 class="is-title">{{ title }}</h1>
                </div>
                <ul class="menu-list">
                    <li>
                        <h1 class="is-title">All Documents</h1>
                        <button class="button is-primary is-rounded">
                            <i class="fas fa-plus"></i>
                        </button>
                    </li>
                    <li v-for="doc in documents" v-bind:key="doc.id">
                    {{ doc.name }}
                    </li>
                </ul>                
            </div>
            <div class="column is-8">
                No document selected
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                documents: [{id: 1, name: 'mydoc'},{id: 2, name: 'mydoc2'}]
            }
        },
        methods:{
            loadDocuments: function(dbName){
                axios.get(`http://localhost:4321/${dbName}`)
            }
        },
        computed:{
            title: function(){
                return this.$route.params.db_name;
            }
        }
    }
</script>

<style scoped>
.header{
    border-bottom: 1px solid #999999;
    box-shadow: 0px 5px 0px 0px #DDDDDD;
}
li{
    border-bottom: thin solid #999999;
    padding: 0.5rem 0rem;
}
.document-list{
    border-right: thin solid #999999;
    height: 100%;
}
</style>