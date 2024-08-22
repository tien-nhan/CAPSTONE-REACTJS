import { client } from "../client/request";

export default {
  layDanhSachNguoiDung: (param) => {
    return new Promise((resolve, reject) => {
      client
        .get(
          `/api/quanlynguoidung/LayDanhSachNguoiDung?MaNhom=GP01${
            param?.tuKhoa ? `&tuKhoa=${param?.tuKhoa}` : ""
          }`
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
  getThongTinTaiKhoan: () => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/quanlynguoidung/thongtintaikhoan`)
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
  capNhatThongTinNguoiDung: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/quanlynguoidung/CapNhatThongTinNguoiDung`, payload)
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
  capNhatThongTinNguoiDungPut: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .put(`/api/quanlynguoidung/CapNhatThongTinNguoiDung`, payload)
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
  themNguoiDung: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/quanlynguoidung/ThemNguoiDung`, payload)
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
