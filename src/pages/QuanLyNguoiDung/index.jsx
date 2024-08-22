import { Button, Table } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const Index = () => {
  const navigate = useNavigate();
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));

  const {
    quanLyNguoiDung: { layDanhSachNguoiDung },
  } = useDispatch();
  const { dsNguoiDung } = useSelector((state) => state.quanLyNguoiDung) || {};

  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);
  const onSearch = (tuKhoa) => {
    layDanhSachNguoiDung({ tuKhoa });
  };
  const onAddNguoiDung = () => {
    navigate("addnew");
  };

  const columns = [
    {
      title: "STT",
      width: "80px",
      render: (_, __, index) => <div>{index + 1}</div>,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      width: "200px",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      width: "140px",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      width: "200px",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
    },
    {
      title: "Thao tác",
      width: "200px",
      align: "center",
      render: (_, item) => (
        <div className="flex justify-evenly">
          <EditOutlined
            className="cursor-pointer"
            onClick={() => navigate(`edit`, { state: item })}
          />
          <DeleteOutlined
            className="cursor-pointer"
            onClick={() => {
              deleteFilm(item.maPhim);
            }}
          />
        </div>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Quản lý người dùng</h1>
      <Button className="my-4" onClick={onAddNguoiDung}>
        Thêm người dùng
      </Button>
      <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      <Table
        className="my-4"
        columns={columns}
        dataSource={dsNguoiDung}
        onChange={onChange}
      />
    </div>
  );
};

export default Index;
