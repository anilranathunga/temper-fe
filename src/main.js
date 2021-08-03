import Vue from 'vue'
import App from './App.vue'
import store from './store'
import  axios from 'axios';

import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue)

import '@/plugins/axios';

Vue.$axios = axios;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
