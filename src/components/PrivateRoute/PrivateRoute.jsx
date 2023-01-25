import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorToken } from 'redux/selector';

const PrivateRoute = () => {
  const token = useSelector(selectorToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
