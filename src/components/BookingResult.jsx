import React from "react";
import moment from "moment";

function BookingResult({ ticket, index }) {
	return (
		<div className="w-full p-2 md:w-1/2 lg:w-1/3" key={index}>
			<div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
				<img
					alt="team"
					className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
					src={ticket.hinhAnh}
				/>
				<div className="flex-grow">
					<h2 className="title-font text-2xl font-medium text-pink-500">
						{ticket.tenPhim}
					</h2>
					<p className="text-gray-500">
						<span className="font-bold">Giờ chiếu:</span>{" "}
						{moment(ticket.ngayDat).format("hh:mm A")} -{" "}
						<span className="font-bold">Ngày chiếu:</span>{" "}
						{moment(ticket.ngayDat).format("DD-MM-YYYY")} .
					</p>
					<p>
						<span className="font-bold">Địa điểm:</span>{" "}
						{ticket?.danhSachGhe.tenHeThongRap}{" "}
					</p>
					<p>
						<span className="font-bold">Tên rạp:</span>{" "}
						{ticket?.danhSachGhe.tenCumRap} -{" "}
						<span className="font-bold">Ghế:</span>{" "}
						{ticket.danhSachGhe.map((ghe, index) => {
							return (
								<span className="text-xl text-green-500" key={index}>
									{" "}
									[ {ghe.tenGhe} ]{" "}
								</span>
							);
						})}
					</p>
				</div>
			</div>
		</div>
	);
}

export default BookingResult;
