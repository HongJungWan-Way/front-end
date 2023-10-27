<template>
    <v-sheet color="transparent">
        <span class="pl-4 point-font xxxxl-font main-col-1">다가올 멘토링</span>
        <v-btn class="ml-1" icon x-small @click="show = !show">
            <v-icon>$vuetify.icons.info_outline</v-icon>
        </v-btn>
        <v-tooltip location="right" v-model="show">
            <span class="main-col-1 xxxs-font">
                지금으로부터 한 달 내의<br />
                나의 멘토링을 보여줍니다.
            </span>
        </v-tooltip>
        <v-sheet v-if="loading" height="185" class="mx-4 mb-6 mt-2">
            <v-skeleton-loader type="image" class="mb-1" width="100%" height="185"></v-skeleton-loader>
        </v-sheet>
        <div v-else>
            <swiper v-if="meetings && meetings.length > 0" class="swiper mt-2 px-3" :options="swiperOption">
                <swiper-slide class="px-1" v-for="(meeting, idx) in meetings" :key="idx">
                    <v-card @click="goDetail(meeting.id)" elevation="0"
                        class="mb-6 px-5 d-flex flex-column align-center justify-center" :class="{
                            'upcoming-ellipse': idx % 4 === 0,
                            'upcoming-polygon': idx % 4 === 1,
                            'upcoming-rectangle': idx % 4 === 2,
                            'upcoming-star': idx % 4 === 3,
                        }">
                        <v-sheet color="transparent" width="150">
                            <v-sheet class="d-flex flex-row justify-space-between align-center" color="transparent">
                                <v-sheet color="transparent">
                                    <span class="extralight-font md-font white-font d-flex flex-row justify-space-between">
                                        {{ meeting.meetingTime | remainDay }}
                                    </span>
                                    <v-divider width="40" style="border-color: white"></v-divider>
                                </v-sheet>
                                <v-sheet class="d-flex flex-row justify-end" color="transparent">
                                    <div :class="{
                                        'mt-3 ellipse rounded-circle': idx % 4 === 0,
                                        'triangle-first': idx % 4 === 1,
                                        'rectangle-first': idx % 4 === 2,
                                        'star-first': idx % 4 === 3,
                                    }"></div>
                                    <div :class="{
                                        'mt-6 mr-3 ellipse rounded-circle': idx % 4 === 0,
                                        'triangle-second': idx % 4 === 1,
                                        'rectangle-second': idx % 4 === 2,
                                        'mr-3 star-second': idx % 4 === 3,
                                    }"></div>
                                </v-sheet>
                            </v-sheet>
                            <v-sheet color="transparent">
                                <div class="py-3 bold-font md-font white-font">
                                    {{ meeting.meetingName }}
                                </div>
                                <v-sheet class="d-flex flex-column align-end" color="transparent">
                                    <span class="xxxxs-font extralight-font white-font">
                                        {{ meeting.meetingPlace }}
                                    </span>
                                    <span class="xxxxs-font extralight-font white-font">
                                        {{ meeting.meetingTime | formatDate }}
                                    </span>
                                    <span class="xxxxs-font extralight-font white-font">
                                        {{ meeting.meetingTime | formatTime }}
                                    </span>
                                </v-sheet>
                            </v-sheet>
                        </v-sheet>
                    </v-card>
                </swiper-slide>
            </swiper>
            <div v-else class="mb-6 none pa-3 mx-4 mt-2 d-flex justify-center align-center">
                <v-sheet width="100%" height="100%" class="empty white-col-1 pa-4 d-flex justify-end align-center"
                    color="transparent" max-width="330">
                    <v-sheet class="d-flex flex-row justify-end align-center" color="transparent" height="100%">
                        <div class="d-flex flex-column align-start">
                            <span class="semibold-font xl-font white-font">
                                다가올 멘토링이 없습니다.
                            </span>
                            <div class="d-flex flex-column regular-font xxs-font white-font">
                                <span>지금 바로 멘토링 모임을 신청해보세요!</span>
                            </div>
                        </div>
                    </v-sheet>
                </v-sheet>
            </div>
        </div>
    </v-sheet>
</template>

<script>
import { getUpcomingMeetings } from "@/api/modules/meeting.js";
import moment from "moment";

export default {
    name: "ComingMeeting",

    data() {
        return {
            meetings: [],
            swiperOption: {
                slidesPerView: "auto",
                spaceBetween: 0,
            },
            show: false,
            loading: true,
        };
    },

    created() {
        this.loading = true;
        getUpcomingMeetings().then((res) => {
            if (res) {
                this.meetings = res;
                this.loading = false;
            }
        });
    },

    methods: {
        goDetail(id) {
            this.$router.push(`/meeting/${id}`);
        },
    },

    filters: {
        formatDate(value) {
            const date = new Date(value);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const result = `${year}년 ${month + 1 < 10 ? `0${month + 1}` : month + 1
                }월 ${day < 10 ? `0${day}` : day}일`;
            return result;
        },

        formatTime(value) {
            const date = new Date(value);
            const hour = date.getHours();
            const min = date.getMinutes();
            const result = `${hour >= 12
                    ? `오후 ${hour == 12 ? `${hour}` : hour - 12}`
                    : `오전 ${hour}`
                }시 ${min < 10 ? `0${min}` : min}분`;
            return result;
        },

        remainDay(value) {
            const now = moment();
            const time = moment(value, "YYYY-MM-DD hh:mm:ss");
            const hour = moment.duration(time.diff(now)).days();
            return `D-${hour}`;
        },
    },
};
</script>

<style scoped>
@import "@/assets/styles/coming_meeting/coming_meeting.css";
</style>