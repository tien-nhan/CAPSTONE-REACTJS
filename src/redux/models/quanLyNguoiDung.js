import { message } from "antd";
import quanlynguoidungProvider from "../../data-access/ql-nguoi-dung-provider";

export default {
  state: {}, // initial state
  reducers: {
    // handle state changes with pure functions
    updateData(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    layDanhSachLoaiNguoiDung: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        quanlynguoidungProvider
          .layDanhSachLoaiNguoiDung()
          .then((s) => {
            resolve(s);
            dispatch.quanLyNguoiDung.updateData({ dsLoaiNguoiDung: s });
          })
          .catch((e) => {
            message.error(e.message);
            reject(e);
          });
      });
    },
  }),
};
