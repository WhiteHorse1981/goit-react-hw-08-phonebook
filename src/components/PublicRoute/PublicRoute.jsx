import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorToken } from 'redux/selector';

const PublicRoute = () => {
  const token = useSelector(selectorToken);

  console.log(token);
  return token ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
