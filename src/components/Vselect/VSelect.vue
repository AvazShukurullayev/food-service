<template>
  <select name="" id="" @change="$emit('change',$event)">
    <option :value="item.orderDish" v-for="(item, index) in selectArray">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["selectArray"],
  methods: {
  },
};
</script>

<style></style>
