<template>
    <section>
        <template v-if="!documents.length">
            <p>No document selected</p>    
        </template>
        <template v-else>
            <article v-for="doc in documents" v-bind:key="doc.id" class="message">
                <div class="message-header">
                    <p>{{ doc.id }}</p>
                    <button class="button is-small is-rounded" aria-label="delete">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
                <div class="message-body has-text-danger">
                    {{ doc.name }}
                </div>
            </article>
        </template>
    </section>
</template>

<script>
    export default {
        name: 'DocumentList',
        data(){
            return {
                documents: [{id: 1, name: `"{id": "0101, "value": "3"}`},{id: 2, name: 'mydoc2'}]
            }
        },
        methods:{
            loadDocuments: function(dbName){
                axios.get(`http://localhost:4321/${dbName}`)
            }
        },
    }
</script>

<style scoped>

</style>