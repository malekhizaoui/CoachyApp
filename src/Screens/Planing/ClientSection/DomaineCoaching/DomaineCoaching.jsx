import React, { useState } from "react";
import "./domaine.css";
import { useNavigate, useLocation } from "react-router-dom";
import BackIcon from "../../../../assets/icons/BackIcon";
import { useTranslation } from "react-i18next";

function DomaineCoaching() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  console.log("location.state", location.state);
  const dataCoach = JSON.parse(localStorage.getItem("dataCoach"));
  return (
    <div className="Domain-container">
      <div className="navigate-fromDomain">
        <BackIcon />
        <p className="name-page">{t('domaine')}</p>
      </div>
      <div className="line"></div>

      <div className="allDoamin">
        <div className="domain">
          <p>Fitness</p>
        </div>
        <div className="domain">
          <p>Diet</p>
        </div>
        <div className="domain">
          <p>Mental</p>
        </div>
        
      </div>
      <div className="content-domain">
        {dataCoach.map((element, index) => {
          return (
            <div
              key={index}
              className="img-domain"
              onClick={() => {
                navigate("/AllCoachs", { state: element.coachs });
              }}
            >
              <img className="img-background" src={element.picDomaine} />
            </div>
          );
        })}
        <div style={{ height: 150 }}></div>
      </div>
    </div>
  );
}

export default DomaineCoaching;
