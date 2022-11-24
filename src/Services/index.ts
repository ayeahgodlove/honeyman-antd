import axios, { AxiosResponse } from "axios";
import { AppConstant } from "Config/Constant";
import store from "Store/store";

const api = axios.create({
  baseURL: AppConstant.API_URI,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    const convertToObj= JSON.parse(token!!)
    if(token === null) {
      return config;
    }

    config.headers = {
      Authorization: `Bearer ${
        token && token ? convertToObj.token : ""
      }`,
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      mode: "no-cors",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

export const requestType = {
  get: (url: string) =>
    api
      .get(url)
      .then(responseBody)
      .catch((error) => console.log("Error: ", error.message)),
  post: (url: string, body: {}) =>
    api
      .post(url, body)
      .then(responseBody)
      .catch((error) => console.log("Error: ", error.message)),
  put: (url: string, body: {}) =>
    api
      .put(url, body)
      .then(responseBody)
      .catch((error) => console.log("Error: ", error.message)),
  del: (url: string, body: {}) =>
    api
      .delete(url, body)
      .then(responseBody)
      .catch((error) => console.log("Error: ", error.message)),
};
