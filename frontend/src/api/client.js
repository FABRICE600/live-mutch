import axios from 'axios';
const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:5000/api',timeout:20000});
export const request=async path=>(await api.get(path)).data.data;
export default api;
