import { message } from "antd";
import quanLyPhimProvider from "../../data-access/ql-phim-provider";

export default {
  state: {}, // initial state
  reducers: {
    // handle state changes with pure functions
    updateData(state, payload) {
      return { ...state, ...payload };
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
