import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);
import login from "./login";
import path from "./path";
import good from "./good";

const store = new Vuex.Store({
  modules: {
    login,
    path,
    good
  }
});

export default store;