import React from "react";
import MessagesIcon from "../../assets/icons/TabBar/MessagesIcon";
import ProfileFocusedIcon from "../../assets/icons/TabBar/ProfileFocusedIcon";
import ProfileIcon from "../../assets/icons/TabBar/ProfileIcon";
import PlaningFocusedIcon from "../../assets/icons/TabBar/PlaningFocusedIcon";
import PlaningIcon from "../../assets/icons/TabBar/PlaningIcon";
import MessageFocusedIcon from "../../assets/icons/TabBar/MessageFocusedIcon";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./tabBar.css";

function TabBar({ handleTabItem, tabItem }) {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const allDataCoachs = JSON.parse(localStorage.getItem("dataCoach"));
  const allDataClient = JSON.parse(localStorage.getItem("dataClient"));
  const navigate = useNavigate();
  const { t } = useTranslation();
  console.log();
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
      console.log("mAKHVDBKsbqmkBSQDMSQHJD");
      const updateAllDataClients = allDataClient.map((client) => {
      console.log("client.firstName",client.firstName);    
      console.log("client.firstName",client.firstName);   
        if (client.firstName === dataUser.firstName) {
          console.log("tabBarName",tabBarName);
          if (tabBarName === "Messages") {
            console.log("lihazgdmkhgDMKHqsmdhLQJHDVLQJHVD");
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
  return (
    <footer className="tabBar">
      <div className="tabBar">
        <div className="tabList">
          {/* Tab Messages */}

          <div
            className="tabItem1"
            onClick={() => {
              showNotif("Messages");
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {tabItem !== "Messages" ? (
                <MessagesIcon />
              ) : (
                <MessageFocusedIcon />
              )}
              {dataUser.notificationMessage && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                ></div>
              )}
            </div>
            <p
              className="p-tabBar"
              style={tabItem === "Messages" ? { color: "#5D54A0" } : null}
            >
              {t("messages")}
            </p>
          </div>

          {/* Tab Planing */}

          <div
            className="tabItem2"
            onClick={() => {
              showNotif("Planing");
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {dataUser.notificationPlaning && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                ></div>
              )}
              {tabItem !== "Planing" ? <PlaningIcon /> : <PlaningFocusedIcon />}
            </div>
            <p
              className="p-tabBar"
              style={tabItem === "Planing" ? { color: "#5D54A0" } : null}
            >
              {t("planing")}
            </p>
          </div>

          {/* Tab Profile */}

          <div
            className="tabItem3"
            onClick={() => {
            handleTabItem("Profile");
            navigate("/");
            }}
          >
            {tabItem !== "Profile" ? <ProfileIcon /> : <ProfileFocusedIcon />}
            <p
              className="p-tabBar"
              style={tabItem === "Profile" ? { color: "#5D54A0" } : null}
            >
              {t("profile")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TabBar;
