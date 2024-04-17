import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import PasswordForm from '../components/password_form';
import ProfileTable from '../components/profile_table';
import '../css/global.css';
import { getProfile } from '../service/user';

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

    const setProfile = async () => {
        let profile = await getProfile();
        if (profile) {
            setInfo(profile);
        }
    }

    useEffect(() => {
        setProfile();
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