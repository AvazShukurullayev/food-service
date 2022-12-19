const date = {
  state: {
    currentTime: "",
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  getters: {
    getCurrentTime(state) {
      const today = new Date();
      return (state.currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    },
    getDay(state) {
      return state.days;
    },
    getMonth(state) {
      return state.months;
    },
  },
  mutations: {},
  actions: {},
};

export default date;
