import { client } from "../client/request";

export default {
	getBookingHistory: () => {
		return new Promise((resolve, reject) => {
			client
				.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
				.then((res) => {
					if (res?.statusCode === 200) {
						resolve(res);
					} else reject(res);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},
	fetchBookingDetails: (id) => {
		return new Promise((resolve, reject) => {
			client
				.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
				.then((res) => {
					if (res?.statusCode === 200) {
						resolve(res);
					} else reject(res);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},

	sendBookingInfo: (info) => {
		return new Promise((resolve, reject) => {
			client
				.post(`/api/QuanLyDatVe/DatVe`, info)
				.then((res) => {
					console.log(res);
					if (res?.statusCode === 200) {
						resolve(res);
					} else reject(res);
				})
				.catch((e) => {
					reject(e);
				});
		});
	},

	taoLichChieu: (payload) => {
		return new Promise((resolve, reject) => {
			client
				.post(`/api/QuanLyDatVe/TaoLichChieu`, payload)
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
};
