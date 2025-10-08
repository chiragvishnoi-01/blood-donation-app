import axios from "axios";

const instance = axios.create({
  baseURL: "https://blood-donation-backend.up.railway.app/api", // <-- yahan apna backend URL update karo
});

export default instance;
