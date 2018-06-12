<template>
    <div>
        <form @submit.prevent="createDocument">
            <textarea v-model="form.data"></textarea>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'CreateDocument',
        data(){
            return {
                form: {
                    data: ''
                }
            }
        },
        methods: {
            createDocument: function(){

            }
        }
    }
</script>

<style scoped>

</style>