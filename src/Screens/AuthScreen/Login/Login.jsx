import React, { useEffect, useState } from "react";
import axios from "axios";
import "../auth.css";
import { useNavigate, useLocation } from "react-router-dom";
import { StreamChat } from "stream-chat";
// import { dataClient } from "../../../DataBase/clientDB/Data";
// import { dataCoach } from "../../../DataBase/coachDB/Data";
function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const api_key = "dcqq9m3xdtzr";
  const client = StreamChat.getInstance(api_key);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const dataCoach=JSON.parse(localStorage.getItem('dataCoach'))
  const dataClient=JSON.parse(localStorage.getItem('dataClient') )

console.log('dataCoach',dataCoach);
console.log('dataClient',dataClient);
  const login = () => {
    dataClient.map((element, index) => {
      if (username === element.phoneNumber && password === element.Password) {
        setIsLoggedIn(true);
        navigate("/");
        // Convert the element object to a JSON string and save it in cookies
        localStorage.setItem('dataUser', JSON.stringify(element));
        localStorage.setItem('token', "kqjhdbmkqsjhdmqksjhdmsqkjhd");
        localStorage.setItem('typeUser',"client")
      }
    });
    dataCoach.map((element,index)=>{

      element.coachs.map((coach,place)=>{
        
        // console.log("password",coach.password ,"number",coach.phoneNumber);
        // console.log("password",password ,"number",username);

        if (username === coach.phoneNumber && password === coach.password) {
          console.log("donnnnne");
          setIsLoggedIn(true);
          navigate("/");
          // Convert the element object to a JSON string and save it in localStorage
          console.log("elementttt",element);
          localStorage.setItem('dataUser', JSON.stringify(coach));
          localStorage.setItem('token', "kqjhdbmkqsjhdmqksjhdmsqkjhd");
          localStorage.setItem('typeUser',"coach")

        }
      })
    })
    
   
  };
 // const userId=cookies.get("userId")
    // setIsLoggedIn(true);
    // navigate("/");
    // axios
    //   .post("https://memorixappgameserver.onrender.com/login", {
    //     username,
    //     password,
    //   })
    //   .then((res) => {

    //     const { firstName, lastName, username, token, userId } = res.data;
    //     console.log("data", res);
    //     client.connectUser(
    //       {
    //         id: userId,
    //         name: username,
    //         firstName: firstName,
    //         lastName: lastName,
    //         // hashedPassword: cookies.get("hashedPassword"),
    //       },
    //       token
    //     );
    //     cookies.set("token", token);
    //     cookies.set("userId", userId);
    //     cookies.set("username", username);
    //     cookies.set("firstName", firstName);
    //     cookies.set("lastName", lastName);
    //     setIsLoggedIn(true);
    //     navigate("/");
    //   })
    //     .catch((err)=>{
    //       console.log("errr",err);
    //     })
    //   ;
  return (
    <div className="container-auth">
      <div className="container-page-auth">
        <img
          className="logo-img"
          src={require("../Screenshot 2023-10-21 123137.png")}
        />
        <div className="form-login">
          <input
            type="text"
            className="input"
            placeholder="Phone Number"
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
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
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
