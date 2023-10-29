import React from "react";
import { useNavigate } from "react-router-dom";
import "./myProfile.css";
import AvailablityIcon from "../../../assets/icons/Profile/AvailablityIcon";
import HistorySessionIcon from "../../../assets/icons/Profile/HistorySessionIcon";
import ProfileIcon from "../../../assets/icons/Profile/ProfileIcon";
import Wallet from "../../../assets/icons/Profile/Wallet";
import SettingsIcon from "../../../assets/icons/Profile/SettingsIcon";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import Cookies from "universal-cookie";
function Myprofile() {
  const navigate = useNavigate();
    const cookies=new Cookies()
    const data=cookies.get('dataUser')
  return (
    <div className="container">
      <div className="couverture-image">
     
      </div>
      <div className="image-container">
        <img className="profile-image" src={data.image_user}/>
        <p>{data.firstName} {data.lastName}</p>
      </div>
      <div className="profile-info">
        <p style={{ marginTop: 5 }}>My profile</p>
        <div className="session-history" onClick={()=>{navigate("/SessionHistory");}}>
          <HistorySessionIcon />
          <p className="info">Session history </p>
          <ArrowrightIcon />
        </div>
        {data.type==="Coach"?(<><div className="line"></div>
        <div className="session-history" onClick={()=>{navigate("/Availability")}}>
          <AvailablityIcon />
          <p className="info">Availibilty</p>
          <ArrowrightIcon />
        </div></>):null}
        <div className="line"></div>
        <p style={{ marginTop: 5 }}>Prefernces</p>
        <div className="session-history" onClick={()=>{navigate("/Settings")}}>
          <SettingsIcon />
          <p className="info">Settings </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div className="session-history" onClick={()=>{navigate("/PersonalInformation",{state:data})}}>
          <ProfileIcon />
          <p className="info">Personal information </p>
          <ArrowrightIcon />
        </div>
        <div className="line"></div>
        <div className="session-history" >
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
