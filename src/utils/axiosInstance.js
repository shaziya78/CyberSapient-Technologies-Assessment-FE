import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:"https://cybersapient-technologies-assessment-be.onrender.com/api",
    withCredentials:true,
});

export default axiosInstance;
