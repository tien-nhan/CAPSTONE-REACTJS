import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	CheckOutlined,
	CloseOutlined,
	UserOutlined,
	SmileOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import "./SeatStyle.css";

function Seat({ seat, index }) {
	const { auth } = useSelector((store) => store.auth);

	const { bookingSeats } = useSelector((store) => store.quanLyDatVe);
	const {
		quanLyDatVe: { updateBookingSeats },
	} = useDispatch();

	let classVipSeat = seat.loaiGhe === "Vip" ? "gheVip" : "";
	let classBookedSeat = seat.daDat === true ? "gheDaDat" : "";
	let classBookingSeat = "";
	let classBookedSeatByUser = "";

	let indexBookingSeat = bookingSeats?.findIndex(
		(bookingSeat) => bookingSeat.tenGhe === seat.tenGhe
	);

	if (indexBookingSeat !== -1) {
		classBookingSeat = "gheDangDat";
	}

	if (auth.taiKhoan === seat.taiKhoanNguoiDat) {
		classBookedSeatByUser = "gheDaDuocDat";
	}

	return (
		<Fragment key={index}>
			<button
				disabled={seat.daDat}
				className={`ghe ${classVipSeat} ${classBookedSeat} ${classBookingSeat} ${classBookedSeatByUser} text-center`}
				onClick={() => updateBookingSeats(seat)}
			>
				{seat.daDat ? (
					classBookedSeatByUser ? (
						<UserOutlined className="mb-8 font-bold" />
					) : (
						<CloseOutlined className="mb-2 font-bold" />
					)
				) : (
					seat.tenGhe
				)}
			</button>
			{(index + 1) % 16 === 0 ? <br /> : ""}
		</Fragment>
	);
}

export default Seat;
