<template>
    <aside>
        <!--
        <div id="" v-highlight>
            <pre>
                <code class="you can specify the language here">
                    {{ value }}
                </code>
            </pre>        
        </div>
        -->
        <textarea v-bind:value="value"
                  v-on:change="$emit('change', $event.target.value)" 
                  class="has-background-light"></textarea>
    </aside>
</template>

<script>
    export default {
        name: "ModelEditor",
        model: {
            prop: 'value',
            event: 'change',
        },
        props: {
            value: String
        }
    }
</script>

<style scoped>
textarea{
    border: none;
    font-family: monospace;
    padding: 5vh;
    resize: none;
    white-space : pre;
    width: 100%;
}
textarea:focus{
    outline: none;
}
</style>