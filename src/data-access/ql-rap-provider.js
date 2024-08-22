import { client } from "../client/request";

export default {
  layThongTinHeThongRap: () => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/QuanLyRap/LayThongTinHeThongRap`)
        .then((s) => {
          if (s?.statusCode === 200) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },

  layThongTinCumRap: (maHeThongRap) => {
    return new Promise((resolve, reject) => {
      client
        .get(
          `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        )
        .then((s) => {
          if (s?.statusCode === 200) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
