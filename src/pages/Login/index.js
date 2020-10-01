import React from 'react';
import { asyncHandleLogin } from '../../actions/auth';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {path} from '../../constants';
import { useNotAuth } from '../../helpers';

function Login(props) {
  useNotAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogin = (formData) => {
    console.log('action');
    const { email, password } = formData;
    dispatch(asyncHandleLogin({ email, password }))
      .then(res => {
        if(res.ok) {
          history.push(path.HOMEPAGE);
        }else {
          console.log('Lỗi đăng nhập...');
        }
      })
  }

  return (
    <main>
      <LoginForm handleLogin={handleLogin} />
    </main>
  );
}

export default Login;