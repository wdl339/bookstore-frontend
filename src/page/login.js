import React from 'react';
import LoginForm from '../components/login_form';
import RegisterForm from '../components/register_table';
import '../css/login.css';

function Login({login}) {
    return (
        <div className="login-background">
            <div className="login-card">
                <h1>电子书城</h1>
                {login ? <LoginForm/> : <RegisterForm/>}
            </div>
        </div>
    );
}

export default Login;


