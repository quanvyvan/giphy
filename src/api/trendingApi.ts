import { axiosClient } from "./axiosClient"

const trendingApi = {
  getAll(){
    const url = `trending?api_key=${process.env.REACT_APP_API_KEY}`;
    return axiosClient.get(url);
  }
}
export default trendingApi;