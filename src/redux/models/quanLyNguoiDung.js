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
    getThongTinTaiKhoan: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        quanlynguoidungProvider
          .getThongTinTaiKhoan()
          .then((s) => {
            resolve(s);
            dispatch.quanLyNguoiDung.updateData({ thongTinTaiKhoan: s });
          })
          .catch((e) => {
            message.error(e.message);
            reject(e);
          });
      });
    },
    capNhatThongTinNguoiDungPut: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        quanlynguoidungProvider
          .capNhatThongTinNguoiDungPut(payload)
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
    capNhatThongTinNguoiDung: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        quanlynguoidungProvider
          .capNhatThongTinNguoiDung(payload)
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
    themNguoiDung: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        quanlynguoidungProvider
          .themNguoiDung(payload)
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
    layDanhSachNguoiDung: (param, state) => {
      return new Promise(async (resolve, reject) => {
        quanlynguoidungProvider
          .layDanhSachNguoiDung(param)
          .then((s) => {
            resolve(s);
            dispatch.quanLyNguoiDung.updateData({ dsNguoiDung: s });
          })
          .catch((e) => {
            message.error(e.message);
            reject(e);
          });
      });
    },
  }),
};
