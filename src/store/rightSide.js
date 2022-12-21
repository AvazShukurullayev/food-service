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
  },
  actions: {
    actionClickedCard({ commit }, payload) {
      console.log("actionClickedCard payload => ", payload);
      commit("setClickedCard", payload);
    },
  },
};

export default rightSide;