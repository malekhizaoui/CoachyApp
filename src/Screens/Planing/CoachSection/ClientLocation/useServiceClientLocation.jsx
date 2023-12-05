import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import L from "leaflet";
import "leaflet-routing-machine";
import "./clientLocation.css";
import { useNavigate, useLocation } from "react-router-dom";

function useServiceClientLocation(
  setHideTabBar,
  sethideTabBarforCoachDetail,
  setOpenModal
) {
  const position = [47.184475, 8.505185];
  const [location, setLocation] = useState(null);
  const locationForstate = useLocation();
  const navigate = useNavigate();
  const data = localStorage.getItem("currentUser");
  const dataUser = JSON.parse(data);
  const alldataDomaineCoaching = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
  const allDataClient = JSON.parse(localStorage.getItem("dataClient"));
  const dataDomaineCoaching = locationForstate.state.dataDomaineCoaching;
  const getPostion = JSON.parse(localStorage.getItem("position"));
  const { t } = useTranslation();
  const days = [
    t("monday"),
    t("tuesday"),
    t("wednesday"),
    t("thursday"),
    t("friday"),
    t("saturday"),
    t("sunday"),
  ];
  const getIndex = days.indexOf(locationForstate.state.reservation[0].day);

  const acceptReservation = () => {
    const updateAllClient = allDataClient.map((client, indice) => {
      if (client.firstName === dataDomaineCoaching.firstName) {
        const updateReservation = client.reservation.map((element, index) => {
          if (getIndex === index) {
            return element.map((session, i) => {
              if (i === locationForstate.state.indexsession) {
                return { ...session, reservationState: "accepted" };
              } else {
                return { ...session };
              }
            });
          } else {
            return [...element];
          }
        });
        return {
          ...client,
          reservation: updateReservation,
          notificationPlaning: true,
        };
      } else {
        return { ...client };
      }
    });
    const newReservation = (array, day) => {
      return array.map((element, index) => {
        if (index === day) {
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
    };

    const updateReservation1 = newReservation(
      locationForstate.state.dataUsers,
      locationForstate.state.indexReservation
    );
    const newDataUser = { ...dataUser, reservation: updateReservation1 ,notificationPlaning:true};

    const updateAllCoach = alldataDomaineCoaching.map((domaine) => {
      if (dataUser.domaine === domaine.domaine) {
        const updateCoachs = domaine.coachs.map((coach, indice) => {
          const updateReservation2 = newReservation(
            coach.reservation,
            getIndex
          );
          if (coach.firstName === dataUser.firstName) {
            return { ...coach, reservation: updateReservation2,notificationPlaning:true };
          } else {
            return { ...coach };
          }
        });
        return { ...domaine, coachs: updateCoachs };
      } else {
        return { ...domaine };
      }
    });
    localStorage.setItem("dataDomaineCoaching", JSON.stringify(updateAllCoach));
    localStorage.setItem("currentUser", JSON.stringify(newDataUser));
    localStorage.setItem("dataClient", JSON.stringify(updateAllClient));
    navigate("/");
    setHideTabBar(true);
    sethideTabBarforCoachDetail(false);
  };

  const cancelReservation = () => {
    const updateAllClient = allDataClient.map((client, indice) => {
      if (client.firstName === dataDomaineCoaching.firstName) {
        const updateReservation = client.reservation.map((element, index) => {
          if (getIndex === index) {
            return [
              ...element.slice(1).map((session, i) => {
                if (i === locationForstate.state.indexsession) {
                  return;
                } else {
                  return { ...session };
                }
              }),
            ];
          } else {
            return [...element];
          }
        });
        return { ...client, reservation: updateReservation,notificationPlaning:true };
      } else {
        return { ...client };
      }
    });

    const newReservation = locationForstate.state.dataUsers.map(
      (element, index) => {
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
      }
    );
    const newDataUser = { ...dataUser, reservation: newReservation,notificationPlaning:true };

    const updateAllCoach = alldataDomaineCoaching.map((domaine) => {
      if (dataUser.domaine === domaine.domaine) {
        const updateCoachs = domaine.coachs.map((coach, indice) => {
          if (coach.firstName === dataUser.firstName) {
            return { ...coach, reservation: newReservation,notificationPlaning:true };
          } else {
            return { ...coach };
          }
        });
        return { ...domaine, coachs: updateCoachs };
      } else {
        return { ...domaine };
      }
    });
    localStorage.setItem("dataDomaineCoaching", JSON.stringify(updateAllCoach));
    localStorage.setItem("currentUser", JSON.stringify(newDataUser));
    localStorage.setItem("dataClient", JSON.stringify(updateAllClient));
    navigate("/");
    setHideTabBar(true);
    sethideTabBarforCoachDetail(false);
  };

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${dataDomaineCoaching.location.longitude},${dataDomaineCoaching.location.latitude}`;
    window.open(googleMapsUrl, "_blank");
    setOpenModal(false);
  };

  const customIcon = L.icon({
    iconUrl: require("../../../../assets/images/marker-icon.png"),
    shadowUrl: require("../../../../assets/images/marker-shadow.png"),
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return {
    location,
    position,
    customIcon,
    getPostion,
    dataDomaineCoaching,
    locationForstate,
    cancelReservation,
    acceptReservation,
    openGoogleMaps,
    t,
  };
}

export default useServiceClientLocation;
