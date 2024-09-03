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

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route
					exact
					path="/"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<Homepage />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path="contact"
				element={
					<Suspense fallback={<div>loading...</div>}>
						<Contact />
					</Suspense>
				}
			/>
			<Route
				path="news"
				element={
					<Suspense fallback={<div>loading...</div>}>
						<News />
					</Suspense>
				}
			/>
			<Route
				path="details/:id"
				element={
					<Suspense fallback={<div>loading...</div>}>
						<Details />
					</Suspense>
				}
			/>

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
					path="films"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<Films />
						</Suspense>
					}
				/>
				<Route
					exact
					path="films/addnew"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<AddNewFilm />
						</Suspense>
					}
				/>
				<Route
					exact
					path="films/edit/:maPhim"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<AddNewFilm />
						</Suspense>
					}
				/>{" "}
				<Route
					exact
					path="films/showtime/:maPhim"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<ShowTime />
						</Suspense>
					}
				/>
				<Route
					exact
					path="quanlynguoidung"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<QuanLyNguoiDung />
						</Suspense>
					}
				/>
				<Route
					exact
					path="quanlynguoidung/addnew"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<AddNewNguoiDung />
						</Suspense>
					}
				/>
				<Route
					exact
					path="quanlynguoidung/edit"
					element={
						<Suspense fallback={<div>loading...</div>}>
							<AddNewNguoiDung />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path="login"
				element={
					<Suspense fallback={<div>loading...</div>}>
						<Login></Login>
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
			<Route
				path="thongtincanhan"
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
							<Information></Information>
						</Suspense>
					}
				></Route>
			</Route>

			<Route path="*" element={<div>404</div>}></Route>
		</Routes>
	);
};

export default AppRoutes;
