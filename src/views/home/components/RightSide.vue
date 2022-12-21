<template>
  <div class="rightSide">
    <div class="rightSide__header">
      <VHeadingTwo class="rightSide__title"
        >Orders #{{ orderNumber }}</VHeadingTwo
      >
      <div class="rightSide__services">
        <!--? radio type value beradi  -->
        <template v-for="(item, index) in serviceList">
          <VInput
            type="radio"
            :id="'check' + index"
            class="rightSide__input"
            name="service"
            v-model="serviceValue"
            :value="item.service"
          />
          <VLabel :for="'check' + index" class="rightSide__label">{{
            item.title
          }}</VLabel>
        </template>
      </div>
      <div class="rightSide__info">
        <VParag class="rightSide__info-text">Item</VParag>
        <div>
          <VParag class="rightSide__info-text">Qty</VParag>
          <VParag class="rightSide__info-text">Price</VParag>
        </div>
      </div>
    </div>
    <div class="rightSide__meals">
      <Meal
        v-for="(item, index) in mealArray"
        :item="item"
        :index="index"
        @removeMeal="removeMeal"
        :mealArray="mealArray"
      />
    </div>
    <div class="rightSide__footer">
      <div>
        <!-- ? v-for qilish kere -->
        <div class="rightSide__footer-card d-flex">
          <VParag class="rightSide__footer-discount">Discount</VParag>
          <VParag class="rightSide__footer-price">$ {{ discount }}</VParag>
        </div>
        <div class="rightSide__footer-card d-flex">
          <VParag class="rightSide__footer-discount">Service</VParag>
          <VParag class="rightSide__footer-price">% {{ service }}</VParag>
        </div>
        <div class="rightSide__footer-card d-flex">
          <VParag class="rightSide__footer-discount">Sub total</VParag>
          <VParag class="rightSide__footer-price">$ getTotal</VParag>
        </div>
      </div>
      <div class="mt-2">
        <VButton @click="$emit('moveToPayment')" class="payment_btn"
          >Continue to Payment</VButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import Meal from "./meal/Meal.vue";
import VInput from "@/components/Vinput/VInput.vue";
import VButton from "@/components/Vbutton/VButton.vue";
import VHeadingTwo from "@/components/Vheadings/VHeadingTwo.vue";
import VParag from "@/components/Vparag/VParag.vue";
import VLabel from "@/components/Vlabel/VLabel.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "RightSide",
  props: ["mealArray"],
  components: { VInput, Meal, VButton, VHeadingTwo, VParag, VLabel },
  data() {
    return {
      orderNumber: 34562,
      mealSum: 100,
      service: 0,
      discount: 0,
      serviceValue: null,
      serviceList: [
        { title: "Dine In", service: 10, icon: "" },
        { title: "To Go", service: 15, icon: "" },
        { title: "Delivery", service: 20, icon: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getTotal"]),
  },
  methods: {
    ...mapActions([]),
    addDiscount() {
      let sumDis = 0;
      this.mealArray.forEach((element) => {
        sumDis += element.discount;
      });
      return sumDis;
    },
    addSum() {
      let sumPrice = 0;
      this.mealArray.forEach((element) => {
        sumPrice += element.sum;
      });
      return sumPrice;
    },
    clickedDiscount(par) {
      console.log("parametr: " + par);
      this.service = par;
      return par;
    },
    removeMeal(par) {
      this.$emit("removeItem", par);
    },
    changedMeal() {
      console.log("changedMeal", changedMeal);
      this.total =
        this.addSum() +
        this.addSum() * (this.clickedDiscount() / 100) -
        this.addDiscount();
      console.log("this.total: " + this.total);
    },
  },
};
</script>

<style scoped lang="scss">
.rightSide {
  width: 409px;
  padding: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1f1d2b;
  border-radius: 8px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  &__header {
    border-bottom: 1px solid #393c49;
    .rightSide__title {
      font-family: "Barlow-SemiBold";
      font-size: 20px;
      line-height: 140%;
      color: #fff;
      margin-bottom: 24px;
    }
    .rightSide__services {
      margin-bottom: 24px;
    }
    .rightSide__filter {
      display: flex;
      column-gap: 8px;
      margin-bottom: 24px;
    }
    .rightSide__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      & > div {
        display: flex;
        column-gap: 43px;
      }
      .rightSide__info-text {
        font-family: "Barlow-SemiBold";
        font-size: 16px;
        line-height: 140%;
        color: #fff;
        margin: 0;
      }
    }
  }
  .rightSide__meals {
    scroll-behavior: auto;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: rgb(232, 14, 14);
  }
  .rightSide__footer {
    border-top: 1px solid #393c49;
    padding-top: 24px;
    &-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rightSide__footer-discount {
        font-size: 14px;
        line-height: 140%;
        color: #abbbc2;
      }
      .rightSide__footer-price {
        font-family: "Barlow-Medium";
        font-size: 16px;
        line-height: 140%;
        color: #ffffff;
      }
    }
  }
}
.rightSide__input {
  position: absolute;
  opacity: 0;
  // display: none;
}
.rightSide__label {
  padding: 7px 12px;
  // background: transparent;
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-family: "Barlow-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #fff;
  margin-right: 8px;
  cursor: pointer;
}
.rightSide__input[type="radio"]:checked + label {
  background: #ea7c69;
}
</style>
