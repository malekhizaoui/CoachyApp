import React from "react";
import "./coachDetail.css";
import { useNavigate, useLocation } from "react-router-dom";
import BackIcon from "../../../../assets/icons/BackIcon";
function CoachDetail({sethideTabBarforCoachDetail,setHideTabBar}) {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  return (
    <div className="container-coachDetail">
      <div className="couverture-image">
        <div className="container-backIcon" onClick={()=>{sethideTabBarforCoachDetail(true);setHideTabBar(true)}}>
          <BackIcon />
        </div>
      </div>              
      <div className="image-container">
        <img className="profile-image" src={data.image_user} />
        <p>
          {data.firstName} {data.lastName}
        </p>
      </div>
      <div className="bio-coach">
        <div className="line"></div>
        <p className="attribute-coach">About {data.firstName}</p>
        <p className="value-coach">{data.bio}</p>
        <div className="line"></div>
        <p className="attribute-coach">Expérience</p>
        <p>{data.experience}</p>
        <div className="line"></div>
        <p className="attribute-coach">Tarification</p>
        <p className="value-coach">
          {data.Tarification}
          {data.modeDePaiment}
        </p>
      </div>
    </div>
  );
}

export default CoachDetail;
