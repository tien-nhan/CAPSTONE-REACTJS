import Header from "../components/Header";
import HomeCarousel from "../components/HomeCarousel";
import Movies from "../components/Movies";
import Cinemas from "../components/Cinemas";
import Footer from "../components/Footer";

function Homepage() {
	return (
		<>
			<Header />
			<HomeCarousel />
			<Movies />
			<Cinemas />
			<Footer />
		</>
	);
}

export default Homepage;
