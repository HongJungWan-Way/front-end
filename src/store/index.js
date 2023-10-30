import Vue from "vue";
import Vuex from "vuex";

// !store 값 유지: npm i --save vuex-persistedstate 설치 필요
// import createPersistedState from "vuex-persistedstate";

import meetingStore from "./modules/meeting";
import memberStore from "./modules/member";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        meetingStore: meetingStore,
        memberStore: memberStore,
    },
});