import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Component bảo vệ các route cần xác thực
 * @param {Object} props - Các props đầu vào
 * @param {ReactNode} [props.children] - Component con (cách 1)
 * @param {boolean} [props.redirectToLogin=true] - Có chuyển hướng về trang login không
 * @param {string} [props.redirectPath='/signin'] - Đường dẫn chuyển hướng
 * @returns {JSX.Element} - Component được bảo vệ hoặc redirect
 */
const ProtectedRoute = ({
  children,
  redirectToLogin = true,
  redirectPath = '/signin'
}) => {
  // Lấy thông tin user từ context
  const { currentUser } = useAuth();

  // Nếu không có user và yêu cầu chuyển hướng
  if (!currentUser && redirectToLogin) {
    // Chuyển hướng về trang login và thay thế history
    return <Navigate to={redirectPath} replace />;
  }

  // Nếu không có user nhưng không chuyển hướng
  if (!currentUser) {
    // Có thể return null hoặc fallback UI
    return <div className="unauthorized">Unauthorized access</div>;
  }

  // Sử dụng Outlet cho route config hoặc children cho component
  return children ? children : <Outlet />;
};

export default ProtectedRoute;