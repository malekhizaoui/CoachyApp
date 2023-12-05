import React, { useState, useEffect } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BackIcon from "../../../../assets/icons/BackIcon";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "./coachLocation.css";
import BackIconComponent from "../../../../Components/componentBack/BackIconComponent";
import CallIcon from "../../../../assets/icons/Planing/CallIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Modal from "../../../../Components/modal/Modal";
function CoachLocation({setHideTabBar,openModal,setOpenModal}) {
  const { t } = useTranslation();
  const position = [47.184475, 8.505185];
  const locationForstate = useLocation();
  const navigate = useNavigate();
  const dataDomaineCoaching = locationForstate.state;
  const location =  JSON.parse(localStorage.getItem('position'))
  const customIcon = L.icon({
    iconUrl: require("../../../../assets/images/marker-icon.png"),
    shadowUrl: require("../../../../assets/images/marker-shadow.png"),
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${dataDomaineCoaching.location.longitude},${dataDomaineCoaching.location.latitude}`;
    window.open(googleMapsUrl, "_blank");
    setOpenModal(false)
  };

  return (
    <div className="hole-map">
      <MapContainer
        center={location !== null ? location : position}
        zoom={10}
        className="map-container"
      >
        <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TNPJ9dvE72iHCMuBVwD7" />
        <Marker
          position={location}
          icon={customIcon}
        >
          <Popup >
            Mylocation 
          </Popup>
        </Marker>
        <Marker
          position={position}
          icon={customIcon}
        >
          <Popup >
            destination 
          </Popup>
        </Marker>
      </MapContainer>
     
      <div className="user-detail-location">
        <div className="header-detail-user">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img className="img-user" src={dataDomaineCoaching.image_user} />
            <div className="train-name-user">
              <p
                style={{
                  margin: 4,
                  color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                {t("trainWith")}
              </p>
              <p style={{ margin: 2 }}>
                {dataDomaineCoaching.firstName} {dataDomaineCoaching.lastName}
              </p>
            </div>
          </div>
          <div className="design-icons">
            <CallIcon />
          </div>
        </div>
        <div className="descirption-coach">
          <p className="bioCoach">
            {`dedicated ${dataDomaineCoaching.domaine} enthusiast and certified personal trainer.passion for helping individuals of all ${dataDomaineCoaching.domaine} levels achieve their health and wellness goals.`}
          </p>
          <button
          onClick={()=>{navigate('/CoachDetail',{state:dataDomaineCoaching});setHideTabBar(false)}}
            style={{
              // position: "fixed",
              marginBottom: 100,
              width: "80%",
              height: 50,
              borderRadius: "20px",
              background: "#5D54A0",
              color: "var(--white, #FFFBFB)",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textTransform: "capitalize",
            }}
          >
            {t('moreDeatil')}
          </button>
        </div>
      </div>
      {openModal&&<Modal>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p>
            Vous allez être redirigé vers l'application Google Maps lors de la
            navigation vers le monument. Une fois sur place,appuyez sur le
            bouton précédent en bas de l'écran de votre téléphone pour revenir à
            l'application Coachy app
          </p>
          <button onClick={openGoogleMaps}className="btn-auth" >OK</button>
          </div>
        </Modal>}
    </div>
  );
}

export default CoachLocation;
