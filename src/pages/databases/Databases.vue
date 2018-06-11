<template>
    <section>
        <div class="container">
            <div class="columns header">
                <div class="column is-8">
                    <h1 class="title">Databases</h1>
                </div>
                <div class="column is-4">
                    <button v-show="!isVisibleCreate" @click="toogleCreate" class="button is-primary">
                        <span class="icon is-medium">
                            <i class="fas fa-database"></i>
                        </span>
                        <span>Add New Database</span>
                    </button>
                    <CreateDatabase v-show="isVisibleCreate" v-on:close="toogleCreate"/>
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
                    <tr v-for="db in databases" :key="db.id">
                        <td><a :href="db.name">{{ db.name }}</a></td>
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
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import DatabasesCrud from './DatabasesCrud'
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
.header{
    border-bottom: 1px solid #999999;
    box-shadow: 0px 5px 0px 0px #DDDDDD;
}
body{
    height: 100vh;
}
</style>