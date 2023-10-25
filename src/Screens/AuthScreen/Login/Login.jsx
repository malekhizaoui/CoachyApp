import React, { useEffect, useState } from "react";
import axios from "axios";
import "../auth.css";
import { useNavigate, useLocation } from "react-router-dom";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const api_key = "dcqq9m3xdtzr";
  const client = StreamChat.getInstance(api_key);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  const login = () => {
    cookies.set("token", "daljgljhg");
    axios
      .post("https://memorixappgameserver.onrender.com/login", {
        username,
        password,
      })
      .then((res) => {
        const { firstName, lastName, username, token, userId } = res.data;
        console.log("data", res);
        client.connectUser(
          {
            id: userId,
            name: username,
            firstName: firstName,
            lastName: lastName,
            // hashedPassword: cookies.get("hashedPassword"),
          },
          token
        );
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);
        setIsLoggedIn(true);
        navigate("/");
      });
  };

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

        <button className="btn-auth" onClick={login}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
