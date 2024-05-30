import { Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserManageTable from '../components/user_manage_table';
import '../css/global.css';
import { changeUserBanStatus, getAllUsers } from '../service/user';
import { onResponse } from '../util/response';

const { Search } = Input;

function UserManage (){
  const [users,setUsers] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

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

  const onBan = async(id, status) => {
    const res = await changeUserBanStatus(id, status);
    onResponse(res, messageApi, null, null);
    if (res.ok) {
      setUsers(users.map(user => 
        (user.id === id) ? { ...user, ban: status } : user
      ));
    }
  };

  const onSearch = (keyword) => {
    setSearchParams({
      "keyword": keyword,
    });
  }

  return (
    <div className='content-background'>
        <div className='content-container'>
          {contextHolder}
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