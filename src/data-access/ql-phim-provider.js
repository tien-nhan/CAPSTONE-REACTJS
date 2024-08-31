import { client } from "../client/request";

export default {
	layDanhSachPhim: () => {
		return new Promise((resolve, reject) => {
			client
				.get(`/api/quanlyphim/laydanhsachphim`)
				.then((s) => {
					if (s?.statusCode === 200) {
						resolve(s?.content);
					} else reject(s?.content);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
	getMovies: (id) => {
		return new Promise((resolve, reject) => {
			client
				.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${id}`)
				.then((res) => {
					console.log(res);
					if (res?.statusCode === 200) {
						resolve(res?.content);
					} else reject(s?.content);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
	addNewFilm: (payload) => {
		const formData = new FormData();
		formData.append("tenPhim", payload.tenPhim);
		formData.append("moTa", payload.moTa);
		formData.append("ngayKhoiChieu", payload.ngayKhoiChieu);
		formData.append("sapChieu", payload.sapChieu);
		formData.append("dangChieu", payload.dangChieu);
		formData.append("hot", payload.hot);
		formData.append("danhGia", payload.danhGia);
		formData.append("File", payload.file);

		return new Promise((resolve, reject) => {
			client
				.post(
					`/api/quanlyphim/${
						payload.maPhim ? "capnhatphimupload" : "themphimuploadhinh"
					}`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				)
				.then((s) => {
					if (s?.statusCode === 200) {
						resolve(s);
					} else reject(s);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
	getDetailFilm: (maPhim) => {
		return new Promise((resolve, reject) => {
			client
				.get(`/api/quanlyphim/LayThongTinPhim?maPhim=${maPhim}`)
				.then((s) => {
					if (s?.statusCode === 200) {
						resolve(s?.content);
					} else reject(s?.content);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
	deleteFilm: (maPhim) => {
		return new Promise((resolve, reject) => {
			client
				.delete(`/api/quanlyphim/xoaphim/${maPhim}`)
				.then((s) => {
					if (s?.statusCode === 200) {
						resolve(s?.content);
					} else reject(s?.content);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
};
