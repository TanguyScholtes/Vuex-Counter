import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use( Vuex )

export const bus = new Vue()

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
