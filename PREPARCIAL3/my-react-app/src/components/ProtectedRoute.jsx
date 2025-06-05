import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const userType = useSelector((state) => state.auth.userType);
  return userType === 'admin' ? children : <Navigate to="/" />;
}
export default ProtectedRoute;