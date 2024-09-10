import { message } from "antd";
import QuanLyDatVeProvider from "../../data-access/ql-dat-ve-provider";

export default {
	state: { bookingDetails: {}, bookingSeats: [] }, // initial state
	reducers: {
		// handle state changes with pure functions
		updateData(state, payload) {
			return { ...state, ...payload };
		},
		updateBookingDetails(state, payload) {
			return { ...state, ...payload };
		},
	},
	effects: (dispatch) => ({
		getBookingDetails: (id, state) => {
			return new Promise(async (resolve, reject) => {
				QuanLyDatVeProvider.getBookingDetails(id)
					.then((res) => {
						console.log(res.content);
						resolve(res);
						dispatch.quanLyDatVe.updateBookingDetails({
							bookingDetails: res.content,
						});
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
		taoLichChieu: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				QuanLyDatVeProvider.taoLichChieu(payload)
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
