<template>
  <div class="rightSide">
    <div class="rightSide__header">
      <VHeadingTwo class="rightSide__title">
        Orders #{{ orderNumber }}
      </VHeadingTwo>
      <div class="rightSide__services">
        <VParag class="rightSide__serviceType">
          Service type: {{ serviceValue }}
        </VParag>
        <template v-for="(item, index) in serviceList">
          <input
            type="radio"
            :id="'check' + index"
            class="rightSide__input"
            name="service"
            :value="item.title"
            v-model="serviceValue"
          />
          <VLabel :for="'check' + index" class="rightSide__label">
            {{ item.title }}
          </VLabel>
        </template>
      </div>

      <div class="rightSide__info">
        <VParag class="rightSide__info-text">Item</VParag>
        <!-- <button @click="changeCurrency" class="btn btn-outline-secondary">Change currency: {{  }}</button> -->
        <div>
          <VParag class="rightSide__info-text">Qty</VParag>
          <VParag class="rightSide__info-text">Price</VParag>
        </div>
      </div>
    </div>

    <div class="rightSide__meals">
      <Meal
        v-for="(item, index) in getMealArray"
        :item="item"
        :index="index"
        @removeMeal="$emit('removeItem', $event)"
      />
    </div>

    <div class="rightSide__footer">
      <div>
        <div class="rightSide__footer-card d-flex">
          <VParag class="rightSide__footer-title">Discount</VParag>
          <VParag class="rightSide__footer-price">$ {{ discount }}</VParag>
        </div>
        <div class="rightSide__footer-card d-flex">
          <VParag class="rightSide__footer-title">Service</VParag>
          <VParag class="rightSide__footer-price">$ {{ service }}</VParag>
        </div>
        <div class="rightSide__footer-card d-flex">
          <VParag class="rightSide__footer-title">Sub total</VParag>
          <VParag class="rightSide__footer-price">$ {{ total() }}</VParag>
        </div>
      </div>
      <div class="mt-2">
        <VButton @click="$emit('moveToPayment')" class="payment_btn">
          Continue to Payment
        </VButton>
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

import { mapGetters } from "vuex";
export default {
  name: "RightSide",
  components: { VInput, Meal, VButton, VHeadingTwo, VParag, VLabel },
  data() {
    return {
      orderNumber: 34562,
      mealSum: 0,
      service: 0,
      discount: 0,
      totalSum: 0,
      serviceValue: "",
      serviceList: [
        { title: "Dine In", service: 10, icon: "" },
        { title: "To Go", service: 15, icon: "" },
        { title: "Delivery", service: 20, icon: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getMealArray"]),
  },
  updated() {
    // this.total();
  },
  methods: {
    total() {
      this.getMealArray.forEach((element) => (this.mealSum += element.sum));
      return Number(this.mealSum.toFixed(2));
    },
  },
};
</script>

<style scoped lang="scss">
.rightSide {
  width: 409px;
  padding: 12px 12px 12px 24px;
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
    }
    .rightSide__services {
      margin-bottom: 24px;
    }
    .rightSide__serviceType {
      color: #fff;
      margin: 0.5rem 0;
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
      padding-bottom: 10px;
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
    padding-top: 10px;
    &-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rightSide__footer-title {
        font-size: 14px;
        line-height: 140%;
        color: #fff;
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
