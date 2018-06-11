<template>
    <div class="modal" v-bind:class="{'is-active': isVisible}">
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
        props: {
            isVisible:{
                type: Boolean,
                default: true
            }
        },
        methods: {
            close: function(){
                this.$emit('close');
            },
            open: function(){
                this.isVisible = true
            }
        }
    }
</script>

<style scoped>
</style>