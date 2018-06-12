<template>
    <section>
        <template v-if="!documents.length">
            <p>No document selected</p>    
        </template>
        <template v-else>
            <article v-for="doc in documents" v-bind:key="doc.id" class="message">
                <div class="message-header">
                    <p>id: "{{ doc.id }}"</p>
                    <div class="field has-addons">
                        <span class="control">
                            <router-link :to="{name: 'document_edit', params:{id: doc.id}}"
                                          class="button is-primary is-small is-rounded">
                                <span class="icon is-small">
                                    <i class="fas fa-edit"></i>
                                </span>
                            </router-link>
                        </span>
                        <span class="control">
                            <button @click="deleleDocument(doc.id)"
                                    class="button is-danger is-small is-rounded" 
                                    aria-label="delete">
                                <span class="icon is-small">
                                    <i class="fas fa-times"></i>
                                </span>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="message-body has-text-danger">
                    {{ doc.description }}
                </div>
            </article>
        </template>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'DocumentList',
        data(){
            return {
                documents: []
            }
        },
        methods:{
            loadDocuments: function(){
                const a = [
                    {id: 1, description: `"{id": "0101, "value": "3"}`},
                    {id: 2, description: 'mydoc2'},
                    {id: 3, description: 'mydoc3'},
                    {id: 4, description: 'mydoc4'},
                    {id: 5, description: 'mydoc5'}
                ];
                this.documents = a
                //const dbName = this.$route.params.db_name
                //axios.get(`http://localhost:4321/${dbName}`)
            },
            deleleDocument: function(id){
                const dbName = this.$route.params.db_name
                axios.delete(`http://localhost:4321/${dbName}/doc/${id}`)
            }
        },
        beforeMount(){
            this.loadDocuments()
        }
    }
</script>

<style scoped>
section{
    overflow-y: scroll;
    max-height: 75vh;
}
</style>