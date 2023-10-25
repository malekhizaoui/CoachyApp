import React, { useState } from "react";
import "../auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function SignUp() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [checkboxCoach, setCheckboxCoach] = useState(false);
  const [checkboxClient, setCheckboxClient] = useState(false);
  const [typeUser, setTypeUser] = useState("");
  const [user, setUser] = useState();
  const signUp = () => {
    console.log("user", user);
    console.log("checkboxCoach", checkboxCoach);
    console.log("checkboxClient", checkboxClient);
    if (checkboxCoach || checkboxClient) {
      //   axios
      //     .post("https://memorixappgameserver.onrender.com/signup", user)
      //     .then((res) => {
      //       const {
      //         token,
      //         userId,
      //         firstName,
      //         lastName,
      //         username,
      //         hashedPassword,
      //       } = res.data;
      //       cookies.set("token", token);
      //       cookies.set("userId", userId);
      //       cookies.set("username", username);
      //       cookies.set("firstName", firstName);
      //       cookies.set("lastName", lastName);
      //       cookies.set("hashedPassword", hashedPassword);
      //       cookies.set("typeUser", typeUser);
      //       navigate("/Login");
      //     });
      axios.post("https://memorixappgameserver.onrender.com/signup", user).then(
        (res) => {
          const {
            token,
            userId,
            firstName,
            lastName,
            username,
            hashedPassword,
          } = res.data;
          console.log("dataa",res.data);
          cookies.set("token", token);
          cookies.set("userId", userId);
          cookies.set("username", username);
          cookies.set("firstName", firstName);
          cookies.set("lastName", lastName);
          cookies.set("hashedPassword", hashedPassword);
          cookies.set("typeUser", typeUser);

          navigate("/Login");
        }
      );
    } else {
      alert("you need to specify which type of user you are");
    }
  };

  const handleCheckBoxCoach = () => {
    setTypeUser("coach");
    setCheckboxCoach(!checkboxCoach);
    setCheckboxClient(false);
  };
  const handleCheckBoxClient = () => {
    setTypeUser("client");
    setCheckboxClient(!checkboxClient);
    setCheckboxCoach(false);
  };
  return (
    <div className="container-auth">
      <div className="container-page-auth">
        <img
          className="logo-img"
          src={require("../Screenshot 2023-10-21 123137.png")}
        />
        <div className="form-signUp">
          <input
            type="text"
            className="input"
            placeholder="First Name"
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            onChange={(event) => {
              setUser({ ...user, lastName: event.target.value });
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="Phone Number"
            onChange={(event) => {
              setUser({ ...user, username: event.target.value });
            }}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxCoach}
              onChange={handleCheckBoxCoach}
            />
            <label>s'inscrire entant que Coach</label>
          </div>
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxClient}
              onChange={handleCheckBoxClient}
            />
            <label>s'inscrire entant que Client</label>
          </div>
        </div>
        <button className="btn-auth" onClick={signUp}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default SignUp;
