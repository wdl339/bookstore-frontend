import { Button, Table } from 'antd';
import React from 'react';

function ManageTable({ users, onBan}) {
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
        <Table 
            columns={columns} 
            dataSource={users} 
            pagination={{ 
                pageSize: 10, 
                position: ['bottomCenter']
            }} 
        />
    );
}

export default ManageTable;