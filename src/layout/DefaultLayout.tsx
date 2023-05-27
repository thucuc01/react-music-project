import { Outlet } from "react-router-dom";

// function DefaultLayout() {
//   return (
//     <div>
//       <a href="/list">List</a> <br />
//       <a href="/list">Top 100</a>
//       <Outlet />
//     </div>
//   );
// }

// export default DefaultLayout;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  StarOutlined,
  //   UploadOutlined,
  //   UserOutlined,
  //   VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, MenuProps } from "antd";
import ListMusic from "../components/ListMusic";
import './style/index.css'

const { Header, Sider, Content } = Layout;

const DefaultLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState<string>("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //   const onClick= () => {
  //     console.log('1')
  //     navigate("/list");
  //   };

  const onClick: MenuProps["onClick"] = (e) => {
    setPage(e.key);
    //  check page==='1' => call api ALL LIST
    //  check page==='2' => call api LIST TOP 10
    navigate("/list");
  };
  return (
    <Layout  style={{
      padding: 24,
      minHeight: 500,}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <StarOutlined />,
              label: "BXH 10",
            },
            // {
            //   key: '3',
            //   icon: <UploadOutlined />,
            //   label: 'nav 3',
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 480,
            // background: "#243366",
            // color: 'white'
          }}
        >
          <ListMusic page={page} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
