<template>
    <aside>
        <template v-if="!isVisibleCreate" >
            <button @click="toogleCreate" 
                    class="button is-primary">
                <span class="icon is-medium">
                    <i class="fas fa-database"></i>
                </span>
                <span>Add New Database</span>
            </button>
        </template>
        <template v-else>
            <label class="label is-small">Add New Database</label>
            <form v-on:submit.prevent="submit">
                <div class="field has-addons">
                    <div class="control">
                        <a @click="toogleCreate" class="button is-light">
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
        </template>
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
                },
                isVisibleCreate: false
            }
        },
        methods: {
            toogleCreate: function(){
                this.isVisibleCreate = !this.isVisibleCreate;
            },
            submit: function(){
                axios.post('http://localhost:4321/db/create', this.form.name).then(
                    (success) => {
                        
                    },
                    (fail) => {
                        
                    }
                )
            }
        }
    }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>