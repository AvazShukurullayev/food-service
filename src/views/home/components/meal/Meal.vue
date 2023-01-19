<template>
  <div class="meal">
    <div class="meal__left">
      <div class="meal__left-top d-flex">
        <div class="d-flex">
          <img
            class="meal__left-img"
            :src="require('@/assets/images/dishes/' + item?.img)"
            alt="meal img"
          />
          <div>
            <VParag class="meal__left-text">{{ item.title }}</VParag>
            <VParag class="meal__left-price">$ {{ item.price }}</VParag>
          </div>
        </div>
        <input
          type="number"
          class="meal__left-counter"
          min="1"
          :max="item.maxLimit"
          v-model.number="item.counter"
        />
      </div>
      <div class="meal__left-bottom">
        <input
          type="text"
          class="meal__left-comment"
          v-model="item.comment"
          placeholder="Please, write comments"
        />
      </div>
    </div>
    <div class="meal__right">
      <VParag class="meal__right-sum">$ {{ getSum(index) }}</VParag>
      <VButton class="basket" @click="$emit('removeMeal', item.id)">
        <img src="@/assets/images/basket/basket.svg" alt="basket" />
      </VButton>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/Vinput/VInput.vue";
import VButton from "@/components/Vbutton/VButton.vue";
import VParag from "@/components/Vparag/VParag.vue";

export default {
  name: "Meal",
  props: ["item", "index", "mealArray"],
  components: { VInput, VButton, VParag },
  methods: {
    getSum(index) {
      const sumOfMeal = Number(
        (this.item.price * this.item.counter).toFixed(2)
      );
      this.mealArray[index].sum = sumOfMeal;
      return sumOfMeal;
    },
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
}
.meal {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  // align-content: space-evenly;
  gap: 10px;
  .meal__left {
    max-width: 297px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .meal__left-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .meal__left-img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        margin-right: 6px;
      }
      .meal__left-text {
        font-family: "Barlow-Medium";
        font-size: 14px;
        line-height: 130%;
        color: #fff;
        margin-bottom: 4px;
      }
      .meal__left-price {
        font-family: "Barlow-Medium";
        font-size: 12px;
        line-height: 140%;
        color: #abbbc2;
      }
      .meal__left-counter {
        max-width: 52px;
        width: 100%;
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #2d303e;
        border: 1px solid #393c49;
        border-radius: 8px;
        font-family: "Barlow-Medium";
        line-height: 140%;
        color: #fff;
        outline: none;
      }
    }
    .meal__left-comment {
      width: 100%;
      background: #2d303e;
      border: 1px solid #393c49;
      border-radius: 8px;
      padding: 14px;
      font-size: 14px;
      line-height: 140%;
      color: #e0e6e9;
      outline: none;
    }
  }
  .meal__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .meal__right-sum {
      font-family: "Barlow-Medium";
      line-height: 140%;
      color: #fff;
      padding-top: 14px;
    }
  }
}
</style>
