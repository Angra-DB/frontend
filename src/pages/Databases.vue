<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Databases</h1>
            <button class="button is-success">Add New Database</button>
            <h2 v-if="!databases.length">Haven't found any databases</h2>
            <table v-else class="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th># of Docs</th>
                        <th>Update Seq</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="db in databases" :key="db.id">
                        <td>{{ db.name }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                databases: []
            }
        },
        mounted(){
            axios
            .get('http://localhost:4321/')
            .then(response=>(this.databases = response.data))
        }
    }
</script>

<style scoped>

</style>