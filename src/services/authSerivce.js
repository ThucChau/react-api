import { api } from './index';

const authService = {
  login({ email, password }) {
    return api.call().post('/member/login.php', {email, password})
  }
}

export default authService;