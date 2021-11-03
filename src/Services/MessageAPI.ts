// import axios from "axios";

// const MessageAPI = axios.create({
//   baseURL: "localhost:2021",
//   responseType: "json",
// });

// async retrieveSA() {
//   try{
//     const data = await
//   } catch (err) {
//     console.log(err);
//     return err.message
// }
// }

// export default MessageAPI;

import axios from "axios";
const server = "http://localhost:2021";

export class MessageAPI {
  async sendMessage(data: any) {
    try {
      const res = await axios.post(`${server}/enviar_mensaje`, data, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async setConnection(ip: string) {
    try {
      const data = await axios.get(`${server}/conectar?host=http://${ip}:2021`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export default new MessageAPI();
