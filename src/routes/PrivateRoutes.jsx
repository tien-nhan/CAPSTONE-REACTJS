import {
  CaretDownOutlined,
  CaretUpOutlined,
  FileOutlined,
  LogoutOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const [state, _setState] = useState({ moreMenu: false });
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const { auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const actions = [
    {
      icon: <UserOutlined />,
      label: "Thông tin cá nhân",
      onClick: () => {
        navigate("/thongtincanhan");
      },
    },
    {
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("auth");
        navigate("/login");
      },
    },
  ];
  return auth.maLoaiNguoiDung ? (
    <div className="flex min-h-screen bg-gray-300">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="space-y-2 font-medium">
          <ul>
            <li>
              <Link
                to="/admin/quanlynguoidung"
                className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-700 group"
              >
                <UserOutlined className="mx-5 my-2" />
                Users
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group text-white hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setState({ moreMenu: !state.moreMenu })}
              >
                <FileOutlined className="mx-5 my-2" />
                <span className="flex-1 text-left rtl:text-right whitespace-nowrap">
                  Films
                </span>
                {state.moreMenu ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </button>
              {state.moreMenu && (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <Link
                      to="/admin/films"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700"
                    >
                      Films
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700"
                    >
                      Add new
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/manage-users"
                className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-700 group"
              >
                <VideoCameraOutlined className="mx-5 my-2" />
                TV Show
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 ">
        <nav className="bg-white border-white">
          <div className="max-w-screen-xl flex justify-end p-4">
            <div className="w-1/6 flex justify-end">
              <Popover
                placement="bottomRight"
                content={actions.map((action, index) => (
                  <li key={index} onClick={action.onClick}>
                    <span className="mr-4 cursor-pointer">{action.icon}</span>
                    <span className="label cursor-pointer">{action.label}</span>
                  </li>
                ))}
              >
                <Avatar icon={<UserOutlined />} />
              </Popover>
            </div>
          </div>
        </nav>
        <main className="m-4 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
