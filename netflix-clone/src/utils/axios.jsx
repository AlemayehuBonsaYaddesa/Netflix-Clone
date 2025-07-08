import axios from '../utils/axios'
const instance = axios.crear({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;