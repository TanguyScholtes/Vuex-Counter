<template>
    <div>
        <p>Count : {{ value }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'CounterDisplay',

        computed: {
            /*
            value () {
                //return this.$store.state.count.value;
                return this.$store.getters.value; //use getters
            }
            */
            ...mapGetters ( [
                'value'
            ] )
        },

        methods: {}
    }
</script>

<style>

</style>
