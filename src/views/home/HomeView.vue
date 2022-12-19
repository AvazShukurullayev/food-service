<template>
  <div class="home">
    <div class="main-side">
      <header class="main-side__header">
        <div>
          <VHeadingOne class="main-side__title">{{
            getCustomer.fullName
          }}</VHeadingOne>
          <VParag class="main-side__date">
            {{ days[new Date().getUTCDay()] }}, {{ new Date().getDate() }}
            {{ months[new Date().getMonth()] }}
            {{ new Date().getFullYear() }}y {{ currentTime }}
          </VParag>
        </div>
        <VInput
          class="main-side__input"
          placeholder="Search for food, coffee, etc.."
          v-model="inputWord"
        />
      </header>
      <!--? VLi component qo'shish kerak oldin check -->
      <ul class="menu-filter">
        <VLi
          v-for="(item, index) in getMenuList"
          class="menu-item"
          :class="{ selected: item.selected }"
          @click="actionSelectedItem(index)"
        >
          {{ item.name }}
        </VLi>
      </ul>
      <div class="dishes">
        <VHeadingTwo class="dishes__title">Choose Dishes</VHeadingTwo>
        <VSelect
          class="dishes__select"
          @selectArray="getOptionalMenu"
        ></VSelect>
      </div>

      <div class="dishes__cards">
        <DishesCard
          v-for="(item, index) in getDishesList"
          :item="item"
          :index="index"
        />
      </div>
    </div>
    <RightSide
      v-if="isShown"
      :mealArray="getMealArray"
      @removeItem="removeItem"
      @moveToPayment="moveToPayment"
    ></RightSide>
    <Payment v-if="!isShown" @moveToRightSide="moveToRightSide"></Payment>
  </div>
</template>

<script>
import RightSide from "./components/RightSide.vue";
import MenuItem from "./components/menu-item/MenuItem.vue";
import DishesOptional from "./components/dishes-optional/DishesOptional.vue";
import DishesCard from "./components/dishes-cards/DishesCard.vue";
import Payment from "./components/Payment.vue";
import VInput from "@/components/Vinput/VInput.vue";
import VHeadingOne from "@/components/Vheadings/VHeadingOne.vue";
import VHeadingTwo from "@/components/Vheadings/VHeadingTwo.vue";
import VParag from "@/components/Vparag/VParag.vue";
import VSelect from "@/components/Vselect/VSelect.vue";
import VLi from "@/components/Vli/VLi.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    RightSide,
    MenuItem,
    DishesOptional,
    DishesCard,
    Payment,
    VInput,
    VHeadingOne,
    VHeadingTwo,
    VParag,
    VSelect,
    VLi,
  },
  data() {
    return {
      isShown: true,
      inputWord: "",
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
    };
  },
  watch: {
    inputWord(newItem, oldItem) {
      console.log(newItem);
      console.log(oldItem);
      this.getDishesList.forEach((element) => {
        if (element.title.toLowerCase().includes(newItem.toLowerCase())) {
          element.isShown = true;
        } else {
          element.isShown = false;
        }
      });
    },
  },
  created() {
    setInterval(this.getCurrentTime, 1000);
  },
  computed: {
    ...mapGetters([
      "getCustomer",
      "getMenuList",
      "getOptionalMenu",
      "getDishesList",
      "getMealArray",
    ]),
  },
  methods: {
    ...mapActions(["actionSelectedItem"]),
    getCurrentTime() {
      const today = new Date();
      return (this.currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    },
    selectOption(index) {
      this.dishesList.forEach((element) => {
        if (
          element.orderDish == this.optionalMenu[index.target.value].orderDish
        ) {
          element.isShown = true;
        } else {
          element.isShown = false;
        }
      });
    },
    removeItem(par) {
      console.log("parametr", par);
      const index = this.mealArray.findIndex((item) => item.id == par);
      this.mealArray.splice(index, 1);
      console.log("result", index);
    },
    moveToPayment() {
      this.isShown = !this.isShown;
    },
    moveToRightSide() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped lang="scss">
.main-side {
  padding: 24px 433px 24px 128px;
  .main-side__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .main-side__title {
      font-family: "Barlow-SemiBold";
      font-size: 28px;
      line-height: 140%;
      color: #fff;
      margin-bottom: 4px;
    }
    .main-side__date {
      font-family: "Barlow";
      font-size: 16px;
      line-height: 140%;
      color: #e0e6e9;
    }
    .main-side__input {
      display: inline-block;
      width: 220px;
      padding: 14px;
      background-color: #2d303e;
      background: url("@/assets/images/search/search.png") no-repeat center /
        cover;
      background-size: 25px;
      border: 1px solid #393c49;
      border-radius: 8px;
      font-size: 14px;
      line-height: 140%;
      color: #abbbc2;
    }
  }
  .menu-filter {
    display: flex;
    align-items: center;
    column-gap: 32px;
    row-gap: 58px;
    border-bottom: 1px solid #393c49;
    overflow-y: auto;
    .menu-item {
      font-family: "Barlow-SemiBold";
      font-size: 14px;
      line-height: 140%;
      color: #fff;
      cursor: pointer;
      padding-bottom: 14px;
      &.selected {
        color: #ea7c69;
        border-radius: 2px;
        border-bottom: 3px solid #ea7c69;
      }
    }
  }
  .dishes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    .dishes__title {
      font-family: "Barlow-SemiBold";
      font-size: 20px;
      line-height: 140%;
      color: #fff;
    }
  }
  .dishes__cards {
    margin-top: 58px;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
  }
}
</style>
