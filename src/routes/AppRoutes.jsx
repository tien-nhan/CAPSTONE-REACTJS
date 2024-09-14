import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Films from "../pages/Films";
import AddNewFilm from "../pages/AddNewFilm";
import AddNewNguoiDung from "../pages/AddNewNguoiDung";
import ShowTime from "../pages/ShowTime";
import Information from "../pages/Information";
import QuanLyNguoiDung from "../pages/QuanLyNguoiDung";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Details from "../pages/Details";
import Booking from "../pages/Booking";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Homepage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/news"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <News />
          </Suspense>
        }
      />
      <Route
        path="/details/:id"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Details />
          </Suspense>
        }
      />
      <Route
        path="/booking/:id"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Booking />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PrivateRoute />
          </Suspense>
        }
      >
        <Route
          path="films"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Films />
            </Suspense>
          }
        />
        <Route
          path="films/addnew"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewFilm />
            </Suspense>
          }
        />
        <Route
          path="films/edit/:maPhim"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewFilm />
            </Suspense>
          }
        />
        <Route
          path="films/showtime/:maPhim"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <ShowTime />
            </Suspense>
          }
        />
        <Route
          path="quanlynguoidung"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <QuanLyNguoiDung />
            </Suspense>
          }
        />
        <Route
          path="quanlynguoidung/addnew"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewNguoiDung />
            </Suspense>
          }
        />
        <Route
          path="quanlynguoidung/edit"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewNguoiDung />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/thongtincanhan"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PrivateRoute />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Information />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;