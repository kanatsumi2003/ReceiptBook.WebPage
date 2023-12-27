// axiosInstance.ts
import axios from 'axios';
import { HOST_API } from '../config';

const instance = axios.create({
  baseURL: HOST_API, // Use your environment variable
});

export default instance;
