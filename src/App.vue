<template>
  <div id="app">
    <LeftSide />
    <router-view />
  </div>
</template>

<script>
import LeftSide from "@/components/left-side/LeftSide.vue";
export default {
  name: "App",
  components: { LeftSide },
};
</script>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  background-color: #252836;
}
</style>
