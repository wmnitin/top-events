import { axios } from "./interceptors";
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/";
// const BASE_URL = "https://api.smarkets.com/v3/";

export const getPopularEvents = () => {
  return axios.get(BASE_URL + "popular/event_ids/");
};

export const getEventsDatabyId = (ids) => {
  return axios.get(BASE_URL + "events/" + ids + "/");
};
