import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import home from "./home";
import rightSide from "./rightSide";

export default new Vuex.Store({
  modules: {
    home,
    rightSide,
  },
});
