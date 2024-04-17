import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import ManageTable from '../components/manage_table';
import '../css/global.css';
import { getAllUsers } from '../service/user';

const { Search } = Input;

function Manage (){
  const [users,setUsers] = useState([]);

  useEffect(() => {
    setAllUsers();
  }, []);

  const setAllUsers = async () => {
    let allUsers = await getAllUsers();
    if (allUsers) {
      setUsers(allUsers);
    }
  }

  const onBan = (id) => {
    setUsers(users.map(user => 
      (user.id === id) ? { ...user, isBanned: !user.isBanned } : user
    ));
  };

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入用户名查询"
                allowClear
                enterButton="搜索"
                size="large"
            />
            {users.length === 0 ? 
              <p>没有用户可管理（悲）</p> : 
              <ManageTable users={users} onBan={onBan}/>
            }
        </div>
    </div>
  );
};

export default Manage;