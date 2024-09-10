import { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import Header from "../components/Header";
import moment from "moment/moment";
import Footer from "../components/Footer";

function Details() {
	const { id } = useParams();
	const schedules = useSelector((store) => store.quanLyRap.schedules);
	console.log(schedules);

	const {
		quanLyRap: { getSchedules },
	} = useDispatch();

	const [tabPosition, setTabPosition] = useState("left");

	useEffect(function () {
		getSchedules(id);
	}, []);

	return (
		<>
			<Header />
			<div
				style={{
					backgroundImage: `url(${schedules.hinhAnh})`,
					backgroundSize: "100%",
					backgroundPosition: "center",
					minHeight: "100vh",
				}}
				className="pt-7"
			>
				<div className="grid grid-cols-12">
					<div className="col-span-5 col-start-3">
						<div className="grid grid-cols-3">
							<img
								className="h col-span-1 h-[300px] w-full"
								src={schedules.hinhAnh}
								alt=""
							/>
							<div className="col-span-2 ml-5">
								<p className="mb-4 text-sm">
									{moment(schedules.ngayKhoiChieu).format("DD.MM.YYYY")}
								</p>
								<p className="mb-4 text-4xl">{schedules.tenPhim}</p>
								<p>{schedules.moTa}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto mt-20 w-2/3 bg-slate-100 p-6">
					<Tabs
						tabPosition={tabPosition}
						items={schedules.heThongRapChieu?.map((cinema, index) => {
							return {
								label: (
									<div className="flex items-center justify-center">
										<img
											src={cinema.logo}
											className="rounded-full"
											width="50"
										/>
										<div className="ml-2 text-center">
											{cinema.tenHeThongRap}
										</div>
									</div>
								),
								key: index,
								children: (
									<Tabs
										tabPosition={tabPosition}
										items={cinema.cumRapChieu?.map((cumRap, item) => {
											return {
												label: (
													<div className="mt-5">
														<div className="flex">
															<img
																src="https://movie-booking-project.vercel.app/img/cumRap/bhd-star-vincom-quang-trung-16105960645760.png"
																className="h-[50px] w-[50px] rounded-full"
															/>
															<div className="ml-2 text-center">
																{cumRap.tenCumRap}
															</div>
														</div>
													</div>
												),
												key: item,
												children: (
													<div className="w-full">
														<div className="mb-3 flex w-full">
															<div className="flex w-[20%] items-start justify-center pt-4">
																<img
																	src={cumRap.hinhAnh}
																	className="rounded-full"
																	width="50"
																	height="50"
																/>
															</div>
															<div className="ml-2 h-full">
																<h3 className="ml-2 text-left text-blue-600">
																	{cumRap.diaChi}
																</h3>
																<div className="ml-2 mt-3 grid h-full w-full grid-cols-4 gap-2">
																	{cumRap.lichChieuPhim?.map((lich, index) => {
																		return (
																			<NavLink
																				to={`/booking/${lich.maLichChieu}`}
																				key={index}
																				className="text-blue-600"
																			>
																				{moment(lich.ngayChieuGioChieu).format(
																					"hh:mm A"
																				)}
																			</NavLink>
																		);
																	})}
																</div>
															</div>
														</div>
													</div>
												),
											};
										})}
									/>
								),
							};
						})}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Details;
