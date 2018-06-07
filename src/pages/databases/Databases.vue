<template>
    <section>
        <div class="container">
            <div class="columns header">
                <div class="column is-8">
                    <h1 class="title">Databases</h1>
                </div>
                <div class="column is-2">
                    <button class="button is-primary">
                        <span class="icon is-medium">
                            <i class="fas fa-database"></i>
                        </span>
                        <span>Add New Database</span>
                    </button>
                </div>
                <div class="column is-2">
                    &nbsp;
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
                        <td>{{ db.name }}</td>
                        <td>
                            <div class="field has-addons">
                                <span class="control">
                                    <button class="button is-primary">
                                        <span class="icon is-medium">
                                            <i class="fas fas fa-file-alt"></i>
                                        </span>
                                    </button>
                                </span>
                                <span class="control">
                                    <button class="button is-info">
                                        <span class="icon is-medium">
                                            <i class="fas fa-edit"></i>
                                        </span>
                                    </button>
                                </span>
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
        <DatabasesCrud />
    </section>
</template>

<script>
import axios from 'axios'
import DatabasesCrud from './DatabasesCrud'

    export default {
        data(){
            return {
                databases: [{name: 'mydatabase'}]
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
            }
        },
        components:{
            DatabasesCrud
        }
    }
</script>

<style scoped>
.header{
    border-bottom: 1px solid #999999;
    box-shadow: 0px 5px 0px 0px #DDDDDD;
}
</style>