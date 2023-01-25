import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './RegisterPage.module.css';
import { Button } from '@mui/material';
import { registerThunk } from 'redux/user.thunk';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <div className={css.BoxRegisterPage}>
      <h1 className={css.TitleRegisterPage}>
        Register to use the phone book application.
      </h1>
      <form className={css.FormRegisterPage} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className={css.InputRegisterPage}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail:
          <input
            className={css.InputRegisterPage}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className={css.InputRegisterPage}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <Button size="small" variant="contained" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;
