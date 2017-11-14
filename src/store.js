import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );

export const store = new Vuex.Store ( {
    state: {
        count: {
            value: 9000,
            amount: 7
        }
    },

    getters: {
        value ( state ) {
            return state.count.value;
        },

        amount ( state ) {
            return state.count.amount;
        }
    },

    mutations: {
        //Vuex auto variables history (a bit like GitHub) => mutations roughly equals commits of GitHub
        // /!\--- Do not do async. operation in mutations, as it WILL mess up your vuex history
        countValueIncrement ( state ) {
            state.count.value += state.count.amount;
        },

        countValueDecrement ( state ) {
            state.count.value -= state.count.amount;
        },
        amountUpdate ( state, payload ) {
            state.count.amount = parseInt( payload );
        }
    },

    actions: {
        //Do async operations here, not in mutations. Variables history will be async'ed as well
        countValueIncrement ( context ) {
            setTimeout( () => {
                context.commit( 'countValueIncrement' );
            }, 2000 );
        }
    }
} )
