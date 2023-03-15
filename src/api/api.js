import Axios from 'axios';

const token = localStorage.getItem("accessToken");
export const getAxiosInstanceAuth = () => {
  return Axios.create({
    baseURL: "https://users.anooshe.co",
    headers: {
      // API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    }
  });
};
export const getAxiosInstanceApi = () => {
  return Axios.create({
    baseURL: "https://users.anooshe.co",
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
};