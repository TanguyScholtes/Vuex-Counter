<template>
    <div>
        <p>Count : {{ count.value }}</p>
    </div>
</template>

<script>
    import { bus } from './main.js';

    export default {
        name: 'CounterDisplay',

        data () {
            return {
                count: {
                    value: 0,
                    amount: 1 //value of increment/decrement
                }
            }
        },

        created () {
            bus.$on( 'countValueIncrement', this.countValueIncrement );
            bus.$on( 'countValueDecrement', this.countValueDecrement );
        },

        methods: {
            countValueIncrement( payload ) {
                this.count.amount = payload;
                this.count.value += this.count.amount;
            },

            countValueDecrement( payload ) {
                this.count.amount = payload;
                this.count.value -= this.count.amount;
            }
        }
    }
</script>

<style>

</style>
