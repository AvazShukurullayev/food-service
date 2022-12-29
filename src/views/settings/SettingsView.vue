<template>
  <div class="settings">
    <h2 class="title">Settings Component</h2>
  </div>
</template>

<script>
export default {
  name: "SettingsView",
  components: {},
};
</script>

<style scoped lang="scss">
.settings {
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
