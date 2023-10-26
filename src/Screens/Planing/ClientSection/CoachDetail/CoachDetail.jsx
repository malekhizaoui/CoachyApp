import React from "react";
import "./coachDetail.css";
import { useNavigate, useLocation } from "react-router-dom";

function CoachDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const data =location.state
  return (
    <div className="container-coachDetail">
      <div className="couverture-image"></div>
      <div className="image-container">
        <img className="profile-image" src={data.image_user}/>
        <p>{data.firstName} {data.lastName}</p>
      </div>
      <div className="bio-coach">
        <div className="line"></div>
        <p className="attribute-coach">About {data.firstName}</p>
        <p className="value-coach">
          Je suis un coach professionnel chevronné, spécialisé dans le
          développement personnel et professionnel, guidant ses clients vers la
          réussite et l'épanouissement grâce à des années d'expérience et
          d'expertise en coaching .
        </p>
        <div className="line"></div>
        <p className="attribute-coach">Expérience</p>
        <p>
          Je suis un coach professionnel chevronné, spécialisé dans le
          développement personnel et professionnel, guidant ses clients vers la
          réussite et l'épanouissement grâce à des années d'expérience et
          d'expertise en coaching .
        </p>
        <div className="line"></div>
        <p className="attribute-coach">Tarification</p>
        <p className="value-coach">
          50 CHF par session d'une heure . Le paiement peut être effectué par
          carte de crédit ou via PayPal
        </p>
      </div>
    </div>
  );
}

export default CoachDetail;
