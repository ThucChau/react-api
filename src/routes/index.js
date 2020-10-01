import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import UserDetail from '../pages/UserDetail';
import UserProfile from '../pages/UserProfile/UserProfile';

import { path } from '../constants';

export const Routes = [
  {
    path: path.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: path.REGISTER,
    exact: true,
    component: Register,
  },
  {
    path: path.HOMEPAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: path.USER_PROFILE,
    exact: true,
    component: UserProfile,
  },
  {
    path: path.USER_DETAIL,
    exact: true,
    component: UserDetail,
  }
]
