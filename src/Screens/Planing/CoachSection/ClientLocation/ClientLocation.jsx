import React, { useState, useEffect } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BackIcon from "../../../../assets/icons/BackIcon";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "./clientLocation.css";
import BackIconComponent from "../../../../Components/componentBack/BackIconComponent";
import CallIcon from "../../../../assets/icons/Planing/CallIcon";
import MessageIcon from "../../../../assets/icons/Planing/MessageIcon";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

function ClientLocation({ setlong, setlat, setHideTabBar }) {
  const position = [47.184475, 8.505185];
  const [location, setLocation] = useState(null);
  const [newDataa, setnewDataa] = useState(null);
  const locationForstate = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const dataUser = cookies.get("dataUser");
  const dataCoach = locationForstate.state.dataCoach;

  console.log("dataUser", dataUser);
  console.log("newDataa", newDataa);

  const acceptReservation = () => {
    const newReservation = dataUser.reservation.map((element, index) => {
      if (index === locationForstate.state.indexReservation) {
        const result = [];

        element.map((elem, i) => {
          if (i === locationForstate.state.indexsession) {
            result.push({ ...elem, reservationState: "accepted" });
            return;
          }
          result.push({ ...elem });
          return;
        });
        return result;
      }
      return [...element];
    });
    const newDataUser = { ...dataUser, reservation: newReservation };
    cookies.set("dataUser", newDataUser);
    navigate("/");
    setHideTabBar(false);
  };
  const cancelReservation = () => {
    const newReservation = dataUser.reservation.map((element, index) => {
      if (index === locationForstate.state.indexReservation) {
        const result = [];

        element.map((elem, i) => {
          if (i === locationForstate.state.indexsession) {
            result.push({ ...elem, reservationState: "noRequest" });
            return;
          }
          result.push({ ...elem });
          return;
        });
        return result;
      }
      return [...element];
    });
    const newDataUser = { ...dataUser, reservation: newReservation };
    cookies.set("dataUser", newDataUser);
    navigate("/");
    setHideTabBar(false);
  };
  useEffect(() => {
    getCurrentPosition();
    setlong(dataCoach.location.longitude);
    setlat(dataCoach.location.latitude);
  }, []);

  useEffect(() => {
    getDistance();
  }, []);

  const customIcon = L.icon({
    iconUrl: require("../../../../assets/images/marker-icon.png"),
    shadowUrl: require("../../../../assets/images/marker-shadow.png"),
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const apiKey = "52594ed767394cba8b91276dce863b21";
  const start = "46.193673,6.101839";
  const end = "47.186530,8.501407";
  const mode = "driving-car";

  const url = `https://api.geoapify.com/v1/routing?waypoints=${start}|${end}&mode=${mode}&apiKey=${apiKey}`;

  const getDistance = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      mode: "drive",
      sources: [{ location: location }],
      targets: [{ location: position }],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      "https://api.geoapify.com/v1/routematrix?apiKey=52594ed767394cba8b91276dce863b21",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });
      if (location) {
        setLocation([
          coordinates.coords.latitude,
          coordinates.coords.longitude,
        ]);
      }
    } catch (error) {
      console.error("Error getting location", error);
    }
  };

  return (
    <div className="hole-map">
      <MapContainer
        center={location !== null ? location : position}
        zoom={13.5}
        className="map-container"
      >
        <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TNPJ9dvE72iHCMuBVwD7" />

        <Marker position={position} icon={customIcon}>
          <Popup>
            destination <br />
          </Popup>
        </Marker>

        <Marker
          position={[dataCoach.location.longitude, dataCoach.location.latitude]}
          icon={customIcon}
        >
          <Popup>
            Mylocation <br />
          </Popup>
        </Marker>

        {/* Add a routing itinerary between position and location */}
        {/* {waypoints[0] && waypoints[1] && (
          <L.Routing.Itinerary waypoints={waypoints} />
        )} */}
      </MapContainer>
      {/* <button onClick={openGoogleMaps}>ss</button>
      <div></div> */}
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
                train with
              </p>
              <p style={{ margin: 2 }}>
                {dataCoach.firstName} {dataCoach.lastName}
              </p>
            </div>
          </div>
          <div className="design-icons">
            <CallIcon />
            <MessageIcon />
          </div>
        </div>
        <div className="descirption-coach">
          <p className="bioCoach">{dataCoach.bio}</p>
          {locationForstate.state.reservationState === "pending" ? (
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <button
                className="btn-location"
                onClick={() => {
                  cancelReservation();
                }}
              >
                Cancel Request
              </button>
              <button
                className="btn-location"
                onClick={() => {
                  acceptReservation();
                }}
              >
                Accept Request
              </button>
            </div>
          ) : (
            <button
              className="btn-location"
              onClick={() => {
                cancelReservation();
              }}
            >
              Cancel Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientLocation;
