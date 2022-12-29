<template>
  <div class="discount">
    <h2 class="title">Discount Component</h2>
  </div>
</template>
<script>
export default {
  name: "DiscountView",
  components: {},
};
</script>
<style scoped lang="scss">
.discount {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    color: #fff;
    font-size: 64px;
  }
}
</style>
