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
  const onSearch = (search) => {
    setState({ search });
  };
  const {
    quanLyPhim: { layDanhSachPhim, deleteFilm },
  } = useDispatch();
  const { dsPhim } = useSelector((state) => state.quanLyPhim) || {};

  useEffect(() => {
    layDanhSachPhim();
  }, []);

  const dsPhimMemo = useMemo(() => {
    return dsPhim?.filter(
      (o) => !state.search || o.tenPhim.includes(state.search)
    );
  }, [dsPhim, state.search]);

  const onAddFilm = () => {
    navigate("addnew");
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      width: "200px",
      sorter: {
        compare: (a, b) => a.maPhim - b.maPhim,
        multiple: 1,
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "140px",
      render: (item) => <img src={item} className="w-16 h-12"></img>,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      width: "200px",
      sorter: {
        compare: (a, b) => a.tenPhim - b.tenPhim,
        multiple: 1,
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text) => (
        <div className="overflow-hidden text-ellipsis line-clamp-2">{text}</div>
      ),
    },
    {
      title: "Hành động",
      width: "200px",
      align: "center",
      render: (_, item) => (
        <div className="flex justify-evenly">
          <EditOutlined
            className="cursor-pointer"
            onClick={() => navigate(`edit/${item.maPhim}`)}
          />
          <DeleteOutlined
            className="cursor-pointer"
            onClick={() => {
              deleteFilm(item.maPhim);
            }}
          />
          <CalendarOutlined
            className="cursor-pointer"
            onClick={() => navigate(`showtime/${item.maPhim}`)}
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
      <h1 className="text-3xl font-semibold">Quản lý phim</h1>
      <Button className="my-4" onClick={onAddFilm}>
        Thêm phim
      </Button>
      <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      <Table
        className="my-4"
        columns={columns}
        dataSource={dsPhimMemo}
        onChange={onChange}
      />
    </div>
  );
};

export default Index;
