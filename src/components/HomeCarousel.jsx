import { Carousel } from "antd";

const carouselBanner = {
	maBanner: 1,
	maPhim: 1282,
	hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
};

const contentStyle = {
	height: "600px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	backgroundPosition: "center",
	backgroundSize: "100%",
	backgroundRepeat: "no-repeat",
};

const onChange = (currentSlide) => {
	console.log(currentSlide);
};

function HomeCarousel() {
	return (
		<Carousel afterChange={onChange}>
			<div
				style={{
					...contentStyle,
					backgroundImage: `url(${carouselBanner.hinhAnh})`,
				}}
			>
				<img
					src={carouselBanner.hinhAnh}
					alt={carouselBanner.hinhAnh}
					className="h-full w-full"
				/>
			</div>
		</Carousel>
	);
}

export default HomeCarousel;
