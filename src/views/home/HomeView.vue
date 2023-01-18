<template>
  <div class="home">
    <div class="mainSide">
      <!-- ✅ -->
      <header class="mainSide__header">
        <div>
          <VHeadingOne class="mainSide__title">
            {{ customerName }}
          </VHeadingOne>
          <VParag class="mainSide__date">
            {{ days[new Date().getUTCDay()] }}, {{ new Date().getDate() }}
            {{ months[new Date().getMonth()] }}
            {{ new Date().getFullYear() }}y {{ currentTime }}
          </VParag>
        </div>
        <VInput
          class="mainSide__input form-control"
          placeholder="Search for food, coffee, etc.."
          v-model="inputWord"
        />
      </header>
      <!-- ✅ -->

      <!-- ✅ -->
      <VList class="menuSide__filter">
        <li
          v-for="item in getMenuList"
          class="menuSide__item"
          :class="{ selected: item.selected }"
          @click="selectCategory(item.category)"
        >
          {{ item.name }}
        </li>
      </VList>
      <!-- ✅ -->

      <!-- ✅ -->
      <div class="dishes">
        <VHeadingTwo class="dishes__title">Choose Dishes</VHeadingTwo>
        <VSelect
          class="dishes__select"
          :selectArray="getOptionalMenu"
          @change="selectedOption"
        />
      </div>
      <!-- ✅ -->

      <!-- ✅ -->
      <div class="dishes__cards">
        <DishesCard
          v-for="(item, index) in tempArray"
          :item="item"
          :index="index"
          @clickedCard="clickedCard"
        />
      </div>
    </div>
    <!-- ✅ -->
    <!--? rightside ga meal array bervomman va remove button va move to payment -->
    <RightSide
      v-if="isShown"
      :mealArray="getMealArray"
      @removeItem="removeItem"
      @moveToPayment="isShown = !isShown"
    />
    <Payment v-if="!isShown" @moveToRightSide="isShown = !isShown" />
  </div>
</template>

<script>
import RightSide from "./components/RightSide.vue";
import DishesCard from "./components/dishes-cards/DishesCard.vue";
import Payment from "./components/Payment.vue";
import VInput from "@/components/Vinput/VInput.vue";
import VHeadingOne from "@/components/Vheadings/VHeadingOne.vue";
import VHeadingTwo from "@/components/Vheadings/VHeadingTwo.vue";
import VParag from "@/components/Vparag/VParag.vue";
import VSelect from "@/components/Vselect/VSelect.vue";
import VList from "@/components/Vlist/VList.vue";
import VItem from "@/components/Vitem/VItem.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    RightSide,
    DishesCard,
    Payment,
    VInput,
    VHeadingOne,
    VHeadingTwo,
    VParag,
    VSelect,
    VList,
    VItem,
  },
  data() {
    return {
      isShown: true,
      inputWord: "",
      currentTime: "",
      customerName: "Jonathan Mckinney",
      tempArray: [],
      tempArrayParams: [],
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
  // ✅
  watch: {
    inputWord(newItem, oldItem) {
      this.getSelectedDishesList.forEach((element) => {
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
      "getMenuList",
      "getOptionalMenu",
      "getDishesList",
      "getMealArray",
    ]),
  },
  mounted() {
    this.tempArray = this.getDishesList.map((element) => element);
  },
  methods: {
    ...mapActions(["actionClickedCard", "actionRemovedElement"]),
    // ✅
    getCurrentTime() {
      const today = new Date();
      return (this.currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    },
    // ✅
    selectCategory(param) {
      if (param == "all-dishes") {
        this.tempArray = this.getDishesList.map((item) => item);
        this.getMenuList.forEach((item) => (item.selected = false));
        this.getMenuList[0].selected = true;
      } else {
        this.tempArray = this.getDishesList.filter(
          (item) => item.category === param
        );
        this.getMenuList.forEach((item) => {
          if (item.category === param) item.selected = true;
          else item.selected = false;
        });
      }
    },
    // ✅
    selectedOption(par) {
      if (par === "all") {
        this.tempArray = this.getDishesList.map((element) => element);
      } else {
        this.tempArray = this.getDishesList.filter(
          (element) => element.orderDish[par]
        );
      }
    },
    // ✅
    clickedCard(par) {
      const checkElement = this.getMealArray.includes(par);
      if (!checkElement) {
        if (par.quantity > 0) {
          this.actionClickedCard(par);
          const newObj = {
            id: par.id,
            quantity: par.quantity,
          };
          this.tempArrayParams.push(newObj);
          par.quantity--;
        }
      } else if (checkElement) {
        if (par.quantity > 0) {
          par.quantity--;
          par.counter++;
        }
      }
    },
    // input niyam disabled qilish kerak
    // ✅
    removeItem(id) {
      const removedElMealArray = this.getMealArray.filter(
        (item) => item.id !== id
      );
      this.actionRemovedElement(removedElMealArray);
      let quantityNumber;
      this.tempArrayParams.forEach((item) => {
        if (item.id === id) quantityNumber = item.quantity;
      });
      console.log("quantity number => ", quantityNumber);
      this.tempArray = this.tempArray.map((item) => {
        if (item.id === id) {
          item.quantity = quantityNumber;
        }
        return item;
      });
    },
    // ✅
  },
};
</script>

<style scoped lang="scss">
.mainSide {
  padding: 24px 433px 24px 128px;
  .mainSide__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .mainSide__title {
      font-family: "Barlow-SemiBold";
      font-size: 28px;
      line-height: 140%;
      color: #fff;
      margin-bottom: 4px;
    }
    .mainSide__date {
      font-family: "Barlow";
      font-size: 16px;
      line-height: 140%;
      color: #e0e6e9;
    }
    .mainSide__input {
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
  .menuSide__filter {
    display: flex;
    align-items: center;
    column-gap: 32px;
    row-gap: 58px;
    border-bottom: 1px solid #393c49;
    overflow-y: auto;
    .menuSide__item {
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
    &__title {
      font-family: "Barlow-SemiBold";
      font-size: 20px;
      line-height: 140%;
      color: #fff;
    }
    &__select {
      background: #1f1d2b;
      border: 1px solid #393c49;
      border-radius: 8px;
      font-family: "Barlow-Medium";
      font-size: 14px;
      line-height: 130%;
      color: #fff;
      padding: 15px 14px;
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
