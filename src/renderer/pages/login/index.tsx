import React from "react";
import { Button } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();



  return (
    <div className="login-container">
      <div className="form-item">
        <input required type="text" className="userName" />
        <span className="bar" />
        <label htmlFor="userName">Username</label>
      </div>
      <div className="form-item">
        <input required type="password" className="userName" />
        <span className="bar" />
        <label htmlFor="userName">Password</label>
      </div>
      <Button type="primary" size="middle" onClick={() => navigate("/index")}>登录</Button>
    </div>
  );
}

export default Login;
