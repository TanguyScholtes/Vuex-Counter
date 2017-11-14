<template>
    <div>
        <label for="steps">Amount :</label>
        <span>{{ amount }}</span>
        <input
            v-model="amount"
            id="steps"
            name="steps"
            type="range"
            value="1"
            step="1"
            min="1"
            max="10"
        >
        <button @click="increment">Increment Count</button>
        <button @click="decrement">Decrement Count</button>
    </div>
</template>

<script>
    import { bus } from './main.js';

    export default {
        name: 'CounterControl',

        data () {
            return {
                amount: 1
            }
        },

        methods: {
            increment () {
                bus.$emit( 'countValueIncrement', parseInt( this.amount ) ); //have to parseInt as input range gives text, not a number
            },

            decrement () {
                bus.$emit( 'countValueDecrement', parseInt( this.amount ) );
            }
        }

    }
</script>

<style>

</style>
