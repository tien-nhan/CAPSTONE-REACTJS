import { client } from "../client/request";

export default {
  login: ({ taiKhoan, matKhau }) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/quanlynguoidung/dangnhap`, {
          taiKhoan,
          matKhau,
        })
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
  register: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/quanlynguoidung/dangky`, payload)
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
