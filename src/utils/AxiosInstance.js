import axios from "axios";

export const AxiosInstanse = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstanse.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstanse.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setHeader = (isProd) => {
  // AxiosInstanse.defaults.headers.common.Authorization = accessToken;
  // AxiosInstanse.defaults.headers.common['x-refresh-token'] = refreshToken;
  // AxiosInstanse.defaults.headers.post['Content-Type'] = 'application/json';
  // AxiosInstanse.defaults.headers.put['Content-Type'] = 'application/json';
  AxiosInstanse.defaults.baseURL =
    process.env.NODE_ENV === "development"
      ? ""
      : isProd
      ? "https://server.fiveyears.me"
      : "https://dev.fiveyears.click";
};

export const removeHeader = () => {
  AxiosInstanse.defaults.headers.common.Authorization = "";
  AxiosInstanse.defaults.headers.common["x-refresh-token"] = "";
};
