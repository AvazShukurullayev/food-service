<template>
  <div class="dishes-card" v-if="item.isShown" @click="clickedCardAct(item.id)">
    <div class="dishes-card-image">
      <img
        class="dishes-card__img"
        :src="require('@/assets/images/dishes/' + item?.img)"
        alt=""
      />
    </div>
    <VHeadingThree class="dishes-card__title">{{ item.title }}</VHeadingThree>
    <VParag class="dishes-card__price">$ {{ item.price }}</VParag>
    <VParag class="dishes-card__desc"
      >{{ item.quantity }} {{ item.desc }}
      </VParag
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VHeadingThree from "@/components/Vheadings/VHeadingThree.vue";
import VParag from "@/components/Vparag/VParag.vue";
export default {
  props: ["item", "index"],
  components: { VHeadingThree, VParag },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions(["clickedCardAct"]),
  },
};
</script>

<style scoped lang="scss">
.dishes-card {
  // max-width: 192px;
  max-width: calc(100% / 3 - 28px);
  width: 100%;
  background: #1f1d2b;
  border-radius: 16px;
  text-align: center;
  padding: 24px;
  cursor: pointer;
  .dishes-card-image {
    margin: -36px auto 0;
    max-width: 150px;
    .dishes-card__img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .dishes-card__title {
    margin-top: 14px;
    font-family: "Barlow-Medium";
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: #fff;
  }
  .dishes-card__price {
    margin-top: 8px;
    font-size: 14px;
    line-height: 140%;
    color: #fff;
  }
  .dishes-card__desc {
    margin-top: 4px;
    font-size: 14px;
    line-height: 140%;
    color: #abbbc2;
    // opacity: 0.2;
  }
}
</style>
