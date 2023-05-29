// import ListMusic from "../components/ListMusic";
import "./style/index.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
// import { Switch } from "antd";
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
  getItem("Trang chủ", "list", <MailOutlined />),
  getItem("Top 100", "top-100", <AppstoreOutlined />, [
    getItem("Việt Nam", "top-100-vn"),
    getItem("Âu Mỹ", "top-100-us"),
    // getItem("K-pop", "sub3", null, [
    //   getItem("Option 7", "7"),
    //   getItem("Option 8", "8"),
    // ]),
  ]),
  getItem("Ca sĩ", "artis", <SettingOutlined />, [
    getItem("Ca sĩ 1", "9"),
    getItem("Ca sĩ 2", "10"),
  ]),
];

function DefaultLayout() {
  // const [page, setPage] = useState<string>("sub1");
  const [theme, setTheme] = useState<MenuTheme>("dark");
  // const [current, setCurrent] = useState("sub1");
  const navigate = useNavigate();
  // const changeTheme = (value: boolean) => {
  //   setTheme(value ? "dark" : "light");
  // };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="header">
          <div style={{ color: "white", marginLeft: "10px" }}> Test</div>
          <div>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <span style={{ color: "white", marginLeft: "10px" }}> Login</span>
          </div>
        </div>
      </Header>
      <Content style={{ padding: "0 0px" }}>
        <Layout>
          <Sider>
            {/* <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <br />
            <br /> */}
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
            {/* <ListMusic page={page} /> */}
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
export default DefaultLayout;
