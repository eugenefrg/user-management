import { Col, Row, Typography } from "antd";
import { FC, useState } from "react";
import userData from "../assets/data/users-data";
import LoginForm from "../components/authentication/login-form";
import { LoginFormValues } from "../components/authentication/types";
import Template from "../components/template";
import AddUserForm from "../components/users/add-user-form";
import UsersTable from "../components/users/users-table";
import { UserData } from "../types/user-data";
import { useAuth } from "../utils/authentication";

const Authenticated: FC = () => {
  const auth = useAuth();
  const [userDataState, setUserDataState] = useState(userData);

  const handleRemove = (userName: string) => {
    const newData = userDataState.filter((user) => user.userName !== userName);
    setUserDataState(newData);
  };

  const handleAddUser = (user: UserData) => {
    const newData = [...userDataState, user];
    setUserDataState(newData);
  };

  return (
    <Template>
      <Row>
        <Col>
          <Typography.Title level={4}>Hello, {auth.user}</Typography.Title>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col>
          <AddUserForm onAddUser={handleAddUser} />
        </Col>
        <Col flex="auto">
          <UsersTable dataSource={userDataState} onRemove={handleRemove} />
        </Col>
      </Row>
    </Template>
  );
};

export default Authenticated;
