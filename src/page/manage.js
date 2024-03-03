import { Button, Input, Table } from 'antd';
import React, { useState } from 'react';
import '../css/global.css';

const { Search } = Input;

const data = []
for(var i = 1; i <= 10; i++){
    data.push({
        "id": i,
        "nickname": `sir ${i}`,
        "balance": i * 100,
        "isBanned": false,
    })
}

function Manage (){
  const [users,setUsers] = useState(data);

  const onBan = (id) => {
    setUsers(users.map(user => 
      (user.id === id) ? { ...user, isBanned: !user.isBanned } : user
    ));
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '余额',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
        title: '操作',
        dataIndex: 'isBanned',
        key: 'isBanned',
        render: (isBanned, record) => (
            <Button 
                type="primary"
                danger={!isBanned}
                onClick={() => onBan(record.id)}
                shape="round"
            >
                {isBanned ? '解禁' : '禁用'}
            </Button>
        ),
      },
  ];

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入用户名查询"
                allowClear
                enterButton="搜索"
                size="large"
            />
            <Table 
              columns={columns} 
              dataSource={users} 
              pagination={{ pageSize: 10 }}
            />
        </div>
    </div>
  );
};

export default Manage;