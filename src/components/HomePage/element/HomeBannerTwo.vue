<template>
    <v-sheet id="banner-two" @click="goRegister()" width="100%" height="100%"
        class="d-flex flex-column white-font align-center justify-center banner-font-1 hugexlarge-font narrow-font">
        <span>Just</span>
        <span>Apply</span>
        <span>Now !</span>
        <span style="padding-top: 10px;"></span>
        <v-btn class="px-7 mt-3" elevation="0" color="var(--main-col-1)" rounded dark @click="goRegister()">
            <span class="light-font">멘토링 신청하기</span>
        </v-btn>
    </v-sheet>
</template>

<script>
export default {
    name: "HomeBannerTwo",
    methods: {
        goRegister() {
            this.$router.push(`/register`);
        },
    },
};
</script>

<style scoped>
#banner-two {
    background-image: url("@/assets/images/banner/banner2.jpg");
    background-size: cover;
    background-position: center center;
}
</style>