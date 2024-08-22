import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  message,
  Switch,
  Upload,
} from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const { maPhim } = useParams();
  const {
    quanLyPhim: { addNewFilm, getDetailFilm },
  } = useDispatch();
  const [state, _setState] = useState({
    size: "default",
    dangChieu: false,
    sapChieu: false,
    hot: false,
  });
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));

  useEffect(() => {
    if (maPhim) {
      getDetailFilm(maPhim).then((s) => setState(s));
    }
  }, [maPhim]);

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
  const onAddFilm = (e) => {
    addNewFilm({
      ...state,
      ngayKhoiChieu:
        state.ngayKhoiChieu && dayjs(state.ngayKhoiChieu).format("DD/MM/YYYY"),
    }).then((s) => navigate("/admin/films"));
  };
  const handleChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} tải lên thành công`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} tải lên thất bại`);
    }
  };
  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg">{`${
        maPhim ? "Chỉnh sửa" : "Thêm mới"
      } phim`}</h2>
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
        <Form.Item label="Tên phim">
          <Input onChange={onChange("tenPhim")} value={state.tenPhim} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input onChange={onChange("trailer")} value={state.trailer} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input onChange={onChange("moTa")} value={state.moTa} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            onChange={onChange("ngayKhoiChieu")}
            value={state.ngayKhoiChieu && dayjs(state.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch onChange={onChange("dangChieu")} checked={state.dangChieu} />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch onChange={onChange("sapChieu")} checked={state.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={onChange("hot")} checked={state.hot} />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber onChange={onChange("danhGia")} value={state.danhGia} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Upload
            customRequest={({ file, onSuccess, onError }) => {
              setState({ file: file });
            }}
            onChange={handleChange}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          {state.hinhAnh && (
            <Image src={state.hinhAnh} className="mt-4"></Image>
          )}
        </Form.Item>

        <Form.Item label="Tác vụ">
          <Button type="primary" onClick={onAddFilm}>
            {`${maPhim ? "Sửa" : "Thêm"} phim`}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
