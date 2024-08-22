import { message } from "antd";
import quanLyRapProvider from "../../data-access/ql-rap-provider";

export default {
  state: {}, // initial state
  reducers: {
    // handle state changes with pure functions
    updateData(state, payload) {
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
