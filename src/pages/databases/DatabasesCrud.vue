<template>
    <modal v-bind:isVisible="visible" v-on:close="close">
        <section class="form-content">
            <h2 class="title is-2">Creating Database</h2>
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
                        <button v-on:click="close" type="reset" class="button is-light">
                            Cancel
                        </button>
                    </p>
                </div>
                </form>
        </section>
    </modal>
</template>

<script>
import Modal from '../../components/modal/Modal'
import axios from 'axios'

    export default {
        name: 'db-crud',
        props: {
            visible:{
                type: Boolean,
                default: false
            }
        },
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
        },
        components: {
            Modal
        }
    }
</script>

<style scoped>
.form-content{
    background-color: white;
    padding: 3vh;
    border-radius: 3vh;
    height: 50vh;
}
</style>