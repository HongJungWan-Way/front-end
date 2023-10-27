<template>
    <v-sheet class="d-flex flex-column">
        <home-banner></home-banner>
        <coming-meeting></coming-meeting>
        <!-- nav 자리 -->
        <v-sheet height="56px"></v-sheet>
    </v-sheet>
</template>

<script>
import HomeBanner from "./HomeBanner.vue";
import ComingMeeting from "./ComingMeeting.vue";

export default {
    name: "HomePage",
    components: {
        // 배너
        HomeBanner,

        // 오늘의 모임
        ComingMeeting,

        // 다가올 모임

        // 자주 만나는 멘토
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