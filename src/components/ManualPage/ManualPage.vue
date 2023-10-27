<template>
  <v-sheet width="100%">
    <v-sheet
      max-width="500"
      style="
        position: fixed;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 0;
        z-index: 2;
      "
    >
      <nav-header></nav-header>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="var(--main-col-1)"
        height="40"
        grow
      >
        <v-tab v-for="item in items" :key="item">
          <span class="sm-font medium-font">{{ item }}</span>
        </v-tab>
      </v-tabs>
    </v-sheet>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-sheet style="padding: 110px 25px 65px 25px">
          <br>
          <div class="mb-5 d-flex flex-column main-col-1">
            <span class="logo-font xxxxxxl-font">Way?</span>
            <div class="mb-2 xs-font light-font">
              <br>
                <span class="blue-line">
                  성장에 대한 갈증, 개발자로서의 여정은 때로 복잡하고 어려울 수 있습니다. 
                </span>
                <br>
                <span class = "green-line">  
                  새로운 기술을 배우고, 코드를 최적화하며, 버그를 해결하는 과정에서 우리는 종종 막히는 지점에 도달합니다.
                </span>
                <span>  
                  이런 순간들은 고립되고 혼란스러울 수 있으며, 올바른 방향으로 나아가기 위해선 
                </span>
                <span class="yellow-line">  
                  누군가의 지도가 필요합니다.
                </span>
              <br><br>
                <span>Way는 이러한 도전에 직면한 🐣 </span>
                <span class="orange-line">신입 개발자 && 취업 준비생</span>
                <span>들을 위해 만들어졌습니다.</span>
              <br>
            </div>
          </div>
          <br>
          <div class="mb-5 d-flex flex-column main-col-1">
            <span class="logo-font xxxxxxl-font">Open Source</span>
            <br>
            <div class="mb-2 xs-font light-font main-col-1">
              <span>Way 프로젝트는 </span>
              <span class="orange-line">오픈소스 프로젝트</span>
              <span>로 진행됐습니다.</span>
              <span>
                해당 프로젝트에 기여하고 싶으시다면 아래 주소에 접속해 코드를
                확인하고
              </span>
              <span>
                Fork, branch 생성 및 개발, merge request 요청 순으로 진행하시면
                됩니다.
              </span>
              <br />
              <a href="https://github.com/orgs/HongJungWan-Way/repositories">HongJungWan-Way</a>
              <span>에서 관련 문서를 확인해 주세요.</span>
            </div>
          </div>
          <br>
          <div class="d-flex flex-column main-col-1">
            <span class="logo-font xxxxxxl-font">Developer</span>
            <br>
            <div class="mb-2 xxs-font d-flex flex-column light-font">
              <div>
                  <span class="mr-1 extrabold-font">담당자</span>
                  <span>홍정완</span>
              </div>
              <div>
                <span class="mr-1 extrabold-font">문의</span>
                <span>hong43ok@gmail.com</span>
              </div>
            </div>
            <br>
          </div>
        </v-sheet>
      </v-tab-item>
    </v-tabs-items>
    <v-bottom-navigation
      fixed
      style="margin: 0 auto; left: 0; right: 0; box-shadow: none"
      max-width="500"
      height="50"
    >
      <v-btn
        id="manual-btn"
        class="sm-font point-font"
        color="var(--main-col-1)"
        style="color: white !important"
        block
        @click="goRegister()"
      >
        멘토링 신청
      </v-btn>
    </v-bottom-navigation>
  </v-sheet>
</template>

<script>
import NavHeader from "@/views/Header/NavHeader.vue";
export default {
  components: { NavHeader },
  name: "ManualPage",
  data() {
    return {
      tab: 0,
      items: ["소개"],
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(
    .v-slide-group--has-affixes
  )
  .v-slide-group__prev {
  display: none !important;
}
.red-line {
  box-shadow: inset 0 -16px 0 var(--roulette-col-6);
}
.orange-line {
  box-shadow: inset 0 -16px 0 var(--roulette-col-7);
}
.yellow-line {
  box-shadow: inset 0 -16px 0 var(--roulette-col-8);
}
.green-line {
  box-shadow: inset 0 -16px 0 var(--roulette-col-9);
}
.blue-line {
  box-shadow: inset 0 -16px 0 var(--roulette-col-10);
}
</style>