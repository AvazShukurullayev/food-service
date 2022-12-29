<template>
  <div class="message">
    <h2 class="title">Message Component</h2>
  </div>
</template>
<script>
export default {
  name: "MessageView",
  components: {},
};
</script>
<style scoped lang="scss">
.message {
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
