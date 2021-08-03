import Vue from 'vue';
import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:8081/api/';
Axios.defaults.headers.common.Accept = 'application/json';

Vue.prototype.$axios = Axios;
Vue.$axios = Axios;