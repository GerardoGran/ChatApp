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

import axios from 'axios'
const server = 'http://localhost:2021/enviar_mensaje'

export class MessageAPI {

    async sendMessage(text: any) {
        try{
            const data = await  axios.post(`${server}`, text, {
              headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }
          })
            console.log(data)
            return data;
        }catch (err) {
            console.log(err);
            return err
        }
    }
};

export default new MessageAPI();