import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {path} from '../../constants';

// không login thì mới được phép vào
export default function useNotAuth() {
  const location = useLocation();
  const history = useHistory();
  const token = useSelector(state => state.Auth.ACCESS_TOKEN);

  useEffect(() => {
    if(token) {     
      history.push(path.HOMEPAGE);
    }
  }, [location, history, token])
}