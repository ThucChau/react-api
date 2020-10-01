import { parseJWT } from '../helpers';

const keyTOKEN = 'MEME_TOKEN';

const storage = {
  setToken(token) {
    localStorage.setItem(keyTOKEN, token);
  },
  getToken() {
    const token = localStorage.getItem(keyTOKEN);
    try {
      const parseObj = parseJWT(token);
      if(parseObj?.id) {
        return token;
      }else {
        return "";
      }
    } catch (error) {
      return "";
    }
  }
}

export default storage;