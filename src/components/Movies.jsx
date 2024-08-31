import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./Movie";

function Movies() {
	const moviesState = useSelector((store) => store.quanLyPhim);
	console.log(moviesState);
	const {
		quanLyPhim: { getMovies, setIsShowingMovies, setComingSoonMovies },
	} = useDispatch();

	useEffect(function () {
		getMovies();
	}, []);

	return (
		<div className="py-3">
			<div className="px-5">
				<button
					className="mr-5 rounded bg-gray-800 px-8 py-3 font-semibold text-white"
					onClick={() => setIsShowingMovies()}
				>
					Phim đang chiếu
				</button>
				<button
					className="rounded border border-gray-800 bg-white px-8 py-3 font-semibold text-gray-800"
					onClick={() => setComingSoonMovies()}
				>
					Phim sắp chiếu
				</button>
			</div>
			<div className="container text-gray-600">
				<div className="container mx-auto px-5 py-5">
					<div className="grid grid-cols-4 justify-center gap-3">
						{moviesState.movies.map((item, index) => (
							<Movie key={index} item={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Movies;
