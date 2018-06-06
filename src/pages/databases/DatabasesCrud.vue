<template>
    <div class="modal" v-bind:class="{'is-active': isActive}">
        <div class="modal-background"></div>
            <div class="modal-content">
                <section>
                    <h2>Database</h2>
                    <form v-on:submit.prevent="submit">

                    <div class="field">
                        <label class="label">Name</label>
                            <div class="control">
                                <input class="input" 
                                       type="text" 
                                       v-model="form.name"
                                       placeholder="e.g mydatabase">
                            </div>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button type="submit" class="button is-primary">
                                Submit
                            </button>
                        </p>
                        <p class="control">
                            <a class="button is-light">
                            Cancel
                            </a>
                        </p>
                    </div>
                    </form>
                </section>
            </div>
        <button v-on:click="close" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'db-crud',
        data(){
            return {
                isActive: true,
                form: {
                    name: ''
                }
            }
        },
        methods: {
            close: function(){
                this.isActive = false
            },
            submit: function(){
                axios.post('http://localhost:4321/db/create', this.form.name)
            }
        }
    }
</script>

<style scoped>
.modal-content{
    background-color: white;
}
</style>