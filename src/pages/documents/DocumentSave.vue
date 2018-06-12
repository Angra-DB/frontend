<template>
    <section class="columns">
        <form @submit.prevent="createDocument">
            <aside class="column is-12">
                <div class="field has-addons">
                    <span class="control">
                        <button class="button is-primary" type="submit">
                            <span class="icon is-small">
                                <i class="fas fas-create"></i>
                            </span>
                            <span>Create Document</span>
                        </button>
                    </span>
                    <span class="control">
                        <button @click="toDocumentList" 
                                class="button is-danger is-outlined" 
                                type="reset">
                            <span class="icon is-small">
                                <i class="fas fas-create"></i>
                            </span>
                            <span>Cancel</span>
                        </button>
                    </span>
                </div>
            </aside>
            <article class="column is-12">
                <textarea v-model="form.description"></textarea>
            </article>
        </form>
    </section>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'DocumentSave',
        data(){
            return {
                form: {
                    description: ''
                }
            }
        },
        methods: {
            createDocument: function(){
                const db_name = this.$route.params.db_name
                const id = this.$route.params['id']
                if(id){
                    axios.put(`http://localhost:4321/db/${db_name}/update/${id}`, this.form.description)
                }else{
                    axios.post(`http://localhost:4321/db/${db_name}/doc`, this.form.description)
                }
            },
            getDocument: function(id){
                //axios.get(`http://localhost:4321/db/${db_name}/doc/${id}`)
                this.form.description = id
            },
            toDocumentList: function(){
                const db_name = this.$route.params.db_name
                this.$router.push({ name: 'document_list', params: { db_name: db_name }})
            }
        },
        beforeMount(){
            const id = this.$route.params['id']
            if(id){
                this.getDocument(id)
            }
        }
    }
</script>

<style scoped>
</style>