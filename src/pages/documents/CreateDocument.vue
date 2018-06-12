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
        name: 'CreateDocument',
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
                axios.post(`http://localhost:4321/db/${db_name}/doc`, this.form.data)
            },
            toDocumentList: function(){
                const db_name = this.$route.params.db_name
                this.$router.push({ name: 'document_list', params: { db_name: db_name }})
            }
        }
    }
</script>

<style scoped>
</style>