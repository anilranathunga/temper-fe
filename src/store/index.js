import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import graph from "./modules/graph";

export default new Vuex.Store({
  modules: {
    graph
  }
})
