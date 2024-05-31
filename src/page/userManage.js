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
  const [total, setTotal] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
  const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 5;

  useEffect(() => {
    setAllUsers();
  }, [searchParams]);

  const setAllUsers = async () => {
    let allUsers = await getAllUsers(keyword, pageIndex, pageSize);
    if (allUsers) {
      setUsers(allUsers.users);
      setTotal(allUsers.total);
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
      "pageIndex": 0,
      "pageSize": 5
    });
  }

  const onPageChange = (page) => {
    setSearchParams({ ...searchParams, pageIndex: page - 1 });
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
              <UserManageTable 
                users={users} 
                onBan={onBan}
                pageSize={pageSize}
                current={pageIndex + 1}
                total={total}
                onPageChange={onPageChange}
              />
            }
        </div>
    </div>
  );
};

export default UserManage;