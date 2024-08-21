import { client } from "../client/request";

export default {
  layDanhSachLoaiNguoiDung: () => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/quanlynguoidung/laydanhsachloainguoidung`)
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
