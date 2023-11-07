import axios from "axios"
import { Functions,Models } from "@/utils/import.utils"

let token :any= localStorage.getItem("token") || undefined
export const instance = () => {
    const data = axios.create({
    baseURL: Functions.getBaseURL()+"/api/v1/",
      headers: {
        "authorization" :token || "",
        // 'x-apikey': '59a7ad19f5a9fa0808f11931',
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
    // data.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     if (error.response) {
    //       if (error.response.data.message === 'jwt expired') {
    //         try {
    //           const regenerateToken: any = await Models.auth.regenerateToken()
    //           localStorage.setItem('token', regenerateToken.token)
    //           token = regenerateToken.token
    //           const options = {
    //             headers: {
    //               "content-type": "application/json",
    //               "Authorization": regenerateToken.token
    //             }
    //           }
    //           return axios.post(`${error.response.config.baseURL}${error.response.config.url}`, {}, options)
    //         }
    //         catch (err: any) {
    //           window.localStorage.clear()
    //           window.location.href = '/login'
    //           return Promise.reject(err)
    //         }
    //       }
    //       else if (error.response.data.message === 'Invalid token') {
    //         window.localStorage.clear()
    //         window.location.href = '/login'
    //         return Promise.reject('Invalid token')
    //       } else {
    //         return Promise.reject(error)
    //       }
    //     } else return Promise.reject(error);
    //   },
    // );
    return data;
  };
