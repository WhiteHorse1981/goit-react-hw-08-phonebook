import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './LoginPage.module.css';
import { Button } from '@mui/material';
import { loginThunk } from 'redux/user.thunk';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();

  const hendlerSubmit = e => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.BoxLoginPage}>
      <h1 className={css.TitleLoginPage}>
        Enter your email and password to access the app.
      </h1>
      <form className={css.FormLoginPage} onSubmit={hendlerSubmit}>
        <label>
          Email:
          <input
            className={css.InputLoginPage}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className={css.InputLoginPage}
            type={visiblePassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span
            className={css.ShowPasswordLoginPage}
            onClick={() => setVisiblePassword(!visiblePassword)}
          >
            {visiblePassword ? 'hide' : 'show'} password
          </span>
        </label>
        <Button size="small" variant="contained" type="submit">
          LogIn
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
