import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function(config) {
    let jwtToken;
    try {
      AsyncStorage.getItem("authorization").then(token => {
        jwtToken = token;
      });
    } catch (err) {
      console.error(err)
    }
    
    if (jwtToken) {
      config.headers["authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;