import axios from "axios";

const repository = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

repository.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

repository.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const accessToken = sessionStorage.getItem("accessToken");
        const response = await repository.post("/auth/access-token", {
          refreshToken: accessToken,
        });

        sessionStorage.setItem("accessToken", response.data.accessToken);
        return repository(originalRequest);
      } catch (error) {
        console.error("Error refreshing access token", error);
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default repository;

