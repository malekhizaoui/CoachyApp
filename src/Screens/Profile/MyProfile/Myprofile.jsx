import React from "react";
import "./myProfile.css";
import AvailablityIcon from "../../../assets/icons/Profile/AvailablityIcon";
import HistorySessionIcon from "../../../assets/icons/Profile/HistorySessionIcon";
import ProfileIcon from "../../../assets/icons/Profile/ProfileIcon";
import Wallet from "../../../assets/icons/Profile/Wallet";
import SettingsIcon from "../../../assets/icons/Profile/SettingsIcon";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
function Myprofile() {
  return (
    <div className="container">
      <div className="couverture-image"></div>
      <div className="image-container">
        <div className="profile-image"></div>
        <p>Malek Hizaoui</p>
      </div>
      <div className="profile-info">
        <p style={{ marginTop: 10 }}>My profile</p>
        <div className="session-history">
          <HistorySessionIcon />
          <p className="info">Session history </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div className="session-history">
          <AvailablityIcon />
          <p className="info">Availibilty</p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <p style={{ marginTop: 10 }}>Prefernces</p>
        <div className="session-history">
          <SettingsIcon />
          <p className="info">Settings </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div className="session-history">
          <ProfileIcon />
          <p className="info">Personal information </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div className="session-history">
          <Wallet />
          <p className="info">Bank Card </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Myprofile;
