import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(
//   async function (config) {

//       let jwtToken = await AsyncStorage.getItem("authorization").then(
//         (token) => token
//       );

//       if (jwtToken) {
//         config.headers["authorization"] = "Bearer " + jwtToken;
//       }
//       return config;
//     },
//     function (err) {
//       return Promise.reject(err);
//     }
//   );

export default axiosInstance;
