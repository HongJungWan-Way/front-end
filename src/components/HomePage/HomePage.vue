<template>
    <v-sheet class="d-flex flex-column">
        <home-banner></home-banner>

        <!-- nav 자리 -->
        <v-sheet height="56px"></v-sheet>
    </v-sheet>
</template>

<script>
import HomeBanner from "./HomeBanner.vue";

export default {
    name: "HomePage",
    components: {
        HomeBanner,
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