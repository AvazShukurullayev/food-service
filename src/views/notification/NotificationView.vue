<template>
  <div class="notification">
    <h2 class="title">Notification Component</h2>
  </div>
</template>

<script>
export default {
  name: "NotificationView",
  components: {},
};
</script>

<style scoped lang="scss">
.notification {
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
