<template>
  <v-sheet color="transparent">
    <span class="px-4 point-font xxxxl-font main-col-1">자주 만나는 멘토</span>
    <div v-if="loading" class="mx-4 mb-5 mt-2">
      <v-skeleton-loader
        type="image"
        class="mb-1"
        width="100%"
        height="185"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <swiper
        v-if="members.length > 0"
        class="mt-2 mb-5 swiper"
        :options="swiperOption"
      >
        <swiper-slide v-for="(member, idx) in members" :key="idx">
          <v-sheet class="d-flex flex-row">
            <v-avatar rounded="lg" size="77">
              <v-img
                :src="member.friend.memberProfileImg"
                :alt="member.friend.memberNickname"
              ></v-img>
            </v-avatar>
            <div class="d-flex flex-row justify-center align-center">
              <span class="mb-1 mx-5 point-font xxxl-font">{{ idx + 1 }}</span>
              <div>
                <div class="xxxxs-font" style="color: #7e7e7e">
                  <span>총 누적 멘토링 횟수 </span>
                  <span class="medium-font">{{ member.cnt }}회</span>
                </div>
                <span class="xl-font">{{ member.friend.memberNickname }}</span>
                <v-sheet height="12"></v-sheet>
              </div>
            </div>
          </v-sheet>
        </swiper-slide>
      </swiper>
      <div v-else class="d-flex justify-center align-center">
        <v-sheet width="100%" class="white-col-1 mb-4" color="transparent">
          <img
            :src="require('@/assets/images/empty_image/friend_no_data.png')"
            class="d-flex justify-center align-center"
            width="100%"
          />
        </v-sheet>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { getBestMember } from "@/api/modules/meeting.js";
export default {
  name: "CloseFriends",

  data() {
    return {
      members: [],
      swiperOption: {
        slidesPerView: "auto",
        slidesPerColumn: 3,
        spaceBetween: 10,
        centeredSlides: true,
      },
      loading: true,
    };
  },

  created() {
    this.loading = true;
    getBestMember()
      .then((res) => {
        if (res) {
          this.members = res;
        }
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        this.members = []; // API 요청이 실패하면 members 배열을 비워줍니다.
      })
      .finally(() => {
        this.loading = false; // 로딩 상태를 false로 바꿉니다.
      });
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 240px;
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    height: 30%;
    width: 90vw;
    max-width: 460px;
  }
}
</style>