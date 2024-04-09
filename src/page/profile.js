import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import PasswordForm from '../components/password_form';
import ProfileTable from '../components/profile_table';
import '../css/global.css';


function Profile() {
    const [info, setInfo] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const onOk = () => {
        setIsModalOpen(false);
    };
    const onCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        const data = {
            name: "张三",
            email: "123@qq.com",
            avatar: "http://localhost:3000/avatar.jpg",
            phone: "12345678901",
            address: "江川路800号上海交通大学",
            balance: 100,
        }

        setInfo(data);
      }, []);

    return (
        <div className='content-background'>
            <div className='detail-container'>
                <ProfileTable 
                    info={info}
                    showModal={showModal}
                />
                <Modal 
                    title="修改密码" 
                    open={isModalOpen} 
                    onCancel={onCancel}  
                    onOk={onOk} 
                    footer={null}
                >
                    <PasswordForm></PasswordForm>
                </Modal>
            </div>
        </div>
    );
}

export default Profile;