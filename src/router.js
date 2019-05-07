import Vue from "vue";
import Router from "vue-router";
import Skills from "./components/Skills.vue";
import Details from "./components/Details.vue";
import Projections from "./components/Projections.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "projections",
      component: Projections
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details
    }
  ]
});
