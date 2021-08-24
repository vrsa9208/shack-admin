import axios from "axios";

export const getServerUrl = () => {
  return "https://shack-admin-default-rtdb.firebaseio.com";
};

export const getServerClient = () => {
  return axios.create({
    baseURL: getServerUrl(),
    timeout: 7000,
  });
};
