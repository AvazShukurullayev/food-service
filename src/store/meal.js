const meal = {
  state: {
    total: 0,
    sum: 0,
    mealArray: [],
    mealList: [
      {
        img: "dish-1.png",
        title: "Spicy seasoned seafood noodles",
        price: 2.29,
        id: 1,
        comment: "",
        count: 1,
        sum: 0,
        discount: 0,
        isShown: false,
      },
      {
        img: "dish-2.png",
        title: "Salted Pasta with mushroom sauce",
        price: 2.69,
        id: 2,
        comment: "",
        count: 1,
        sum: 0,
        discount: 0,
        isShown: false,
      },
      {
        img: "dish-3.png",
        title: "Beef dumpling in hot and sour soup",
        price: 2.99,
        id: 3,
        comment: "",
        count: 1,
        sum: 0,
        discount: 0,
        isShown: false,
      },
      {
        img: "dish-4.png",
        title: "Healthy noodle with spinach leaf",
        price: 3.29,
        id: 4,
        comment: "",
        count: 1,
        sum: 0,
        discount: 0,
        isShown: false,
      },
      {
        img: "dish-5.png",
        title: "Hot spicy fried rice with omelet",
        price: 3.49,
        id: 5,
        comment: "",
        count: 1,
        sum: 0,
        discount: 0,
        isShown: false,
      },
      {
        img: "dish-3.png",
        title: "Spicy instant noodle with special omelette",
        price: 3.59,
        id: 6,
        comment: "",
        count: 1,
        sum: 0,
        discount: 0,
        isShown: false,
      },
    ],
  },
  getters: {
    getMealArray(state) {
      return state.mealArray;
    },
    getTotal(state) {
      state.sum = Number(state.sum.toFixed(2));
      state.total = state.sum;
      return state.total;
    },
  },
  mutations: {
    // mutations
    setClickedCard(state, data) {
      const meal = state.mealList.find((item) => item.id == data);
      const isSame = state.mealArray.includes(meal);
      if (state.mealArray.length == 0) {
        state.mealArray.push(meal);
        state.mealArray.forEach((element) => (state.sum += element.price));
      } else if (!isSame) {
        state.mealArray.push(meal);
        state.mealArray.forEach((element) => (state.sum += element.price));
      } else {
        const index = state.mealArray.findIndex(
          (element) => element.id == meal.id
        );
        state.mealArray[index].count++;
        state.mealArray.forEach((element) => (state.sum += element.price));
      }
    },
  },
  actions: {
    // actions
    clickedCardAct({ commit }, payload) {
      commit("setClickedCard", payload);
    },
  },
};

export default meal;
