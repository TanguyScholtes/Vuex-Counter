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
            @change="amountUpdate"
        >
        <button @click="increment">Increment Count</button>
        <button @click="decrement">Decrement Count</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        name: 'CounterControl',

        computed: {
            //"..." = spread operator => destructures (extracts each element of) what is on its right
            ...mapGetters ( [
                'amount'
            ] )
            //Can be followed normally by any variable
        },

        methods: {
            ...mapMutations( {
                //increment: 'countValueIncrement',
                decrement: 'countValueDecrement'
            } ),
            /*
            increment () {
                this.$store.commit( 'CountValueIncrement' );
            },

            decrement () {
                this.$store.commit( 'CountValueDecrement' );
            },
            */
            amountUpdate ( event ) {
                this.$store.commit( 'amountUpdate', event.target.value );
            },
            /*
            increment () {
                this.store.dispatch( 'countValueIncrement' ); //call to actions, not mutations
            }*/
            ...mapActions( {
                increment: 'countValueIncrement'
            } ),
        }
    }
</script>

<style>

</style>
