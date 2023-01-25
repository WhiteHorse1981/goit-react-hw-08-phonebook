import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectorToken } from 'redux/selector';
import css from './Navigation.module.css';

import { useState } from 'react';
import { Tab, Tabs, Button } from '@mui/material';
import { logOutThunk } from 'redux/user.thunk';

function Navigation() {
  const [index, onChange] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);

  return (
    <div>
      <header className={css.Header}>
        <nav className={css.BoxNavigate}>
          {(!token && (
            <Tabs
              variant={'fullWidth'}
              centered
              value={index}
              onChange={(e, val) => onChange(val)}
            >
              <Tab
                disableRipple
                label={
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.NavLinkActive : css.NavLink
                    }
                    to="/register"
                  >
                    Sign Up
                  </NavLink>
                }
              ></Tab>
              <Tab
                disableRipple
                label={
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.NavLinkActive : css.NavLink
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                }
              ></Tab>
            </Tabs>
          )) ||
            (<NavLink to="/contacts">Contacts</NavLink> && (
              <Button
                size="small"
                variant="contained"
                type="button"
                onClick={() => dispatch(logOutThunk())}
              >
                Log Out
              </Button>
            ))}
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
