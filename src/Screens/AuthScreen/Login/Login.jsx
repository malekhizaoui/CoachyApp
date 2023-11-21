import React, { useEffect, useState } from "react";
import "../auth.css";
import { useNavigate, useLocation } from "react-router-dom";
import { StreamChat } from "stream-chat";
import { useTranslation } from 'react-i18next';

function Login({ setIsLoggedIn,setTypeUser,setHideTabBar }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const api_key = "dcqq9m3xdtzr";
  const client = StreamChat.getInstance(api_key);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const dataCoach=JSON.parse(localStorage.getItem('dataCoach'))
  const dataClient=JSON.parse(localStorage.getItem('dataClient') )

  const login = () => {
    dataClient.map((element, index) => {
      if (username === element.phoneNumber && password === element.Password) {
        localStorage.setItem('token', "kqjhdbmkqsjhdmqksjhdmsqkjhd");
        localStorage.setItem('dataUser', JSON.stringify(element));
        localStorage.setItem('typeUser',"Client")
        setTypeUser('Client')
        setIsLoggedIn(true);
        setHideTabBar(true)
        navigate("/");
      }
    });
    dataCoach.map((element,index)=>{
      element.coachs.map((coach,place)=>{
        if (username === coach.phoneNumber && password === coach.password) {
          console.log("donnnnne");
          setIsLoggedIn(true);
          navigate("/");
          setTypeUser('Coach')
          setHideTabBar(true)
          localStorage.setItem('dataUser', JSON.stringify(coach));
          localStorage.setItem('token', "kqjhdbmkqsjhdmqksjhdmsqkjhd");
          localStorage.setItem('typeUser',"Coach")

        }
      })
    })
    
   
  };
  return (
    <div className="container-auth">
      <div className="container-page-auth">
        <img
          className="logo-img"
          src={require("../18.png")}
        />
        <div className="form-login">
          <input
            type="text"
            className="input"
            placeholder={t("phoneNumber")}
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />
          <input
            type="password"
            className="input"
            placeholder={t("password")}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button
          className="btn-auth"
          onClick={() => {
            login();
          }}
        >
          {t("login")}
        </button>
        <p 
        onClick={()=>{
          navigate('/SignUp')
        }}
        className="txt-auth">{t('createAcc')}</p>
      </div>
    </div>
  );
}

export default Login;
