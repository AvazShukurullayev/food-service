<template>
  <div
    class="dishesCard"
    v-if="item.isShown"
    @click="$emit('clickedCard', item)"
  >
    <div class="dishesCard__image">
      <img
        class="dishesCard__img"
        :src="require('@/assets/images/dishes/' + item?.img)"
        alt=""
      />
    </div>
    <VHeadingThree class="dishesCard__title">{{ item.title }}</VHeadingThree>
    <VParag class="dishesCard__price">$ {{ item.price }}</VParag>
    <VParag class="dishesCard__desc">
      {{ item.quantity }} {{ item.desc }}
    </VParag>
  </div>
</template>

<script>
import VHeadingThree from "@/components/Vheadings/VHeadingThree.vue";
import VParag from "@/components/Vparag/VParag.vue";

export default {
  props: ["item", "index"],
  components: { VHeadingThree, VParag },
};
</script>

<style scoped lang="scss">
.dishesCard {
  // max-width: 192px;
  max-width: calc(100% / 3 - 28px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #1f1d2b;
  border-radius: 16px;
  text-align: center;
  padding: 24px;
  cursor: pointer;
  .dishesCard__image {
    margin: -36px auto 0;
    max-width: 150px;
    min-width: 75px;
    .dishesCard__img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      border-radius: 50%;
    }
  }
  .dishesCard__title {
    margin-top: 14px;
    font-family: "Barlow-Medium";
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: #fff;
  }
  .dishesCard__price {
    margin-top: 8px;
    font-size: 14px;
    line-height: 140%;
    color: #fff;
  }
  .dishesCard__desc {
    margin-top: 4px;
    font-size: 14px;
    line-height: 140%;
    color: #abbbc2;
    // opacity: 0.2;
  }
}
</style>
