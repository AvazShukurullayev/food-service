<template>
  <li
    class="menu-item"
    :class="{ selected: item.selected }"
    @click="actSelectedItem(index)"
  >
    {{ item.name }}
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MenuItem",
  props: ["item", "index"],
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["actSelectedItem"]),
  },
};
</script>

<style scoped lang="scss">
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
</style>
