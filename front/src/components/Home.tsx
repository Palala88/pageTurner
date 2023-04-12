import React, { useEffect } from 'react';
// import './App.css';
import { Table, Button, Input, Space, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import LayoutComponent from './Layout';

const Home = () => {
  const [name, setName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  // const [editName, setName] = React.useState<string>('');
  // const [lastName, setLastName] = React.useState<string>('');
  const [users, setUsers] = React.useState<any>([]);
  // const [editUser, setEditUser] = React.useState<any>({});
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const updateUsers = async () => {
    const data = await fetch('http://localhost:3003/users');
    const res = await data.json();
    setUsers(res.users);
  };
  useEffect(() => {
    updateUsers();
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => {
        return (
          <Space size="middle">
            <Button
              type="link"
              onClick={async () => {
                await fetch(`http://localhost:3003/user/${record._id}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                updateUsers();
              }}
            >
              Delete
            </Button>
            <Button
              type="link"
              onClick={async () => {
                setIsOpen(true);
                // setEditUser(record);
                setName(record.name);
                setLastName(record.lastName);
                // await fetch(`http://localhost:3003/user/${record._id}`, {
                //   method: 'PUT',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify({ name, lastName }),
                // });
                // updateUsers();
              }}
            >
              Edit
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <LayoutComponent>
      <div style={{ marginLeft: '10px' }}>
        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
          <Input
            style={{ width: '200px', marginRight: '7px' }}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            prefix={<UserOutlined />}
          />
          <Input
            style={{ width: '200px', marginRight: '7px' }}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button
            type="primary"
            disabled={!name || !lastName}
            onClick={async () => {
              await fetch('http://localhost:3003/user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, lastName }),
              });
              setName('');
              setLastName('');
              updateUsers();
            }}
          >
            Add user
          </Button>
        </div>
        <Table columns={columns} dataSource={users} />
        <Modal
          title="Edit"
          open={isOpen}
          onOk={() => setIsOpen(false)}
          onCancel={() => setIsOpen(false)}
        >
          <div>
            <Input
              style={{ marginBottom: '10px' }}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Modal>
      </div>
    </LayoutComponent>
  );
};

export default Home;

