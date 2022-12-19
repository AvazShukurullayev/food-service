<template>
  <div class="left-side">
    <router-link class="left-side__logo" to="/">
      <img src="@/assets/images/svg/logo.svg" alt="logo" />
    </router-link>
    <div class="menu_list">
      <router-link
        class="left-side__item"
        v-for="item in menuLists"
        :to="item.link"
      >
        <img :src="require('@' + '/assets/images/svg/' + item?.image)" alt="" />
      </router-link>
    </div>
    <router-link class="left-side__logo" to="/exit">
      <img src="@/assets/images/svg/exit.svg" alt="exit" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LeftSide",
  components: {},
  data() {
    return {
      // global objects
      menuLists: [
        { image: "house.svg", link: "/" },
        { image: "discount.svg", link: "/discount" },
        { image: "dashboard.svg", link: "/dashboard" },
        { image: "message.svg", link: "/message" },
        { image: "notification.svg", link: "/notification" },
        { image: "settings.svg", link: "/settings" },
      ],
    };
  },
  methods: {
    // functions
  },
};
</script>

<style scoped lang="scss">
.left-side {
  max-width: 104px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #1f1d2b;
  border-radius: 16px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
  overflow: auto;

  .left-side__logo {
    display: inline-block;
    padding: 12px;
    background: #eb966a;
    border-radius: 12px;
    margin-bottom: 12px;
    .fa-solid.fa-castle {
      font-size: 20px;
      color: #fff;
    }
  }
  .left-side__logo:last-child {
    background: unset;
    margin-top: 12px;
    margin-bottom: 0;
  }
  .menu_list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 12px;
    .left-side__item {
      display: block;
      padding: 18px;
      border-radius: 12px;
      transition: 0.3s background-color ease-in;
      &.router-link-exact-active {
        background-color: #eb966a;
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
  }
  .left-side__logo.router-link-exact-active {
    background-color: #eb966a;
    img {
      filter: brightness(0) invert(1);
    }
  }
}
</style>
