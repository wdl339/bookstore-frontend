import { Button, Table } from 'antd';
import React from 'react';

function UserManageTable({users, onBan, pageSize, current, total, onPageChange}) {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'name',
        },
        {
            title: '头像',
            dataIndex: 'avatar',
            render: avatar => <img src={avatar} alt='avatar' style={{width: '100px'}}/>
        },
        {
            title: '用户等级',
            dataIndex: 'level',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
        },
        {
            title: '电话',
            dataIndex: 'phone',
        },
        {
            title:'地址',
            dataIndex:'address',
        },
        {
            title: '余额',
            dataIndex: 'balance',
        },
        {
            title:'个性描述',
            dataIndex:'description',
        },
        {
            title: '操作',
            dataIndex: 'ban',
            render: (ban, record) => (
                <Button 
                    type="primary"
                    danger={!ban}
                    onClick={() => onBan(record.id,!ban)}
                    shape="round"
                >
                    {ban ? '解禁' : '禁用'}
                </Button>
            ),
        },
    ];
    
    return (
        <Table 
            columns={columns} 
            dataSource={users} 
            pagination={{ 
                pageSize: pageSize,
                current: current,
                total: total,
                onChange: onPageChange,
                position: ['bottomCenter']
            }} 
        />
    );
}

export default UserManageTable;