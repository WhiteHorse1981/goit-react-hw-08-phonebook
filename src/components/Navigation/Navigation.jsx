import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/user.slice';

function Navigation() {
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/register">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <button type="button" onClick={() => dispatch(logOutThunk())}>
          Log Out
        </button>
      </header>
    </div>
  );
}

export default Navigation;
