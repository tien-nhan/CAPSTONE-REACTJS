import { client } from "../client/request";

export default {
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
	getBookingDetails: (id) => {
		return new Promise((resolve, reject) => {
			client
				.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
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
};
