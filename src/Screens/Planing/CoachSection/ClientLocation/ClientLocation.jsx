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
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function ClientLocation({ setlong, setlat, setHideTabBar,sethideTabBarforCoachDetail }) {
  
  const position = [47.184475, 8.505185];
  const [location, setLocation] = useState(null);
  const [newDataa, setnewDataa] = useState(null);
  const locationForstate = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const data = localStorage.getItem("dataUser");
  const dataUser=JSON.parse(data)
  const allDataCoach=JSON.parse(localStorage.getItem('dataCoach'))
  const allDataClient=JSON.parse(localStorage.getItem('dataClient'))
  const dataCoach = locationForstate.state.dataCoach;
  const getIndex=days.indexOf(locationForstate.state.reservation[0].day)

  console.log("getIndex", getIndex);
  console.log("dataUser", dataUser);
  console.log("dataCoach", dataCoach);
  console.log("newDataa", locationForstate.state);
  console.log("locationForstate.state.indexsession", locationForstate.state.indexsession);
  
  const acceptReservation = () => {
      const updateAllClient = allDataClient.map((client, indice) => {
        if (client.firstName === dataCoach.firstName) {
          const updateReservation = client.reservation.map((element, index) => {
            if (getIndex === index) {
              return  element.map((session,i)=>{
                if(i === locationForstate.state.indexsession){
                  return{...session,reservationState:"accepted"}
                }
              })
            } else {
              return [...element];
            }
          });
          return {...client,reservation:updateReservation}
        } else {
          return { ...client };
        }
    });
      const newReservation =(array,day)=>{
      return  array.map((element, index) => {
        if (index === day) {
          const result = [];
  
          element.map((elem, i) => {
            if (i === locationForstate.state.indexsession) {
              result.push({ ...elem ,reservationState:"accepted"});
              return;
            }
            result.push({ ...elem });
            return;
          });
          return result;
        }
        return [...element];
      });
      } 
      const updateReservation1=newReservation(locationForstate.state.dataUsers,locationForstate.state.indexReservation)
      const newDataUser = { ...dataUser, reservation: updateReservation1 };

      const updateAllCoach=allDataCoach.map((domaine)=>{
        if(dataUser.domaine===domaine.domaine){
         const updateCoachs= domaine.coachs.map((coach,indice)=>{
          const updateReservation2=newReservation(coach.reservation,getIndex)
            if(coach.firstName===dataUser.firstName){
              console.log("updateReservation2",updateReservation2);

              return{...coach ,reservation:updateReservation2}
            }
            else{
              return {...coach}
            }
          })
          return {...domaine,coachs:updateCoachs}
        }else{
          return {...domaine}
        }
      })
      // console.log("locationForstate.state.dataUsers",newDataUser);
      // console.log("coach.reservation",updateAllCoach);
      localStorage.setItem('dataCoach',JSON.stringify(updateAllCoach))
      localStorage.setItem("dataUser", JSON.stringify(newDataUser));
      localStorage.setItem('dataClient',JSON.stringify(updateAllClient))
      navigate("/");
      setHideTabBar(true);
      sethideTabBarforCoachDetail(false)
    };


  const cancelReservation = () => {

    const updateAllClient = allDataClient.map((client, indice) => {
      if (client.firstName === dataCoach.firstName) {
        const updateReservation = client.reservation.map((element, index) => {
          if (getIndex === index) {
            return [
              ...element.slice(1).map((session, i) => {
                if (i === locationForstate.state.indexsession) {
                  return ;
                } else {
                  return { ...session };
                }
              }),
            ];
          } else {
            console.log("dkj");
            return [...element];
          }
        });
        return {...client,reservation:updateReservation}
      } else {
        return { ...client };
      }
  });
  

    const newReservation = locationForstate.state.dataUsers.map((element, index) => {
      if (index === locationForstate.state.indexReservation) {
        const result = [];

        element.map((elem, i) => {
          if (i === locationForstate.state.indexsession) {
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


    const updateAllCoach=allDataCoach.map((domaine)=>{
      if(dataUser.domaine===domaine.domaine){
       const updateCoachs= domaine.coachs.map((coach,indice)=>{
          if(coach.firstName===dataUser.firstName){
            return{...coach ,reservation:newReservation}
          }
          else{
            return {...coach}
          }
        })
        return{...domaine,coachs:updateCoachs}
      }else{
        return {...domaine}
      }
    })
    localStorage.setItem('dataCoach',JSON.stringify(updateAllCoach))
    localStorage.setItem("dataUser", JSON.stringify(newDataUser));
    localStorage.setItem('dataClient',JSON.stringify(updateAllClient))
    navigate("/");
    setHideTabBar(true);
    sethideTabBarforCoachDetail(false)
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
        zoom={15}
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
              <p className="txt-train">
                train with
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
          <p className="bioCoach">{dataCoach.bio}</p>
          {locationForstate.state.reservationState === "pending" ? (
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <button className="btn-location" onClick={() => { cancelReservation()}}>
                Cancel Request
              </button>
              <button
                className="btn-location" onClick={() => {acceptReservation()}}>
                Accept Request
              </button>
            </div>
          ) : (
            <button className="btn-location" onClick={() => { cancelReservation()}}>
              Cancel Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientLocation;
