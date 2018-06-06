<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Databases</h1>
            <button class="button is-primary">
                <span class="icon is-medium">
                    <i class="fas fa-database"></i>
                </span>
                <span>Add New Database</span>
            </button>
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
                                <span @click="delete('a')" class="control">
                                    <a class="button is-danger">
                                        <span class="icon is-medium">
                                            <i class="far fa-times-circle"></i>
                                        </span>
                                    </a>
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
            load: function(){
                axios
                .get(`http://localhost:4321/`)
                .then(response=>(this.databases = response.data))
            },
            delete: function(db_name){
                console.log(db_name);
                axios
                .delete(`http://localhost:4321/db/${db_name}`)
                .then(response=>(this.databases = response.data))
            }
        },
        components:{
            DatabasesCrud
        }
    }
</script>

<style scoped>

</style>