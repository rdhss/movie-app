import axios from "axios"; 

const axiosInstance = axios.create({
  baseURL : `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`,
  headers: {

  }, 
});

export default axiosInstance;