import axios from "axios";

const BASE_URL = "https://bardapi-kjfc.onrender.com/generate-message";

const getBardApi = (userMsg) => axios.get(BASE_URL + "?ques=" + userMsg);

export default {
  getBardApi,
};
