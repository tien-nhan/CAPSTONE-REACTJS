import { message } from "antd";
import QuanLyDatVeProvider from "../../data-access/ql-dat-ve-provider";

export default {
  state: {}, // initial state
  reducers: {
    // handle state changes with pure functions
    updateData(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
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
