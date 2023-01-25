import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout/Layout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { curentUserThunk } from 'redux/user.thunk';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(curentUserThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
