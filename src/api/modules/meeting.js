import { apiInstance } from "../index";

const api = apiInstance();

async function getMeeting(meetingId) {
  var result = null;
  await api.get(`/meeting/detail/${meetingId}`).then((res) => {
    if (res.data.statusCode == "404") {
      result = null;
    }
    result = res.data.data;
  });
  return await Promise.resolve(result);
}

async function getTodayMeetings() {
  var result = null;
  await api
    .get("/meeting/today")
    .then((res) => {
      result = res.data.data;
    })
    .catch((err) => {
      err;
    });
  return await Promise.resolve(result);
}

async function getUpcomingMeetings() {
  var result = null;
  await api
    .get("/meeting/upcoming")
    .then((res) => {
      result = res.data.data;
    })
    .catch((err) => {
      err;
    });
  return await Promise.resolve(result);
}

function getMostRecentMeeting() {
  return new Promise((resolve, reject) => {
    api
      .get("/meeting/most-recent")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// [GET] 현재 시각으로부터 지난 가장 최근의 모임
function getRecentPastMeeting() {
  return new Promise((resolve, reject) => {
    api
      .get("/meeting/past-recent")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function getBestMember() {
  var result = null;
  await api
    .get("/member/best-member")
    .then((res) => {
      result = res.data.data;
    })
    .catch((err) => {
      err;
    });
  return await Promise.resolve(result);
}

export {
  getMeeting,
  getTodayMeetings,
  getUpcomingMeetings,
  getMostRecentMeeting,
  getBestMember,
  getRecentPastMeeting,
};