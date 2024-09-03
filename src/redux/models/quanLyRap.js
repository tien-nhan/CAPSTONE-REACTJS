import { message } from "antd";
import quanLyRapProvider from "../../data-access/ql-rap-provider";
import { GROUPID } from "../../client/api";

export default {
	state: { cinemas: [] }, // initial state
	reducers: {
		// handle state changes with pure functions
		updateData(state, payload) {
			return { ...state, ...payload };
		},
		updateCinemas(state, payload) {
			return { ...state, ...payload };
		},
	},
	effects: (dispatch) => ({
		layThongTinHeThongRap: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyRapProvider
					.layThongTinHeThongRap()
					.then((s) => {
						dispatch.quanLyRap.updateData({ dsHeThongRap: s });
						resolve(s);
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
		getCinemas: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				quanLyRapProvider.getCinemas(GROUPID).then((res) => {
					console.log(res);
					dispatch.quanLyRap.updateCinemas({
						cinemas: res,
					});
				});
			});
		},
		layThongTinCumRap: (maHeThongRap, state) => {
			return new Promise(async (resolve, reject) => {
				if (maHeThongRap) {
					quanLyRapProvider
						.layThongTinCumRap(maHeThongRap)
						.then((s) => {
							dispatch.quanLyRap.updateData({ dsCumRap: s });
							resolve(s);
						})
						.catch((e) => {
							message.error(e.message);
							reject(e);
						});
				} else {
					dispatch.quanLyRap.updateData({ dsCumRap: [] });
				}
			});
		},
	}),
};
