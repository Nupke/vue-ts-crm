import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_PREFIX } from "../../config/constant";
import { ResData } from "../api/global";
import { getToken } from "./auth";

const BASE_URL = import.meta.env.MODE === "development" ? API_PREFIX : "";

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const res = response.data as ResData<any>;

    if (res.code === 0) {
      return res.result || true;
    }

    if (res.code === -1) {
      console.log("lopgout");
    }
    return undefined;
  },
  (error) => {
    console.log("error", error);
  }
);

const request = <T = any>(
  config: AxiosRequestConfig | string,
  options?: AxiosRequestConfig
): Promise<T> => {
  if (typeof config === "string") {
    if (!options) {
      return instance.request<T, T>({
        url: config,
      });
    } else {
      return instance.request<T, T>({
        url: config,
        ...options,
      });
    }
  } else {
    return instance.request<T, T>(config);
  }
};

export function get<T = any>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ ...config, method: "GET" }, options);
}

export function post<T = any>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ ...config, method: "POST" }, options);
}

export default request;

export type { AxiosInstance, AxiosResponse };
