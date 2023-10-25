import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import HomeIcon from "@/common/component/icons/HomeIcon.vue";
import HomeOutlineIcon from "@/common/component/icons/HomeOutlineIcon.vue";
import RegisterIcon from "@/common/component/icons/RegisterIcon.vue";
import RegisterOutlineIcon from "@/common/component/icons/RegisterOutlineIcon.vue";
import MyPageIcon from "@/common/component/icons/MyPageIcon.vue";
import MyPageOutlineIcon from "@/common/component/icons/MyPageOutlineIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#092a49",
            },
        },
    },
    icons: {
        values: {
            home: {
                component: HomeIcon,
            },
            home_outline: {
                component: HomeOutlineIcon,
            },
            register: {
                component: RegisterIcon,
            },
            register_outline: {
                component: RegisterOutlineIcon,
            },
            mypage: {
                component: MyPageIcon,
            },
            mypage_outline: {
                component: MyPageOutlineIcon,
            },
        },
    },
});