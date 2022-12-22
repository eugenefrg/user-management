import { Layout, Typography, Row, Col, Button, message } from "antd";
import { FC, ReactNode } from "react";
import { useAuth } from "../../utils/authentication";
import LoginForm from "../authentication/login-form";

interface TemplateProps {
  children: ReactNode;
}

const layoutStyle = { height: "100%" };

const titleStyle = { color: "white" };

const Template: FC<TemplateProps> = ({ children }) => {
  const auth = useAuth();

  const handleSignout = () => {
    auth.signout(() => {
      message.info("Signing Out");
    });
  };

  return (
    <Layout style={layoutStyle}>
      <Layout.Header>
        <Row justify="space-between">
          <Col>
            <Typography.Title level={3} style={titleStyle}>
              User Management
            </Typography.Title>
          </Col>
          <Col>
            {auth.user && (
              <Button onClick={() => handleSignout()}>Log Out</Button>
            )}
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ padding: "2rem" }}>{children}</Layout.Content>
    </Layout>
  );
};

export default Template;
