import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/login/login.vue";
import Main from "./pages/main/main.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/main",
      name: "main",
      component: Main
    }
  ]
});
