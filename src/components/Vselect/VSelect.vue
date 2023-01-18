<template>
  <select name="" id="" @change="$emit('change', $event.target.value)">
    <option value="all">Select dish</option>
    <option :value="item.orderDish" v-for="(item, index) in selectArray">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "VSelect",
  props: ["selectArray"],
};
</script>

<style></style>
