import axios from "axios";

const MessageAPI = axios.create({
  baseURL: "localhost:2021",
  responseType: "json",
});

export default MessageAPI;
