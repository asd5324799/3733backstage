// mock.js
import Vue from "vue";
import axios from "axios";
import "./mockLogin";
import Mock from "mockjs";

axios.interceptors.response.use(res => {
  const data = res.data;
  return data;
});

Vue.prototype.$axios = axios;

Mock.setup({
  timeout: "1000-2000"
});
