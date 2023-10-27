import BaseHeader from "@/views/Header/BaseHeader.vue";
import HomePage from "@/components/HomePage/HomePage.vue";
import TheNavigation from "@/views/TheNavigation.vue";
import TheLanding from "@/views/TheLanding.vue";

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
            default: HomePage,
            navigation: TheNavigation,
        },
    },
];

export default home;