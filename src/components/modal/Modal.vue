<template>
    <div class="modal" v-bind:class="{'is-active': isActive}">
        <div class="modal-background"></div>
            <div class="modal-content">
                <slot></slot>
            </div>
        <button v-on:click="close" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        data(){
            return {
                isActive: false
            }
        },
        methods: {
            close: function(){
                this.isActive = false
            },
            open: function(){
                this.isActive = true
            }
        }
    }
</script>

<style scoped>
</style>