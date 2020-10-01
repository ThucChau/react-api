import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../constants/path';
import './style.css';

function LoginForm({ handleLogin }) {
  // chúng ta cần thu thập dữ liệu của Email và Password -> nhấn Submit và bắt đầu gọi API
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // const handleValidation = (target) => {
  //   const { name, value } = target;
  //   const fieldValidationErrors = formState.formErrors;
  //   const validity = formState.formValidity;
  //   const isEmail = name === 'email';
  //   const isPassword = name === 'password';
  //   const emailTest = /\S+@\S+\.\S+/;
  //   const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;

  //   validity[name] = value.length > 0;
  //   fieldValidationErrors[name] = validity[name]
  //     ? ''
  //     : `${name} is required and cannot be empty`;

  //   if (validity[name]) {
  //     if (isEmail) {
  //       validity[name] = emailTest.test(value);
  //       fieldValidationErrors[name] = validity[name]
  //         ? ''
  //         : `${name} should be a valid email address`;
  //     }
  //     if (isPassword) {
  //       validity[name] = passwordTest.test(value);
  //       fieldValidationErrors[name] = validity[name]
  //         ? ''
  //         : `${name} should be 6 characters minimum and have normal, capitalize characters and numbers`;
  //     }
  //   }

    const onChangeFormData = (keyField) => (e) => {
      setForm({
        ...form, // lấy lại data cũ trong Form
        [keyField]: e.target.value
      })
    }
    const onSubmitLoginForm = (e) => {
      e.preventDefault();
      // truyền ngược data ra Login
      if (handleLogin) {
        handleLogin(form);
      }
    }
    return (
      <form className="login-form">
        <h1>LOGIN</h1>
        <div className="txtb">
          <input
            type="text"
            placeholder="Tài khoản"
            value={form.email}
            onChange={onChangeFormData('email')}
          />
        </div>
        <div className="txtb">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={onChangeFormData('password')}
          />
        </div>
        <button type="submit" className="logbtn" onClick={onSubmitLoginForm}>Đăng nhập</button>
        <div className="bottom-text">
          Quên mật khẩu? <Link to={path.REGISTER}>Đăng ký</Link>
        </div>
      </form>
    );
  }

  export default LoginForm;