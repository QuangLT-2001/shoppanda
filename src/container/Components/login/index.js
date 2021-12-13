import React, { useState } from 'react';
import { LoginWrapper } from './style';
import Input from './../../../Component/input';
import TitlePage from '../../../Component/Title';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Login = props => {
    const [state, setState] = useState({
        username: '',
        pass: '',
    })
    const [type, setType] = useState('password')
    const handleChangeCheck = () => {
        setType(type === "password" ? 'text' : 'password');
    }
    const handleChangeInput = event => {
        const { type, name, value } = event.target;
        setState({
            [name]: value
        })


    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    },[])
    return (
        <LoginWrapper className="form-login-register login" bgImage="./assets/images/register/clothes1.jpg" backgroundImage="./assets/images/register/clothes2.jpg">
            <TitlePage name="Đăng nhập" />
            <div className="container">
                <form action="" className="form-login-register">
                    <h3 className="name-form">
                        Đăng nhập
                    </h3>
                    <Input onChange={handleChangeInput} id="user" type="text" value={state.username} name="username" placeholder="Tên đăng nhập..." />
                    <Input onChange={handleChangeInput} id="pass" type={type} value={state.pass} name="pass" placeholder="Mật khẩu..." />
                    <div className="forgot-pass">
                        <div className="checkbox">
                            <Input id="showPass" onChange={handleChangeCheck} type="checkbox" name="showPass" value="" nameLabel="Hiển thị mật khẩu" />
                        </div>
                        <span className="forgot-pass-item">Quên Mật Khẩu?</span>
                    </div>
                    <Input type="submit" value="ĐĂNG NHẬP" name="submit" />
                    <div className="form-footer">
                        <p>Bạn chưa có tài khoản</p>
                        <NavLink exact to="/register" className="create-acount">Đăng ký</NavLink>
                    </div>
                    {/* <span className="or">Hoặc</span>
                    <div className="create-acount">
                        <Button />
                    </div> */}
                </form>

            </div>
        </LoginWrapper>
    );
}
export default Login;