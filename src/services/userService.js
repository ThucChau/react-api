import { api } from './index';

const userService = {
  getUserById({ userId }) {
    return api
    // phải gọi đến function có Authenrization
      .callWithAuth()
      .get(`/member/member.php?userid=${userId}`);
  },

  updateProfile(formData) {
    return api
      .callWithAuth({'accept': 'multipart/form-data'})
      .post('/member/update.php', formData);
  }
}

export default userService;