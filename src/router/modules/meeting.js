import MeetingPage from "@/components/MeetingPage/MeetingPage.vue";
import MeetingHeader from "@/views/Header/MeetingHeader.vue";

const meeting = [
  {
    path: "/meeting/:id",
    name: "meeting",
    components: {
      header: MeetingHeader,
      default: MeetingPage,
    },
  },
];

export default meeting;
