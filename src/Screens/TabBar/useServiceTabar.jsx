import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function useServiceTabar(handleTabItem, tabItem) {
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const allDataCoachs = JSON.parse(localStorage.getItem("dataCoach"));
  const allDataClient = JSON.parse(localStorage.getItem("dataClient"));
  const navigate = useNavigate();
  const { t } = useTranslation();
  const showNotif = (tabBarName) => {
    if (dataUser.type === "Coach") {
      const updateallDataCoachs = allDataCoachs.map((domaine) => {
        if (domaine.domaine === dataUser.domaine) {
          const updateCoach = domaine.coachs.map((coach) => {
            if (coach.firstName === dataUser.firstName) {
              if (tabBarName === "Messages") {
                return { ...coach, notificationMessage: false };
              } else {
                return { ...coach, notificationPlaning: false };
              }
            } else {
              return { ...coach };
            }
          });
          return { ...domaine, coachs: updateCoach };
        } else {
          return { ...domaine };
        }
      });
      localStorage.setItem("dataCoach", JSON.stringify(updateallDataCoachs));
    } else {
      const updateAllDataClients = allDataClient.map((client) => {     
        if (client.firstName === dataUser.firstName) {
          if (tabBarName === "Messages") {
            return { ...client, notificationMessage: false };
          } else {
            return {
              ...client,
              notificationPlaning: false,
            };
          }
        } else {
          return { ...client };
        }
      });
      localStorage.setItem("dataClient", JSON.stringify(updateAllDataClients));
    }
    handleTabItem(tabBarName);
    navigate("/");
    localStorage.setItem(
      "dataUser",
      tabBarName === "Messages"
        ? JSON.stringify({ ...dataUser, notificationMessage: false })
        : JSON.stringify({ ...dataUser, notificationPlaning: false })
    );
  };
  return {
    showNotif,tabItem,t,dataUser,navigate
  }
}

export default useServiceTabar