import Vue from 'vue';
import Axios from "axios";

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
Axios.defaults.headers.common.Accept = 'application/json';

Vue.prototype.$axios = Axios;
Vue.$axios = Axios;