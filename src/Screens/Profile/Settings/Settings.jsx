import React from "react";
import "./settings.css";
import BackIcon from "../../../assets/icons/BackIcon";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import LogoutIcon from "../../../assets/icons/Profile/LogoutIcon";
import DeleteAccountIcon from "../../../assets/icons/Profile/DeleteAccountIcon";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="perso-info-container">
      <div className="container-settings">
        <div className="navigate"  onClick={()=>{navigate(-1)}}>
          <BackIcon />

          <p className="name-page">Settings</p>
        </div>

        <div className="settings-conatiner">
          <div className="line-settings"></div>
          {/* <p className="attribute-info">Full Name</p> */}
          <div className="detail-info">
            <p className="value-info">Langue</p>
            <ArrowrightIcon />
          </div>
          <div className="line-settings"></div>

          {/* <p className="attribute-info">Age</p> */}
          <div className="detail-info">
            <p className="value-info">About App</p>
            <ArrowrightIcon />
          </div>
          <div className="line-settings"></div>
          {/* <p className="attribute-info">Phone number</p> */}
          <div className="detail-info">
            <p className="value-info">Help</p>
            <ArrowrightIcon />
          </div>
          <div className="line-settings"></div>

          {/* <p className="attribute-info">E-mail</p> */}
          <div className="detail-info">
            <p className="value-info">Log out</p>
            <LogoutIcon />
          </div>
          <div className="line-settings"></div>
          <div className="detail-info">
            <p className="value-info" style={{ color: "red" }}>
              Delet Account
            </p>
            <DeleteAccountIcon />
          </div>
          <div className="line-settings"></div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
