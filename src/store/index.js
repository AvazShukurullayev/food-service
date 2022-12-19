import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import meal from "./meal";
import card from "./card";
import home from "./home";

export default new Vuex.Store({
  modules: {
    meal,
    card,
    home,
  },
});
