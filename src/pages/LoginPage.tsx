import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("isLogin");

    console.log(login, "login");

    if (login === "1") {
      navigate("/");
    }
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);

    localStorage.setItem("isLogin", "1");

    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);

    localStorage.setItem("isLogin", "0");
  };

  return (
    <div>
      Tạm thời cứ điền giá trị là đăng nhập đc, thiếu api
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
