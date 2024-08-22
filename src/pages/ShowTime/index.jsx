import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Image,
  InputNumber,
  DatePicker,
  Input,
  Form,
  Button,
  Select,
} from "antd";
import dayjs from "dayjs";

const index = () => {
  const { maPhim } = useParams();
  const {
    quanLyPhim: { getDetailFilm },
    quanLyRap: { layThongTinHeThongRap, layThongTinCumRap },
    quanLyDatVe: { taoLichChieu },
  } = useDispatch();
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const { dsHeThongRap, dsCumRap } =
    useSelector((state) => state.quanLyRap) || {};
  useEffect(() => {
    if (maPhim) {
      getDetailFilm(maPhim).then((s) => setState(s));
    }
  }, [maPhim]);

  useEffect(() => {
    layThongTinHeThongRap();
  }, []);

  const onChange = (key) => (e) => {
    let value = "";
    if (e?.target) {
      if (e.target.hasOwnProperty("checked")) value = e.target.checked;
      else value = e.target.value;
    } else {
      value = e;
    }
    if (key === "heThongRap") {
      layThongTinCumRap(value);
    }
    setState({ [key]: value });
  };
  const onTaoLichChieu = (e) => {
    taoLichChieu({
      maPhim: state.maPhim,
      ngayChieuGioChieu:
        state.ngayChieuGioChieu &&
        dayjs(state.ngayChieuGioChieu).format("DD/MM/YYYY hh:mm:ss"),
      maRap: state.maRap,
      giaVe: state.giaVe,
    });
  };

  return (
    <div className="py-4 px-20">
      <h2 className="font-semibold text-lg">{`Tạo lịch chiếu - ${state.tenPhim}`}</h2>
      <Image src={state.hinhAnh} className="my-5"></Image>
      <Form
        layout="horizontal"
        initialValues={{
          size: state.size,
        }}
        className="py-4 px-20"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={dsHeThongRap?.map((o) => ({
              value: o.maHeThongRap,
              label: o.tenHeThongRap,
            }))}
            onChange={onChange("heThongRap")}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={dsCumRap?.map((o) => ({
              value: o.maCumRap,
              label: o.tenCumRap,
            }))}
            onChange={onChange("maRap")}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            onChange={onChange("ngayChieuGioChieu")}
            value={state.ngayChieuGioChieu && dayjs(state.ngayChieuGioChieu)}
            format={"DD/MM/YYYY"}
            showTime
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber onChange={onChange("giaVe")} value={state.giaVe} />
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button type="primary" onClick={onTaoLichChieu}>
            Tạo lịch chiếu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default index;
