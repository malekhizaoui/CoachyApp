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
  const [location, setLocation] = useState(null);
  const locationForstate = useLocation();
  const navigate = useNavigate();
  const dataCoach = locationForstate.state;
 
  const customIcon = L.icon({
    iconUrl: require("../../../../assets/images/marker-icon.png"),
    shadowUrl: require("../../../../assets/images/marker-shadow.png"),
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
 
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${dataCoach.location.longitude},${dataCoach.location.latitude}`;
    window.open(googleMapsUrl, "_blank");
    setOpenModal(false)
  };

  return (
    <div className="hole-map">
      <MapContainer
        center={location !== null ? location : position}
        zoom={13.5}
        className="map-container"
      >
        <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TNPJ9dvE72iHCMuBVwD7" />
        <Marker
          position={[dataCoach.location.longitude,dataCoach.location.latitude]}
          icon={customIcon}
        >
          <Popup >
            Mylocation <br />
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
            <img className="img-user" src={dataCoach.image_user} />
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
                {dataCoach.firstName} {dataCoach.lastName}
              </p>
            </div>
          </div>
          <div className="design-icons">
            <CallIcon />
          </div>
        </div>
        <div className="descirption-coach">
          <p className="bioCoach">
            {dataCoach.bio}
          </p>
          <button
          onClick={()=>{navigate('/CoachDetail',{state:dataCoach});setHideTabBar(false)}}
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
