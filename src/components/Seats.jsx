import React from "react";
import { useSelector } from "react-redux";
import Seat from "./Seat";

function Seats() {
	const { bookingDetails } = useSelector((store) => store.quanLyDatVe);

	return (
		<div>
			{bookingDetails?.danhSachGhe?.map((seat, index) => {
				return <Seat seat={seat} index={index} />;
			})}
		</div>
	);
}

export default Seats;
