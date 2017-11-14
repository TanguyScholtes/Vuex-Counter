<template>
    <div id="app">
        <counter-display></counter-display>
        <hr>
        <counter-control></counter-control>
    </div>
</template>

<script>
    import CounterDisplay from './CounterDisplay.vue';
    import CounterControl from './CounterControl.vue';

    export default {
        name: 'app',
        components: {
            CounterDisplay,
            CounterControl
        },
    }
</script>

<style>

</style>
