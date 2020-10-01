import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Custom Hook

// Đăng nhập thì mới được phép vào Route
export default function useAuth() {
  const history = useHistory();
  const location = useLocation();
  const token = useSelector(state => state.Auth.ACCESS_TOKEN);
  useEffect(() => {
    if(!token) {
      history.push('/login');
    }
  }, [token, history, location])
}