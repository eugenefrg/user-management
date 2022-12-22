import { Button, Table } from "antd";
import { FC, VoidFunctionComponent } from "react";
import { UserData } from "../../types/user-data";

interface UsersTableProps {
  dataSource: UserData[];
  onRemove: (userName: string) => void;
}

const UsersTable: FC<UsersTableProps> = ({ dataSource, onRemove }) => {
  const columns = [
    {
      title: "Branch ID",
      dataIndex: "branchId",
      key: "branchId",
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      key: "middleName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Action",
      key: "position",
      render: (data: UserData) => {
        return <Button onClick={() => onRemove(data.userName)}>Remove</Button>;
      },
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default UsersTable;
