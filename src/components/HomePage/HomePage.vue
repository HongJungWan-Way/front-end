<template>
    <v-sheet class="d-flex flex-column">
        <home-banner></home-banner>

        <today-meeting></today-meeting>

        <coming-meeting></coming-meeting>

        <close-friends></close-friends>
        
        <v-sheet height="56px"></v-sheet>
    </v-sheet>
</template>

<script>
import HomeBanner from "./HomeBanner.vue";
import TodayMeeting from "./TodayMeeting.vue";
import ComingMeeting from "./ComingMeeting.vue";
import CloseFriends from "./CloseFriends.vue";

export default {
    name: "HomePage",

    components: {
        // 배너
        HomeBanner,

        // 오늘의 모임
        TodayMeeting,
        
        // 다가올 모임
        ComingMeeting,

        // 자주 만나는 멘토
        CloseFriends,
    },

    methods: {
        openBottomSheet() {
            this.$refs.bottomsheet.open();
        },
    },
};
</script>

<style>
</style>