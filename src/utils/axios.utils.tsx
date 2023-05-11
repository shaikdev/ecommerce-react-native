import axios from "axios";
import * as Functions from 'utils/functions.utils';
let token = localStorage.getItem("token")
export const instance = () => {
  const data = axios.create({
  baseURL: Functions.getBaseURL()+"/api/v1/",
    headers: {
      "authorization" :token || ""
  }
})
return data
}

export default instance