import { Button, Card, Checkbox, Form, Input, InputNumber } from "antd";
import { FC } from "react";
import { LoginFormProps } from "./types";

const cardStyle = {
  marginTop: "1rem",
};

const formStyle = {
  paddingTop: "1rem",
};

const branchIdRule = [
  { required: true, message: "Please input your Branch ID!" },
];
const usernameRule = [
  { required: true, message: "Please input your username!" },
];
const passwordRule = [
  { required: true, message: "Please input your password!" },
];

const LoginForm: FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Card title="Login" style={cardStyle}>
      <Form title="Login" style={formStyle} onFinish={onFinish}>
        <Form.Item label="Branch Id" name="branchId" rules={branchIdRule}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Username" name="username" rules={usernameRule}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={passwordRule}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
