import { AppleOutlined, FacebookOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function Footer() {
	const cinemaState = useSelector((store) => store.quanLyRap);

	return (
		<footer className="bg-coolGray-100 text-coolGray-900 bg-gray-800 py-6">
			<div className="container mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:space-y-12">
				<div className="grid grid-cols-12">
					<div className="col-span-full pb-6 md:col-span-6 md:pb-0">
						<a
							href="#"
							className="flex justify-center space-x-3 text-black md:justify-start"
						>
							<img
								src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
								alt="cyberlearn.vn"
							/>
						</a>
					</div>
					<div className="col-span-6 text-center md:col-span-3 md:text-left">
						<p className="pb-1 text-lg font-medium text-white">PARTNER</p>
						<div className="grid grid-cols-3 gap-3 text-white">
							{cinemaState?.cinemas.map((cinema, index) => {
								return (
									<div key={index}>
										<img src={cinema.logo} className="w-[50px]" />
									</div>
								);
							})}
						</div>
					</div>
					<div className="col-span-6 text-center text-white md:col-span-3 md:text-left">
						<p className="pb-1 text-lg font-medium">Mobile app</p>
						<div className="flex text-white">
							<div className="mr-5">
								<AppleOutlined className="text-2xl" />
							</div>
							<div>
								<FacebookOutlined className="text-2xl" />
							</div>
						</div>
					</div>
				</div>
				<div className="grid justify-center pt-6 text-white lg:justify-between">
					<div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
						<span>©2021 All rights reserved</span>
					</div>

					<div className=""></div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
