import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserManageTable from '../components/user_manage_table';
import '../css/global.css';
import { getAllUsers } from '../service/user';

const { Search } = Input;

function UserManage (){
  const [users,setUsers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    setAllUsers();
  }, []);

  const setAllUsers = async () => {
    let allUsers = await getAllUsers(keyword);
    if (allUsers) {
      setUsers(allUsers);
    }
  }

  const onBan = (id) => {
    setUsers(users.map(user => 
      (user.id === id) ? { ...user, ban: !user.ban } : user
    ));
  };

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
    });
  }

  return (
    <div className='content-background'>
        <div className='content-container'>
            <Search
                placeholder="输入用户名查询"
                onSearch={onSearch}
                allowClear
                enterButton="搜索"
                size="large"
            />
            {users.length === 0 ? 
              <p>没有用户可管理（悲）</p> : 
              <UserManageTable users={users} onBan={onBan}/>
            }
        </div>
    </div>
  );
};

export default UserManage;