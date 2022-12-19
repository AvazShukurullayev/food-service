<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <VHeadingTwo>Dashboard</VHeadingTwo>
      <VParag>Tuesday 2 Feb, 2021</VParag>
    </div>

    <hr />

    <div class="dashboard__cards">
      <div class="dashboard__card">
        <div class="dashboard__card-top">
          <VSpan>$</VSpan>
          <VSpan>+32.40%</VSpan>
          <VSpan>^</VSpan>
        </div>
        <VParag class="dashboard__card-total">$10,243.00</VParag>
        <VParag class="dashboard__card-subtitle">Total Revenue</VParag>
      </div>
      <div class="dashboard__card">
        <div class="dashboard__card-top">
          <VSpan>$</VSpan>
          <VSpan>+32.40%</VSpan>
          <VSpan>^</VSpan>
        </div>
        <VParag class="dashboard__card-total">$10,243.00</VParag>
        <VParag class="dashboard__card-subtitle">Total Revenue</VParag>
      </div>
      <div class="dashboard__card">
        <div class="dashboard__card-top">
          <VSpan>$</VSpan>
          <VSpan>+32.40%</VSpan>
          <VSpan>^</VSpan>
        </div>
        <VParag class="dashboard__card-total">$10,243.00</VParag>
        <VParag class="dashboard__card-subtitle">Total Revenue</VParag>
      </div>
    </div>

    <div class="dashboard__data">
      <div
        class="dashboard__data-header d-flex justify-content-between align-items-center"
      >
        <VHeadingThree class="dashboard__data-title"
          >Order Report</VHeadingThree
        >
        <select name="" id="" class="dashboard__data-select">
          <option value="">Filter</option>
          <option value="">Filter</option>
          <option value="">Filter</option>
          <option value="">Filter</option>
        </select>
      </div>

      <table class="table table-dark table-dark-bg">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Menu</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="dashboard__tbody">
          <tr>
            <td class="d-flex align-items-center">
              <img src="@/assets/images/svg/Avatar 1.svg" alt="" />
              <p>Eren Jaegar</p>
            </td>
            <td>
              <p>Spicy seasoned seafood noodles</p>
            </td>
            <td>
              <p>$125</p>
            </td>
            <td>
              <div>completed</div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center">
              <img src="@/assets/images/svg/Avatar 1.svg" alt="" />
              <p>Eren Jaegar</p>
            </td>
            <td>
              <p>Spicy seasoned seafood noodles</p>
            </td>
            <td>
              <p>$125</p>
            </td>
            <td>
              <div>completed</div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center">
              <img src="@/assets/images/svg/Avatar 1.svg" alt="" />
              <p>Eren Jaegar</p>
            </td>
            <td>
              <p>Spicy seasoned seafood noodles</p>
            </td>
            <td>
              <p>$125</p>
            </td>
            <td>
              <div>completed</div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center">
              <img src="@/assets/images/svg/Avatar 1.svg" alt="" />
              <p>Eren Jaegar</p>
            </td>
            <td>
              <p>Spicy seasoned seafood noodles</p>
            </td>
            <td>
              <p>$125</p>
            </td>
            <td>
              <div>completed</div>
            </td>
          </tr>
          <tr>
            <td class="d-flex align-items-center">
              <img src="@/assets/images/svg/Avatar 1.svg" alt="" />
              <p>Eren Jaegar</p>
            </td>
            <td>
              <p>Spicy seasoned seafood noodles</p>
            </td>
            <td>
              <p>$125</p>
            </td>
            <td>
              <div>completed</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="dashboardRight">
      <div class="dashboardRight__top">
        <div class="dashboardRight__top-header">
          <VHeadingTwo class="dashboardRight__top-title"
            >Most Ordered</VHeadingTwo
          >
          <select name="" id="" class="dashboardRight__top-select">
            <option value="">Today</option>
            <option value="">Yesterday</option>
            <option value="">Last week</option>
            <option value="">Last month</option>
          </select>
        </div>
        <hr />
        <div class="dashboardRight__top-orderedMeals">
          <div class="dashboardRight__top-orderedMeal">
            <div class="dashboardRight__top-orderedMeal-img">
              <img src="@/assets/images/dishes/dish-1.png" alt="" />
            </div>
            <div class="dashboardRight__top-orderedMeal-desc">
              <VParag>Spicy seasoned seafood noodles</VParag>
              <VParag>200 dishes ordered</VParag>
            </div>
          </div>
        </div>
        <VButton class="dashboard__viewButton">View All</VButton>
      </div>

      <div class="dashboardRight__bottom">
        <div class="dashboardRight__bottom-header">
          <VHeadingTwo class="dashboardRight__bottom-header-title">
            Most Type of Order
          </VHeadingTwo>
          <select name="" id="" class="dashboardRight__bottom-header-select">
            <option value="">Today</option>
          </select>
        </div>
        <hr />
        <div class="dashboardRight__bottom-chart">
          <div class="dashboardRight__bottom-chart-img">
            <img src="@/assets/images/svg/Circle.png" alt="" />
          </div>
          <ul class="dashboardRight__bottom-list">
            <li class="dashboardRight__bottom-item">
              <VSpan class="dashboardRight__bottom-circle"></VSpan>
              <div class="dashboardRight__bottom-desc">
                <VParag class="dashboardRight__bottom-title">Dine in</VParag>
                <VParag class="dashboardRight__bottom-text"
                  >200 customers</VParag
                >
              </div>
            </li>
            <li class="dashboardRight__bottom-item">
              <VSpan class="dashboardRight__bottom-circle"></VSpan>
              <div class="dashboardRight__bottom-desc">
                <VParag class="dashboardRight__bottom-title">Dine in</VParag>
                <VParag class="dashboardRight__bottom-text"
                  >200 customers</VParag
                >
              </div>
            </li>
            <li class="dashboardRight__bottom-item">
              <VSpan class="dashboardRight__bottom-circle"></VSpan>
              <div class="dashboardRight__bottom-desc">
                <VParag class="dashboardRight__bottom-title">Dine in</VParag>
                <VParag class="dashboardRight__bottom-text"
                  >200 customers</VParag
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeadingTwo from "@/components/Vheadings/VHeadingTwo.vue";
import VHeadingThree from "@/components/Vheadings/VHeadingThree.vue";
import VParag from "@/components/Vparag/VParag.vue";
import VButton from "@/components/Vbutton/VButton.vue";
import VSpan from "@/components/Vspan/VSpan.vue";
export default {
  name: "DashboardView",
  components: { VHeadingTwo, VHeadingThree, VParag, VButton, VSpan },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.dashboard {
  padding: 24px 421px 24px 128px;
  color: #fff;
  .dashboard__cards {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    .dashboard__card {
      width: calc(100% / 3 - 24px);
      background: #1f1d2b;
      border-radius: 8px;
      padding: 16px;
      &-top {
        display: flex;
        align-items: center;
        span:nth-child(1) {
          background: #252836;
          border-radius: 8px;
          padding: 10px 16px;
          text-align: center;
          font-size: 20px;
          color: #9288e0;
          margin-right: 12px;
        }
        span:nth-child(2) {
          font-family: "Barlow-Medium";
          font-size: 12px;
          line-height: 140%;
          color: #50d1aa;
          margin-right: 6px;
        }
        span:nth-child(3) {
          width: 18px;
          height: 18px;
          background: rgba(136, 224, 145, 0.24);
          color: #50d1aa;
          text-align: center;
          border-radius: 20px;
        }
      }
      &-total {
        font-family: "Barlow-SemiBold";
        font-size: 28px;
        line-height: 140%;
        color: #ffffff;
        margin: 8px 0;
      }
      &-subtitle {
        font-family: "Barlow-Medium";
        font-size: 14px;
        line-height: 130%;
        color: #abbbc2;
      }
    }
  }
  .dashboard__data {
    padding: 24px;
    background: #1f1d2b;
    border-radius: 8px;
    &-header {
      margin-bottom: 16px;
    }
    &-title {
      font-family: "Barlow-SemiBold";
      font-size: 20px;
      line-height: 140%;
      color: #fff;
    }
    &-select {
      background: #1f1d2b;
      border: 1px solid #393c49;
      border-radius: 8px;
      font-family: "Barlow-Medium";
      font-size: 14px;
      line-height: 130%;
      color: #fff;
      padding: 14px;
      outline: none;
    }
  }
  .table-dark-bg {
    width: 100%;
  }
  .dashboard__tbody {
    padding-top: 16px;
  }
  .dashboardRight {
    position: fixed;
    top: 24px;
    right: 24px;
    bottom: 24px;
    &__top,
    &__bottom {
      padding: 24px;
      background: #1f1d2b;
      border-radius: 8px;
    }
    &__top {
      margin-bottom: 24px;
      .dashboardRight__top-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .dashboardRight__top-title {
        font-family: "Barlow-SemiBold";
        font-size: 20px;
        line-height: 140%;
        color: #fff;
      }
      .dashboardRight__top-select {
        background: #1f1d2b;
        border: 1px solid #393c49;
        border-radius: 8px;
        font-family: "Barlow-Medium";
        font-size: 14px;
        line-height: 130%;
        color: #fff;
        padding: 14px;
      }
      .dashboardRight__top-orderedMeals {
        min-height: 20vh;
        .dashboardRight__top-orderedMeal {
          display: flex;

          .dashboardRight__top-orderedMeal-img {
            width: 61px;
            margin-right: 8px;
          }
          .dashboardRight__top-orderedMeal-img img {
            width: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
          }
          .dashboardRight__top-orderedMeal-desc p:nth-child(1) {
            font-family: "Barlow-Medium";
            font-size: 14px;
            line-height: 130%;
            color: #e0e6e9;
            margin-bottom: 4px;
          }
          .dashboardRight__top-orderedMeal-desc p:nth-child(2) {
            font-size: 12px;
            line-height: 140%;
            color: #abbbc2;
          }
        }
      }
      .dashboard__viewButton {
        width: 100%;
        border: 1px solid #ea7c69;
        border-radius: 8px;
        padding: 14px 0;
        text-align: center;
        font-family: "Barlow-SemiBold";
        font-size: 14px;
        line-height: 140%;
        background: transparent;
        color: #ea7c69;
        transition: all 0.2 ease-in-out;
      }
    }
    &__bottom {
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-title {
          font-family: "Barlow-SemiBold";
          font-size: 20px;
          line-height: 140%;
          color: #fff;
        }
        &-select {
          padding: 14px;
          background: #1f1d2b;
          border: 1px solid #393c49;
          border-radius: 8px;
          font-family: "Barlow-Medium";
          font-size: 14px;
          line-height: 130%;
          color: #fff;
        }
      }
      &-chart {
        margin-top: 32px;
        display: flex;
        &-img {
          width: 176px;
          margin-right: 27px;
        }
        &-img img {
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      &-item {
        margin-top: 16px;
        display: flex;
        align-items: flex-start;
        gap: 9px;
      }
      &-circle {
        width: 18px;
        height: 18px;
        background-color: #ff7ca3;
        border-radius: 50%;
      }
      &-title {
        font-family: "Barlow-Medium";
        font-size: 14px;
        line-height: 130%;
        color: #fff;
        margin-bottom: 2px;
      }
      &-text {
        font-size: 12px;
        line-height: 140%;
        color: #abbbc2;
      }
    }
  }
}
.table > :not(caption) > * > * {
  background-color: #1f1d2b;
}
th {
  padding: 16px 0;
}

tbody tr {
  padding: 16px 0 10px;
}
hr {
  margin: 20px 0;
}
</style>
