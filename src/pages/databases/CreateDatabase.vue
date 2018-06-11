<template>
    <aside>
        <label class="label is-small">Add New Database</label>
        <form v-on:submit.prevent="submit">
            <div class="field has-addons">
                <div class="control">
                    <a @click="close" class="button is-light">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <div class="control">
                    <input class="input" v-model="form.name" type="text" placeholder="Name of database">
                </div>
                <div class="control">
                    <button type="submit" class="button is-primary">
                        Create
                    </button>
                </div>
            </div>
        </form>
    </aside>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreateDatabase',
        data(){
            return {
                form: {
                    name: ''
                }
            }
        },
        methods: {
            close: function(){
                this.$emit('close')
            },
            submit: function(){
                axios.post('http://localhost:4321/db/create', this.form.name)
            }
        }
    }
</script>

<style scoped>
</style>