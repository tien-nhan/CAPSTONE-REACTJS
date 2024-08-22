import { Button, Col, Form, Row } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const {
    quanLyNguoiDung: {
      layDanhSachLoaiNguoiDung,
      capNhatThongTinNguoiDung,
      themNguoiDung,
    },
  } = useDispatch();
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const { dsLoaiNguoiDung } =
    useSelector((state) => state.quanLyNguoiDung) || {};

  const location = useLocation();
  const { state: locationState } = location;

  useEffect(() => {
    layDanhSachLoaiNguoiDung();
  }, []);

  useEffect(() => {
    setState(locationState);
  }, [locationState]);
  const onChange = (key) => (e) => {
    let value = "";
    if (e?.target) {
      if (e.target.hasOwnProperty("checked")) value = e.target.checked;
      else value = e.target.value;
    } else {
      value = e;
    }
    setState({ [key]: value });
  };
  const onAdd = (e) => {
    themNguoiDung({
      ...state,
    }).then((s) => navigate("/admin/quanlynguoidung"));
  };
  const onEdit = (e) => {
    capNhatThongTinNguoiDung({
      ...state,
    }).then((s) => navigate("/admin/quanlynguoidung"));
  };
  console.log(state);
  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg">{`${
        locationState ? "Chỉnh sửa" : "Thêm mới"
      } người dùng`}</h2>
      <Form
        layout="horizontal"
        initialValues={{
          size: state.size,
        }}
        className="py-10 px-20"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
      >
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                required
                onChange={onChange("taiKhoan")}
                value={state.taiKhoan}
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-focus:text-xl peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tài khoản
              </label>
            </div>
          </Col>
          <Col span={12}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={onChange("email")}
                value={state.email}
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-focus:text-xl peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={onChange("matKhau")}
                value={state.matKhau}
              />
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-focus:text-xl peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mật khẩu
              </label>
            </div>
          </Col>
          <Col span={12}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_sdt"
                id="floating_sdt"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={onChange("soDt")}
                value={state.soDt}
              />
              <label
                for="floating_sdt"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-focus:text-xl peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Số điện thoại
              </label>
            </div>
          </Col>
        </Row>

        <Row gutter={[12, 12]}>
          <Col span={12}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_hoten"
                id="floating_hoten"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={onChange("hoTen")}
                value={state.hoTen}
              />
              <label
                for="floating_hoten"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-focus:text-xl peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Họ tên
              </label>
            </div>
          </Col>
        </Row>
        <Col span={24}>
          <div className="relative z-0 w-full mb-5 group">
            <label
              for="maNhom"
              class="block mb-2 text-sm font-medium text-gray-500"
            >
              Loại người dùng
            </label>
            <select
              onChange={onChange("maLoaiNguoiDung")}
              value={state.maLoaiNguoiDung}
              id="maNhom"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            >
              {dsLoaiNguoiDung?.map((o) => (
                <option value={o.maLoaiNguoiDung}>{o.tenLoai}</option>
              ))}
            </select>
          </div>
        </Col>
        <Col span={24} className="flex justify-center gap-10">
          {locationState ? (
            <Button type="primary" onClick={onEdit}>
              Lưu
            </Button>
          ) : (
            <Button type="primary" onClick={onAdd}>
              Thêm
            </Button>
          )}
        </Col>
      </Form>
    </div>
  );
};

export default Index;
