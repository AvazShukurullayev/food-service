const home = {
  state: {
    menuList: [
      { name: "All Dishes", selected: true, category: "all-dishes", id: 1 },
      { name: "Hot Dishes", selected: false, category: "hot-dishes", id: 2 },
      { name: "Cold Dishes", selected: false, category: "cold-dishes", id: 3 },
      { name: "Soup", selected: false, category: "soup", id: 4 },
      { name: "Grill", selected: false, category: "grill", id: 5 },
      { name: "Appetizer", selected: false, category: "appetizer", id: 6 },
      { name: "Dessert", selected: false, category: "dessert", id: 7 },
    ],
    optionalMenu: [
      { name: "Delivery", orderDish: "delivery" },
      { name: "Dine in", orderDish: "dineIn" },
      { name: "To go", orderDish: "toGo" },
    ],
    dishesList: [
      {
        img: "dish-1.png",
        title: "Spicy seasoned seafood noodles",
        price: 2.29,
        quantity: 5,
        maxLimit: 5,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: false,
        },
        id: 1,
      },
      {
        img: "dish-2.png",
        title: "Salted Pasta with mushroom sauce",
        price: 2.69,
        quantity: 23,
        maxLimit: 23,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: true,
          toGo: true,
        },
        id: 2,
      },
      {
        img: "dish-3.png",
        title: "Beef dumpling in hot and sour soup",
        price: 2.99,
        quantity: 11,
        maxLimit: 11,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: false,
        },
        id: 3,
      },
      {
        img: "dish-4.png",
        title: "Healthy noodle with spinach leaf",
        price: 3.29,
        quantity: 24,
        maxLimit: 24,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 4,
      },
      {
        img: "dish-5.png",
        title: "Hot spicy fried rice with omelet",
        price: 3.49,
        quantity: 19,
        maxLimit: 19,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: true,
        },
        id: 5,
      },
      {
        img: "dish-6.png",
        title: "Duck Five Ways, Berlu",
        price: 4.59,
        quantity: 11,
        maxLimit: 11,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: true,
          toGo: false,
        },
        id: 6,
      },
      {
        img: "dish-7.png",
        title: "Lingonberry Almond Cake, Lost Larson",
        price: 1.29,
        quantity: 25,
        maxLimit: 25,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: true,
          toGo: true,
        },
        id: 7,
      },
      {
        img: "dish-8.png",
        title: "Arancini, Vespertine",
        price: 3.49,
        quantity: 14,
        maxLimit: 14,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 8,
      },
      {
        img: "dish-9.png",
        title: "Blue Crab Meatballs and Spaghetti, Maialino Mare",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 9,
      },
      {
        img: "dish-10.png",
        title: "Brisket Tostadas, Loro",
        price: 2.29,
        quantity: 29,
        maxLimit: 29,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: false,
        },
        id: 10,
      },
      {
        img: "dish-11.png",
        title: "Grilled Chicken, Laser Wolf",
        price: 2.69,
        quantity: 11,
        maxLimit: 11,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: true,
        },
        id: 11,
      },
      {
        img: "dish-12.png",
        title: "Gluten Free Chocolate Cake, Jinju Patisserie",
        price: 2.99,
        quantity: 16,
        maxLimit: 16,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 12,
      },
      {
        img: "dish-13.png",
        title: "The Original Butcher???s Feast, Cote",
        price: 3.29,
        quantity: 22,
        maxLimit: 22,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: false,
          toGo: true,
        },
        id: 13,
      },
      {
        img: "dish-14.png",
        title: "Grilled Dorade, Vernick Fish",
        price: 3.49,
        quantity: 13,
        maxLimit: 13,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: false,
        },
        id: 14,
      },
      {
        img: "dish-15.png",
        title: "Everything They Serve, Hestia",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 15,
      },
      {
        img: "dish-16.png",
        title: "Lamb Curry, Eem",
        price: 3.29,
        quantity: 22,
        maxLimit: 22,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: false,
        },
        id: 16,
      },
      {
        img: "dish-17.png",
        title: "Lobster Bao, Essex Pearl",
        price: 3.49,
        quantity: 13,
        maxLimit: 13,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: false,
        },
        id: 17,
      },
      {
        img: "dish-18.png",
        title: "Manti Dumplings, Albi",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: true,
        },
        id: 18,
      },
      {
        img: "dish-19.png",
        title: "Lobster Bolognese with Truffle Sauce, Melisse",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: true,
          toGo: true,
        },
        id: 19,
      },
      {
        img: "dish-20.png",
        title: "Mentaiko Carbonara, Kaisho at Yugen",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 20,
      },
      {
        img: "dish-21.png",
        title: "Kaiseki Jubako, n/naka",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: false,
        },
        id: 21,
      },
      {
        img: "dish-22.png",
        title: "Pan Roasted Brioche, Auburn",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: false,
          toGo: true,
        },
        id: 22,
      },
      {
        img: "dish-23.png",
        title: "Sweet Potato and Pecan Taco, Nixta",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: true,
        },
        id: 23,
      },
      {
        img: "dish-24.png",
        title: "Pheasant, Wherewithall",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 24,
      },
      {
        img: "dish-25.png",
        title: "Pike Quenelle, Grand Caf??",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: false,
        },
        id: 25,
      },
      {
        img: "dish-26.png",
        title: "Rice Krispies Treats, Demi",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: true,
          toGo: true,
        },
        id: 26,
      },
      {
        img: "dish-27.png",
        title: "Spicy Sea Bass Temaki, Nami Nori",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: {
          delivery: false,
          dineIn: true,
          toGo: false,
        },
        id: 27,
      },
      {
        img: "dish-28.png",
        title: "Sunchoke Flatbread, Rustic Canyon",
        price: 3.59,
        quantity: 18,
        maxLimit: 18,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: false,
        },
        id: 28,
      },
      {
        img: "dish-29.png",
        title: "Pork Trotter Tonkotsu, Emilie???s",
        price: 3.59,
        quantity: 17,
        maxLimit: 17,
        counter: 1,
        discount: 0,
        sum: 0,
        comment: "",
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: {
          delivery: true,
          dineIn: false,
          toGo: true,
        },
        id: 29,
      },
    ],
  },
  getters: {
    getMenuList(state) {
      return state.menuList;
    },
    getOptionalMenu(state) {
      return state.optionalMenu;
    },
    getDishesList(state) {
      return state.dishesList;
    },
  },
  mutations: {},
  actions: {},
};

export default home;
