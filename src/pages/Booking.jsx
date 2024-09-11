import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
	CheckOutlined,
	CloseOutlined,
	UserOutlined,
	SmileOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import { Fragment, useEffect, useState } from "react";
import { Tabs } from "antd";
import Seats from "../components/Seats";
import BookingResults from "../components/BookingResults";

function Booking() {
	if (!localStorage.getItem("auth")) {
		return <Navigate to="/login" />;
	}

	const { id } = useParams();
	const {
		quanLyNguoiDung: { getUserBookingHistory },
		quanLyDatVe: { getBookingDetails, sendBookingSeats, deleteBookingSeats },
	} = useDispatch();

	const { auth } = useSelector((store) => store.auth);
	const { bookingDetails, bookingSeats } = useSelector(
		(store) => store.quanLyDatVe
	);

	const [seatInfo, setSeatInfo] = useState(null);

	useEffect(
		function () {
			getBookingDetails(id);
		},
		[id]
	);

	useEffect(function () {
		getUserBookingHistory();
	}, []);

	useEffect(
		function () {
			console.log(seatInfo);
			sendBookingSeats(seatInfo);
			getBookingDetails(id);
			deleteBookingSeats();
		},
		[seatInfo, id]
	);

	function onChange(key) {
		console.log(key);
	}

	const items = [
		{
			key: "1",
			label: "01 CHỌN GHẾ & THANH TOÁN",
			children: (
				<div className="mt-5 min-h-screen">
					<div className="grid grid-cols-12">
						<div className="col-span-9">
							<div className="mt-5 flex flex-col items-center">
								<div
									className="h-[15px] w-[80%] bg-black"
									style={{ width: "80%", height: 15 }}
								></div>
								<div className={` text-center`}>
									<h3 className="mt-3 text-black">Màn hình</h3>
								</div>
								<Seats />
							</div>
							<div className="mt-5 flex justify-center">
								<table className="w-2/3 divide-y divide-gray-200">
									<thead className="bg-gray-50 p-5">
										<tr>
											<th>Ghế chưa đặt</th>
											<th>Ghế đang đặt</th>
											<th>Ghế vip</th>
											<th>Ghế đã đặt</th>
											<th>Ghế mình đặt</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										<tr>
											<td>
												<button className="ghe text-center">
													<CheckOutlined
														style={{ marginBottom: 7.5, fontWeight: "bold" }}
													/>
												</button>
											</td>
											<td>
												<button className="ghe gheDangDat text-center">
													<CheckOutlined
														style={{ marginBottom: 7.5, fontWeight: "bold" }}
													/>
												</button>{" "}
											</td>
											<td>
												<button className="ghe gheVip text-center">
													<CheckOutlined
														style={{ marginBottom: 7.5, fontWeight: "bold" }}
													/>
												</button>
											</td>
											<td>
												<button className="ghe gheDaDat text-center">
													<CheckOutlined
														style={{ marginBottom: 7.5, fontWeight: "bold" }}
													/>
												</button>
											</td>
											<td>
												<button className="ghe gheDaDuocDat text-center">
													<CheckOutlined
														style={{ marginBottom: 7.5, fontWeight: "bold" }}
													/>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="col-span-3">
							<h3 className="text-center text-2xl text-green-600">
								{bookingSeats
									.reduce((total, seat) => {
										return (total = total + seat.giaVe);
									}, 0)
									.toLocaleString()}
								đồng
							</h3>
							<h3 className="text-xl">
								{bookingDetails?.thongTinPhim?.tenPhim}
							</h3>
							<p>Địa điểm: {bookingDetails?.thongTinPhim?.tenPhim}</p>
							<p>
								Ngày chiếu{bookingDetails?.thongTinPhim?.ngayChieu} -{" "}
								{bookingDetails?.thongTinPhim?.gioChieu}{" "}
								{bookingDetails?.thongTinPhim?.tenRap}:
							</p>
							<hr />
							<div className="my-5 flex">
								<div className="w-4/5">
									<span className="mr-1 text-lg text-red-400">Ghế:</span>
									{bookingSeats.map((bookingSeat, index) => {
										return (
											<span key={index} className="mr-2 text-xl text-green-500">
												{bookingSeat.tenGhe}
											</span>
										);
									})}
								</div>
								<div className="col-span-1 text-right">
									<span className="text-lg text-green-800"></span>
								</div>
							</div>
							<hr />
							<div className="my-5">
								<i>Email</i> <br />
								{auth.email}
							</div>
							<hr />
							<div className="my-5">
								<i>Phone</i> <br />
								{auth.soDT}
							</div>
							<hr />
							<div
								className="w-full cursor-pointer bg-green-500 py-3 text-center text-2xl font-bold text-white"
								onClick={() => {
									let maLichChieu = id;
									let danhSachVe = bookingSeats;
									const thongTinDatVe = {};
									thongTinDatVe.maLichChieu = maLichChieu;
									thongTinDatVe.danhSachVe = danhSachVe;
									setSeatInfo(thongTinDatVe);
								}}
							>
								Đặt vé
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			key: "2",
			label: "02 KẾT QUẢ ĐẶT VÉ",
			children: (
				<div className="p-5">
					<section className="body-font text-gray-600">
						<div className="container mx-auto px-5 py-24">
							<div className="mb-20 flex w-full flex-col text-center">
								<h1 className="title-font mb-4 text-2xl font-medium text-purple-600 sm:text-3xl">
									Lịch sử đặt vé khách hàng
								</h1>
								<p className="mx-auto text-base leading-relaxed lg:w-2/3">
									Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé
									!
								</p>
							</div>
							<div className="m-2 flex flex-wrap">
								<BookingResults />
							</div>
						</div>
					</section>
				</div>
			),
		},
	];

	return (
		<div>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</div>
	);
}

export default Booking;
