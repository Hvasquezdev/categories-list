import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: process.env.VUE_APP_AUTH_TOKEN,
  },
});

export { api };
