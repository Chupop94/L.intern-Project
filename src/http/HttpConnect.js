import axios from "axios";

export default class HttpConnect {
  url = "";
  data = "";

  async getCallData() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    return await axios
      .post(`http://210.93.182.22:8080/edu-1.0${this.url}`, this.data, axiosConfig)
      //.post(`http://localhost:8080${this.url}`, this.data, axiosConfig)
      .then(response => {
        console.log("받은 데이터 : ", response.data);
        return response.data;
      })
      .catch(error => {
        console.log("error :", error);
      });
  }
}
