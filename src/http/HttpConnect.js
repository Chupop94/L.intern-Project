import axios from "axios";

export default class HttpConnect {
  url = "";
  data = "";

  async getCallData() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      }
    };

    return await axios
      .post(`http://localhost:8080${this.url}`, this.data, axiosConfig)
      .then((response) => {
        console.log("받은 데이터 : " , response.data);
        return response.data;
      })
      .catch(error => {
        console.log("error :", error);
      });
  }
}
