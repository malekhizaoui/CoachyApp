import React, { useState } from "react";
import "./updatName.css";
import { useNavigate, useLocation } from "react-router-dom";
import BackIcon from "../../../../assets/icons/BackIcon";
function UpdateName() {
  const Location = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const getAllCoachs = JSON.parse(localStorage.getItem("dataCoach"));
  const getAllClients = JSON.parse(localStorage.getItem("dataClient"));
  const getDataUser = JSON.parse(localStorage.getItem("dataUser"));
  const data = Location.state;
  console.log("Locaction.state", Location.state);
  const updateFullName = () => {
    if(firstName.length!==0 && lastName.length!==0){
      if (data.type === "Client") {
      const UpdateClient = getAllClients.map((client) => {
        if (client.firstName === data.firstName) {
          console.log("dataUser",{ ...client, firstName, lastName });
          localStorage.setItem("dataUser",JSON.stringify({ ...client, firstName, lastName }))

          return { ...client, firstName, lastName };
        } else {
          return { ...client };
        }
      });
      console.log("UpdateClient", UpdateClient);
      localStorage.setItem("dataClient",JSON.stringify(UpdateClient))
      navigate('/')
    } else {

      const UpdateCoach = getAllCoachs.map((element) => {
        if (element.domaine === data.domaine) {
         const updateCoachs=element.coachs.map((coach) => {
            if (coach.firstName === data.firstName) {
              localStorage.setItem("dataUser",JSON.stringify({ ...coach, firstName, lastName }))
              console.log("dataUser",{ ...coach, firstName, lastName });
              return { ...coach, firstName, lastName };
            } else {
              return { ...coach };
            }
          });
          return {...element,coachs:updateCoachs}
        } else {
          return { ...element };
        }
      });
      localStorage.setItem("dataCoach",JSON.stringify(UpdateCoach))
      navigate('/')
    }
    }else{
      console.log("remplir tout le champs");
    }
    
  };
  return (
    <div className="perso-info-container">
      <div style={{ display: "flex", width: "90%", flexDirection: "column" }}>
        <div className="navigate">
          <BackIcon />

          <p className="name-page">Update Name</p>
        </div>
        <div className="container-input">
          <div className="input-container">
            <label for="firstName">First Name</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              id="input1"
              className="bottom-border"
              placeholder="First Name"
            />
          </div>

          <div className="input-container">
            <label for="input2">Champ 2</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              id="input2"
              className="bottom-border"
              placeholder="Last Name"
            />
          </div>
          <button className="btn-update-Profile"onClick={updateFullName}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateName;
