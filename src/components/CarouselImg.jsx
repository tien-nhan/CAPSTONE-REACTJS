function CarouselImg({ carouselBanner, styles }) {
	return carouselBanner?.map((item, index) => (
		<div key={index}>
			<div style={{ ...styles, backgroundImage: `url(${item.hinhAnh})` }}>
				<img
					src={item.hinhAnh}
					alt={item.hinhAnh}
					className="h-full w-full opacity-0"
				/>
			</div>
		</div>
	));
}

export default CarouselImg;
