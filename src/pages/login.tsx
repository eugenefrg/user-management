import { Col, Row } from "antd";
import { FC } from "react";
import LoginForm from "../components/authentication/login-form";
import { LoginFormValues } from "../components/authentication/types";
import Template from "../components/template";
import { useAuth } from "../utils/authentication";

const Login: FC = () => {
  const auth = useAuth();

  const handleLogin = (values: LoginFormValues) => {
    auth.signin(values, () => {});
  };

  return (
    <Template>
      <Row justify="center">
        <Col md={8}>
          <LoginForm onFinish={handleLogin} />
        </Col>
      </Row>
    </Template>
  );
};

export default Login;
