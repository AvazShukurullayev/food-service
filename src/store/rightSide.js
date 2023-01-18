const rightSide = {
  state: {
    total: 0,
    rate: 11000,
    mealArray: [],
  },
  getters: {
    getMealArray(state) {
      return state.mealArray;
    },
  },
  mutations: {
    setClickedCard(state, data) {
      state.mealArray.push(data);
    },
    setRemovedElement(state, data) {
      state.mealArray = data;
    },
  },
  actions: {
    actionClickedCard({ commit }, payload) {
      console.log("actionClickedCard payload => ", payload);
      commit("setClickedCard", payload);
    },
    actionRemovedElement({ commit }, payload) {
      console.log("actionRemovedElement => ", payload);
      commit("setRemovedElement", payload);
    },
  },
};

export default rightSide;
