import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StreamChat } from "stream-chat";
import { useTranslation } from 'react-i18next';
function useServiceLogin(setIsLoggedIn,setTypeUser,setHideTabBar) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const dataDomaineCoaching=JSON.parse(localStorage.getItem('dataDomaineCoaching'))
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
      dataDomaineCoaching.map((element,index)=>{
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
  return {
    setusername,t,setPassword,login,navigate
  }
}

export default useServiceLogin