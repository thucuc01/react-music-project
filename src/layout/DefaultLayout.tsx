import { AppstoreOutlined } from "@ant-design/icons";
// import { Switch } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

import { Avatar, Layout, Menu, Dropdown, Button } from "antd";

import React, { useState } from "react";

import { HomeOutlined } from "@ant-design/icons";

import type { MenuProps, MenuTheme } from "antd";

import "./style/index.css";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,

  key?: React.Key | null,

  icon?: React.ReactNode,

  children?: MenuItem[],

  type?: "group"
): MenuItem {
  return {
    key,

    icon,

    children,

    label,

    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang chủ", "", <HomeOutlined />),

  getItem("Top 10", "top-100", <AppstoreOutlined />, [
    getItem("TOP 10 BXH", "top-10-all"),

    getItem("Việt Nam", "top-10-vn"),

    getItem("Âu Mỹ", "top-10-us"),

    // getItem("K-pop", "sub3", null, [

    //   getItem("Option 7", "7"),

    //   getItem("Option 8", "8"),

    // ]),
  ]),

  //   getItem("Ca sĩ", "artis", <SettingOutlined />, [

  //     getItem("Ca sĩ 1", "9"),

  //     getItem("Ca sĩ 2", "10"),

  //   ]),
];

function DefaultLayout() {
  // const [page, setPage] = useState<string>("sub1");

  const [theme] = useState<MenuTheme>("dark");

  //   const [current, setCurrent] = useState("sub1");

  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);

    navigate(e.key);
  };

  const clickLogout = () => {
    localStorage.setItem("isLogin", "0");

    navigate("/login");
  };

  const clickInfo = () => {
    navigate("/info");
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={clickInfo}>Info</Menu.Item>

      <Menu.Item onClick={clickLogout}>Logout</Menu.Item>
    </Menu>
  );

  const isLogin = localStorage.getItem("isLogin");

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="header">
          <div
            style={{
              color: "white",

              margin: "10px",

              width: "calc(100% - 100px)",
            }}
          >
            <img
              style={{ height: "100%" }}
              src="/logo.jpg"
              alt="loading logo ....."
            />
          </div>

          <div>
            {isLogin === "0" ? (
              <Button ghost onClick={clickLogout}>
                LOGIN
              </Button>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />

                <Dropdown overlay={menu}>
                  <div>
                    <a className="ant-dropdown-link">Admin</a>
                  </div>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </Header>

      <Content style={{ padding: "0 0px" }}>
        <Layout>
          <Sider>
            <Menu
              theme={theme}
              onClick={onClick}
              style={{ minHeight: "100vh" }}
              // defaultOpenKeys={["sub1"]}

              // selectedKeys={[current]}

              mode="inline"
              items={items}
            />
          </Sider>

          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Content>

      <Footer
        style={{
          textAlign: "center",

          backgroundColor: "#001529",

          color: "white",
        }}
      >
        Music Project ©2023
      </Footer>
    </Layout>
  );
}

export default DefaultLayout;
