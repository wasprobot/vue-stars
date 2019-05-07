import Vue from "vue";
import App from "./App.vue";
import VeeValidate from "vee-validate";
import router from "./router";
import VueMaterial from "vue-material";
import VueGoogleCharts from "vue-google-charts";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VeeValidate);
Vue.use(VueMaterial);
Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
