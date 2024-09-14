import { message } from "antd";
import authProvider from "../../data-access/auth-provider";

export default {
	state: { auth: JSON.parse(localStorage.getItem("auth") || "{}") },
	reducers: {
		// handle state changes with pure functions
		updateData(state, payload) {
			return { ...state, ...payload };
		},
		deleteAuth(state, payload) {
			return { ...state, auth: {} };
		},
	},
	effects: (dispatch) => ({
		// handle state changes with impure functions.
		// use async/await for async actions
		onLogin: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				authProvider
					.login(payload)
					.then((s) => {
						message.success("Đăng nhập thành công");
						dispatch.auth.updateData({ auth: s });
						localStorage.setItem("access_token", s?.accessToken);
						localStorage.setItem("auth", JSON.stringify(s));

						resolve(s);
					})
					.catch((e) => {
						message.error(e.message);
						reject(e);
					});
			});
		},
		onRegister: (payload, state) => {
			return new Promise(async (resolve, reject) => {
				authProvider
					.register(payload)
					.then((s) => {
						message.success("Đăng ký thành công");
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
