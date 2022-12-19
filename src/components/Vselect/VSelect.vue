<template>
  <select name="" id="" @change="actSelectOption(index)">
    <option :value="item.orderDish" v-for="(item, index) in selectArray">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
import {mapActions} from "vuex"
export default {
  props: ["selectArray"],
  methods: {
    ...mapActions(["actSelectOption"])
  }
};
</script>

<style></style>
