<template>
    <section class="section">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <h1 class="title">Databases</h1>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                    <button v-show="!isVisibleCreate" 
                            @click="toogleCreate" 
                            class="button is-primary">
                        <span class="icon is-medium">
                            <i class="fas fa-database"></i>
                        </span>
                        <span>Add New Database</span>
                    </button>
                    <CreateDatabase v-show="isVisibleCreate" 
                                    v-on:close="toogleCreate"/>
                    </div>
                </div>
            </div>
            <h2 v-if="!databases.length">Haven't found any databases</h2>
            <table v-else class="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="db in databases" 
                        :key="db.id">
                        <td>
                            <router-link :to="{
                                name: 'documents', 
                                params: {db_name: db.name}
                                }">
                                {{ db.name }}
                            </router-link>
                        </td>
                        <td>
                            <div class="field has-addons">
                                <span class="control">
                                    <button v-on:click="deleteDb(db.name)" class="button is-danger">
                                        <span class="icon is-medium">
                                            <i class="far fa-times-circle"></i>
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
    </section>
</template>

<script>
import axios from 'axios'
import CreateDatabase from './CreateDatabase'

export default {
        data(){
            return {
                databases: [{name: 'mydatabase'}],
                isVisibleCreate: false
            }
        },
        mounted(){
        },
        methods: {
            loadDb: function(){
                axios
                .get(`http://localhost:4321/`)
                .then(response=>(this.databases = response.data))
            },
            deleteDb: function(db_name){
                axios
                .delete(`http://localhost:4321/db/${db_name}`)
            },
            toogleCreate: function(){
                this.isVisibleCreate = !this.isVisibleCreate;
            }
        },
        components:{
            CreateDatabase
        }
    }
</script>

<style scoped>
body{
    height: 100vh;
}
</style>