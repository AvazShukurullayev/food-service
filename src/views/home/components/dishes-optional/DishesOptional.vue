<template>
  <select name="" id="" class="dishes__select" @change="selectedOpt">
    <option
      v-for="(item, index) in optionalMenu"
      class="dishes-optional"
      :value="index"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "DishesOptional",
  props: ["optionalMenu"],
  components: {},
  data() {
    return {
      // global objects
    };
  },
  methods: {
    // functions
    selectedOpt(index) {
      this.$emit("selectOption", index);
      // console.log(index.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.dishes__select {
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-family: "Barlow-Medium";
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  padding: 15px 14px;
}
</style>
