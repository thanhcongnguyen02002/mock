import axios from "axios";
const axiosClient = axios.create({
  baseURL: "",
  headers: {
    token: "",
  },
});

export default axiosClient;
