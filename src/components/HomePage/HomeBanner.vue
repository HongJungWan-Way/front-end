<template>
    <swiper class="mb-3 swiper" :options="swiperOption">
        <swiper-slide>
            <v-sheet width="100%" height="250px" style="cursor: pointer">
                <home-banner-one></home-banner-one>
            </v-sheet>
        </swiper-slide>
        <swiper-slide>
            <v-sheet width="100%" height="250px" style="cursor: pointer">
                <home-banner-two></home-banner-two>
            </v-sheet>
        </swiper-slide>
        <swiper-slide>
            <v-sheet width="100%" height="250px" style="cursor: pointer">
                <home-banner-three></home-banner-three>
            </v-sheet>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import HomeBannerOne from "./element/HomeBannerOne.vue";
import HomeBannerTwo from "./element/HomeBannerTwo.vue";
import HomeBannerThree from "./element/HomeBannerThree.vue";

export default {
    name: "HomeBanner",
    components: {
        HomeBannerOne,
        HomeBannerTwo,
        HomeBannerThree,
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: "auto",
                spaceBetween: 25,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            },
        };
    },
};
</script>

<style scoped>
.swiper-slide {
    width: 100%;
}

.swiper-container {
    width: 100% !important;
}
</style>