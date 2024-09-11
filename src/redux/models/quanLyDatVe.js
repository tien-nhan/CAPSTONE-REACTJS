import { message } from "antd";
import QuanLyDatVeProvider from "../../data-access/ql-dat-ve-provider";

export default {
	state: { bookingDetails: {}, bookingSeats: [], bookingInfo: {} }, // initial state
	reducers: {
		// handle state changes with pure functions
		updateData(state, payload) {
			return { ...state, ...payload };
		},
		addBookingDetails(state, payload) {
			return { ...state, ...payload };
		},
		addBookingInfo(state, payload) {
			return { ...state, ...payload };
		},
		updateBookingSeats(state, payload) {
			const seatFound = state.bookingSeats.find(
				(seat) => seat.tenGhe === payload.tenGhe
			);
			if (seatFound) {
				const filteredBookingSeats = state.bookingSeats.filter(
					(seat) => seat.tenGhe !== seatFound.tenGhe
				);
				return { ...state, bookingSeats: filteredBookingSeats };
			} else if (!seatFound) {
				const newBookingSeats = [...state.bookingSeats, payload];
				return { ...state, bookingSeats: newBookingSeats };
			}
		},
		deleteBookingSeats(state, payload) {
			const newBookingSeats = [];
			return { ...state, bookingSeats: newBookingSeats };
		},
	},
	effects: (dispatch) => ({
		getBookingDetails: (id, state) => {
			return new Promise(async (resolve, reject) => {
				QuanLyDatVeProvider.fetchBookingDetails(id)
					.then((res) => {
						dispatch.quanLyDatVe.addBookingDetails({
							bookingDetails: res.content,
						});
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
		sendBookingSeats: (info, state) => {
			return new Promise(async (resolve, reject) => {
				QuanLyDatVeProvider.sendBookingInfo(info)
					.then((res) => {
						console.log(res);
						resolve(res);
						dispatch.quanLyDatVe.addBookingInfo({
							bookingInfo: res.content,
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
