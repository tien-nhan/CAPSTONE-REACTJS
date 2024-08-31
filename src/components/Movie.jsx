import { NavLink } from "react-router-dom";

function Movie({ item }) {
	return (
		<div className="relative mr-2 h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pb-24 pt-16 text-center">
			<div
				style={{
					background: `url(${item.hinhAnh})`,
					backgroundPosition: "center",
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat",
				}}
			>
				<img
					src={item.hinhAnh}
					alt={item.tenPhim}
					className="h-[300px] w-full opacity-0"
				/>
			</div>
			<h1 className="title-font my-3 h-16 text-xl font-medium text-gray-900 sm:text-2xl">
				{item.tenPhim}
			</h1>
			<p className="my-5 h-16 leading-relaxed">
				{item.moTa.length > 100 ? (
					<span>{item.moTa.slice(0, 100)} ...</span>
				) : (
					<span>{item.moTa}</span>
				)}
			</p>
			<NavLink
				to={`/details/${item.maPhim}`}
				className="my-4 inline-flex items-center justify-center rounded-lg bg-orange-500 p-2 text-center text-white"
			>
				ĐẶT VÉ
				<svg
					className="ml-2 h-4 w-4"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M5 12h14" />
					<path d="M12 5l7 7-7 7" />
				</svg>
			</NavLink>
		</div>
	);
}

export default Movie;
