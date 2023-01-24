import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/register">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
