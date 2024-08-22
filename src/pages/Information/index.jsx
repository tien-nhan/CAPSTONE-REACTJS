import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Form, Button, Tabs, Col, Row } from "antd";

const index = () => {
  const {
    quanLyNguoiDung: { getThongTinTaiKhoan, capNhatThongTinNguoiDungPut  },
  } = useDispatch();
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));

  useEffect(() => {
    getThongTinTaiKhoan().then((s) => setState(s));
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
  const onUpdateInfo = (e) => {
    const { taiKhoan, matKhau, email, soDt, hoTen } = state;
    capNhatThongTinNguoiDungPut({ taiKhoan, matKhau, email, soDt, hoTen });
  };

  const items = [
    {
      key: "1",
      label: "Thông tin tài khoản",
      children: (
        <div className="">
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
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Form.Item label="Email">
                  <Input onChange={onChange("email")} value={state.email} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Tài khoản">
                  <Input
                    onChange={onChange("taiKhoan")}
                    value={state.taiKhoan}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Form.Item label="Họ tên">
                  <Input onChange={onChange("hoTen")} value={state.hoTen} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Mật khẩu">
                  <Input onChange={onChange("matKhau")} value={state.matKhau} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Form.Item label="Số điện thoại">
                  <Input onChange={onChange("soDT")} value={state.soDt} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="" className="ml-40">
                  <Button type="primary" onClick={onUpdateInfo}>
                    Cập nhật
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <div className="py-4 px-20">
      <h2 className="font-semibold text-lg">{`Thông tin tài khoản`}</h2>
      <Tabs defaultActiveKey="1" items={items} className="py-20" />
    </div>
  );
};

export default index;
