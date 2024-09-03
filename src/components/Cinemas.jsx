import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

function Cinemas() {
	const cinemasState = useSelector((store) => store.quanLyRap);

	const {
		quanLyRap: { getCinemas },
	} = useDispatch();

	const [tabPosition, setTabPosition] = useState("left");

	useEffect(function () {
		getCinemas();
	}, []);

	return (
		<>
			<Tabs
				tabPosition={tabPosition}
				items={cinemasState.cinemas.map((item, index) => {
					return {
						label: <img src={item.logo} className="rounded-full" width="50" />,
						key: index,
						children: (
							<Tabs
								tabPosition={tabPosition}
								items={item.lstCumRap.map((cinema, index) => {
									return {
										label: (
											<div className="flex w-[300px]">
												<img
													src="https://movie-booking-project.vercel.app/img/cumRap/bhd-star-vincom-quang-trung-16105960645760.png"
													className="rounded-full"
													width="50"
												/>
												<div className="ml-2 text-left">
													{cinema.tenCumRap}
													<p className="text-red-500">Chi tiết</p>
												</div>
											</div>
										),
										key: index,
										children: cinema.danhSachPhim.map((movie, index) => {
											return (
												<div className="my-3 flex" key={index}>
													<div className="flex">
														<img
															className="h-[50px] w-[50px]"
															src={movie.hinhAnh}
															alt={movie.tenPhim}
														/>
														<div className="ml-2">
															<h1 className="text-sm text-green-700">
																{movie.tenPhim}
															</h1>
															<p>{cinema.diaChi}</p>
															<div className="grid grid-cols-6 gap-2">
																{movie.lstLichChieuTheoPhim
																	.slice(0, 10)
																	.map((schedule, index) => {
																		return (
																			<NavLink
																				to="/"
																				key={index}
																				className="text-blue-600"
																			>
																				{moment(
																					schedule.ngayChieuGioChieu
																				).format("hh:mm A")}
																			</NavLink>
																		);
																	})}
															</div>
														</div>
													</div>
												</div>
											);
										}),
									};
								})}
							/>
						),
					};
				})}
			/>
		</>
	);
}

export default Cinemas;
