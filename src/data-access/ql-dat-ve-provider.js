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
};
