import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import main from "@/router/modules/main";
import banner from "@/router/modules/banner";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [...main, ...banner];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router;