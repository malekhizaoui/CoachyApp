import React from "react";
import "./coachDetail.css";

function CoachDetail() {
  return (
    <div className="container">
      <div className="couverture-image"></div>
      <div className="image-container">
        <div className="profile-image"></div>
        <p>Malek Hizaoui</p>
      </div>
      <div className="bio-coach">
        <div className="line"></div>
        <p className="attribute-coach">About Malek</p>
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
