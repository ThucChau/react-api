import axios from 'axios';
import { storage } from '../helpers';

const baseUrl = 'http://api-meme-zendvn-01.herokuapp.com/api';

const api = {
  call() {
    return axios.create({
      timeout: 10000,
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },

  callWithAuth(header = {}) {
    const token = storage.getToken();
    return axios.create({
      timeout: 10000,
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...header
      }
    })
  }
}

export default api;