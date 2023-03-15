import { getAxiosInstanceApi } from "./api";

export const getAllusers = (callback) => {

    getAxiosInstanceApi().get("/users").then(response => {
        const data = response.data;
        
        callback(true , data);
    }).catch(error => {
        callback(false , error);
      })
};

export const datauserApi = (user,callback) => {
    getAxiosInstanceApi().post("/users",user)
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      console.log(error);
      callback(false, error.response.data.message);
    })
  };

  export const datagetuserApi = (callback,params) => {
    getAxiosInstanceApi().get("/users",{params:params})
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      console.log(error);
      callback(false, error.response.data.message);
    })
  };