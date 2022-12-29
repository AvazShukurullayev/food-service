import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import DashboardView from "../views/dashboard/DashboardView.vue";
import DiscountView from "../views/discount/DiscountView.vue";
import ExitView from "../views/exit/ExitView.vue";
import MessageView from "../views/message/MessageView.vue";
import NotificationView from "../views/notification/NotificationView.vue";
import SettingsView from "../views/settings/SettingsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/discount",
    name: "discount",
    component: DiscountView,
  },
  {
    path: "/exit",
    name: "exit",
    component: ExitView,
  },
  {
    path: "/message",
    name: "message",
    component: MessageView,
  },
  {
    path: "/notification",
    name: "notification",
    component: NotificationView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
