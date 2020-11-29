import axios from 'axios';
import TokenUtil from './token';

const Api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TokenUtil.get() || ''}`
  }
});

export default Api;
