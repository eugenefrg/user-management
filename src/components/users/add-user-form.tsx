import { Button, Card, Form, Input, InputNumber, Select } from "antd";
import { FC } from "react";
import { Position, UserData } from "../../types/user-data";

const positions = (Object.keys(Position) as Array<keyof typeof Position>).map(
  (key) => {
    return {
      // split the key with some regex magic
      name: key.replace(/([A-Z][a-z])/g, " $1").replace(/(\d)/g, " $1"),
      value: key,
    };
  }
);

interface AddUserFormProps {
  onAddUser: (user: UserData) => void;
}

const AddUserForm: FC<AddUserFormProps> = ({ onAddUser }) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Card style={{ width: "350px" }}>
      <Form onFinish={(values) => onAddUser(values)} form={form}>
        <Form.Item label="Branch Id" name="branchId">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Username" name="userName">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="First Name" name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="Middle Name" name="middleName">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="Position" name="position">
          <Select>
            {positions.map((position) => {
              return (
                <Select.Option value={position.value}>
                  {position.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Form.Item noStyle>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "1rem" }}
            >
              Add
            </Button>
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" onClick={handleReset}>
              Reset
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddUserForm;
