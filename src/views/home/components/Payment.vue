<template>
  <div class="payment">
    <div class="payment__header">
      <VHeadingTwo class="paymetn__title">Payment</VHeadingTwo>
      <VParag class="payment__subtitle">3 payment method available</VParag>
    </div>
    <!-- v-model ishlami qoldi paymentSystem da  -->
    <div class="payment__method">
      <VHeadingThree class="payment__method-title"
        >Payment Method: {{ paymentSystem }}</VHeadingThree
      >
      <div class="payment__cards">
        <template v-for="(item, index) in paymentList">
          <VInput
            type="radio"
            class="payment__input"
            name="payment"
            v-model="paymentSystem"
            :id="'check' + index"
            :value="item.value"
          />
          <VLabel :for="'check' + index" class="payment__label">
            <img :src="require('@/assets/images/svg/' + item?.icon)" alt="" />
            <VParag>{{ item.label }}</VParag>
          </VLabel>
        </template>
      </div>

      <div class="payment__part" v-for="(item, index) in registerList">
        <VLabel :for="'reg' + index" class="payment__name">{{
          item.label
        }}</VLabel>
        <VInput
          :type="item.type"
          :id="'reg' + index"
          class="payment__part-input"
          :placeholder="item.titleInput"
        />
      </div>

      <div class="d-flex d-flex justify-content-between">
        <div class="payment__part" v-for="(item, index) in dateList">
          <VLabel :for="'payment' + index" class="payment__name">{{
            item.title
          }}</VLabel>
          <VInput
            :type="item.type"
            :id="'payment' + index"
            class="payment__part-input"
            :placeholder="item.placeholder"
          />
        </div>
      </div>
      <!-- <hr /> -->
      <!-- line ni togirlash kerak -->
      <div class="payment__line"></div>

      <div class="d-flex justify-content-between">
        <div class="payment__part">
          <VLabel for="pay__name" class="payment__name">Order type</VLabel>
          <select name="" id="" class="payment__part-select">
            <option value="">dine in</option>
            <option value="">to go</option>
            <option value="">delivery</option>
          </select>
        </div>
        <div class="payment__part">
          <VLabel for="pay__name" class="payment__name">Table №</VLabel>
          <VInput
            id="pay__name"
            class="payment__part-input"
            placeholder="140"
          />
        </div>
      </div>
    </div>

    <div class="payment__btns">
      <VButton class="payment__cancel" @click="$emit('moveToRightSide')"
        >Cancel</VButton
      >
      <VButton class="payment__confirm" @click="$emit('confirmButton')"
        >Confirm payment</VButton
      >
    </div>
  </div>
</template>

<script>
import VInput from "@/components/Vinput/VInput.vue";
import VButton from "@/components/Vbutton/VButton.vue";
import VHeadingTwo from "@/components/Vheadings/VHeadingTwo.vue";
import VHeadingThree from "@/components/Vheadings/VHeadingThree.vue";
import VParag from "@/components/Vparag/VParag.vue";
import VLabel from "@/components/Vlabel/VLabel.vue";
export default {
  name: "Payment",
  props: [],
  components: { VInput, VButton, VHeadingTwo, VHeadingThree, VParag, VLabel },
  data() {
    return {
      paymentSystem: "",
      paymentList: [
        { label: "Credit card", value: "creditcard", icon: "credit-card.svg" },
        { label: "Paypal", value: "paypalcard", icon: "paypal-card.svg" },
        { label: "Cash", value: "cash", icon: "cash.svg" },
      ],
      registerList: [
        { type: "text", label: "Cardholder Name", titleInput: "Levi Ackerman" },
        {
          type: "password",
          label: "Card Number",
          titleInput: "2564 1421 0897 1244",
        },
      ],
      dateList: [
        { title: "Expiration Date", type: "date", placeholder: "02/2022" },
        { title: "CVV", type: "password", placeholder: "****" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.payment {
  width: 405px;
  padding: 20px 23px 24px 24px;
  min-height: 100vh;
  background: #1f1d2b;
  // border-radius: 16px 16px 0px 16px;
  border-radius: 8px;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  .payment__header {
    border-bottom: 1px solid #393c49;
    margin-bottom: 24px;
    .paymetn__title {
      font-family: "Barlow-SemiBold";
      font-size: 28px;
      line-height: 140%;
      color: #fff;
      margin-bottom: 8px;
    }
    .payment__subtitle {
      font-family: "Barlow-Medium";
      font-size: 16px;
      line-height: 140%;
      color: #abbbc2;
      margin-bottom: 24px;
    }
  }
  .payment__method {
    .payment__method-title {
      font-family: "Barlow-SemiBold";
      font-size: 20px;
      line-height: 140%;
      color: #fff;
      margin-bottom: 16px;
    }
    .payment__cards {
      display: flex;
      gap: 8px;
      .payment__label {
        max-width: 101px;
        width: 100%;
        text-align: center;
        padding: 15px 0 10px;
        background: #252836;
        border: 1px solid #abbbc2;
        border-radius: 8px;
        position: relative;
        p {
          font-family: "Barlow-Medium";
          font-size: 14px;
          line-height: 130%;
          color: #fff;
          margin-top: 2px;
        }
      }
      .payment__input {
        position: absolute;
        top: 6px;
        right: 6px;
        opacity: 0;
      }
      .payment__input[type="radio"]:checked + .payment__label {
        background: red;
      }
    }
  }
  .payment__btns {
    margin-top: 90px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .payment__cancel,
  .payment__confirm {
    display: inline-block;
    max-width: 175px;
    width: 100%;
    border: 1px solid #ea7c69;
    border-radius: 8px;
    padding: 14px 0;
    text-align: center;
    font-family: "Barlow-SemiBold";
    font-size: 14px;
    line-height: 140%;
    color: #ea7c69;
    background-color: transparent;
    transition: all 0.2s linear;
  }
  .payment__confirm {
    background: #ea7c69;
    color: #fafafa;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
  }
  .payment__cancel:hover {
    color: #ea7c69;
    background-color: transparent;
  }
  .payment__confirm:hover {
    color: #fafafa;
    background-color: #ea7c69;
  }
  .payment__part {
    margin-top: 16px;
    .payment__name {
      font-family: "Barlow-Medium";
      font-size: 14px;
      line-height: 130%;
      color: #fff;
      margin-bottom: 8px;
    }
    .payment__part-input {
      display: block;
      width: 100%;
      outline: none;
      background: #2d303e;
      border: 1px solid #393c49;
      border-radius: 8px;
      font-size: 14px;
      line-height: 140%;
      color: #e0e6e9;
      padding: 14px;
    }
  }
  .payment__line {
    margin-top: 16px;
    border-bottom: 1px solid #393c49;
  }
  .payment__part-select {
    display: block;
    padding: 14px;
    background: #2d303e;
    border: 1px solid #393c49;
    border-radius: 8px;
    font-size: 14px;
    line-height: 140%;
    color: #e0e6e9;
  }
}
</style>
