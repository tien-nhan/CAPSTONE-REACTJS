import React from "react";
import { useSelector } from "react-redux";
import BookingResult from "./BookingResult";

function BookingResults() {
	const { userInfo } = useSelector((store) => store.quanLyNguoiDung);

	return (
		<>
			{userInfo?.thongTinDatVe?.map((ticket, index) => {
				return <BookingResult ticket={ticket} index={index} />;
			})}
		</>
	);
}

export default BookingResults;
