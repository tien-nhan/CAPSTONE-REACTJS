import { message } from "antd";
import quanLyPhimProvider from "../../data-access/ql-phim-provider";
import { GROUPID } from "../../client/api";

export default {
	state: {
		movies: [
			{
				maPhim: 14060,
				tenPhim: "Người sắt 4",
				biDanh: "nguoi-sat-4",
				trailer: "https://youtu.be/SwwlFvOwkhA",
				hinhAnh:
					"https://movienew.cybersoft.edu.vn/hinhanh/nguoi-sat-4_gp01.png",
				moTa: "Do you know that iron man is a really rich man ?",
				maNhom: "GP01",
				ngayKhoiChieu: "2024-06-07T00:00:00",
				danhGia: 10,
				hot: true,
				dangChieu: true,
				sapChieu: true,
			},
		],
		movieListsFilter: [],
	}, // initial state
	reducers: {
		// handle state changes with pure functions
		updateData(state, payload) {
			return { ...state, ...payload };
		},

		updateMovies(state, payload) {
			return { ...state, ...payload };
		},
		setIsShowingMovies(state) {
			state.movies = state.movieListsFilter.filter((movie) => movie.dangChieu);
			return { ...state };
		},
		setComingSoonMovies(state) {
			state.movies = state.movieListsFilter.filter((movie) => movie.sapChieu);
			return { ...state };
		},
	},
	effects: (dispatch) => ({
		layDanhSachPhim: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyPhimProvider
					.layDanhSachPhim()
					.then((s) => {
						dispatch.quanLyPhim.updateData({ dsPhim: s });
						resolve(s);
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
		getMovies: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyPhimProvider.getMovies(GROUPID).then((res) => {
					console.log(res);
					dispatch.quanLyPhim.updateMovies({
						movies: res,
						movieListsFilter: res,
					});
				});
			});
		},
		addNewFilm: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyPhimProvider
					.addNewFilm(payload)
					.then((s) => {
						message.success(s.message);
						resolve(s);
					})
					.catch((e) => {
						message.error(e?.message);
						reject(e);
					});
			});
		},
		getDetailFilm: (maPhim, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyPhimProvider
					.getDetailFilm(maPhim)
					.then((s) => {
						resolve(s);
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
		deleteFilm: (maPhim, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyPhimProvider
					.deleteFilm(maPhim)
					.then((s) => {
						message.success(s.message);
						resolve(s);
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
	}),
};
