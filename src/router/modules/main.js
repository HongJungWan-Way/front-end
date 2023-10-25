import TheLanding from "@/views/TheLanding.vue";
import BaseHeader from "@/views/Header/BaseHeader.vue";
import TheNavigation from "@/views/TheNavigation.vue";

const home = [
    {
        path: "/",
        name: "landing",
        components: {
            default: TheLanding,
        },
    },
    {
        path: "/home",
        name: "home",
        components: {
            header: BaseHeader,
            navigation: TheNavigation,
        },
    },
];

export default home;