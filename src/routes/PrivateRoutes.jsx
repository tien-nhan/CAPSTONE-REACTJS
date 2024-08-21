import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  return  <Outlet />
  // return auth?.maLoaiNguoiDung === "QuanTri" ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" />
  // );
};
export default PrivateRoute;
