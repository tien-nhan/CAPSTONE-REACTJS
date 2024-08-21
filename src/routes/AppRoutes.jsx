import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <div>home</div>
            </Suspense>
          }
        />
      </Route>
      <Route
        path="admin"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PrivateRoute />
          </Suspense>
        }
      >
        <Route
          exact
          path=""
          element={
            <Suspense fallback={<div>loading...</div>}>
              <div>home</div>
            </Suspense>
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Login></Login>
            <></>
          </Suspense>
        }
      ></Route>
      <Route
        path="register"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Register></Register>
          </Suspense>
        }
      ></Route>

      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
};

export default AppRoutes;
