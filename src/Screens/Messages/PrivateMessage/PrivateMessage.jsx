import React, { useState } from "react";
import BackIcon from "../../../assets/icons/BackIcon";
import "./privateMessage.css";
import CustomInput from "./CustomInput";
import { useLocation } from "react-router-dom";
function PrivateMessage({ setHideTabBar }) {
  const location = useLocation();
  const getUser = JSON.parse(localStorage.getItem("dataUser"));
  const getClients = JSON.parse(localStorage.getItem("dataClient"));
  const getCoachs = JSON.parse(localStorage.getItem("dataCoach"));
  const [newMessage, setNewMessage] = useState("");
  const [allmessages, setAllMessages] = useState(
    getUser.messages[location.state.index ? location.state.index : 0]
      .allMessages
  );
  console.log("getUser", getUser);
  console.log("location.state", location.state);
  const user = location.state.index ? location.state.index : 0;

  const sendMessage = () => {
    if (newMessage.length !== 0) {
      const newDataUserMessages = getUser.messages.map((element, index) => {
        if (index === user) {
          console.log("element", element.allMessages);
          const updateMessages = element.allMessages;
          updateMessages.push({
            firstName: getUser.firstName,
            type: getUser.type,
            message: newMessage,
          });
          return { ...element, allMessages: updateMessages };
        } else {
          return { ...element };
        }
      });
      const newUser = { ...getUser, messages: newDataUserMessages };
      if (getUser.type === "Client") {
        const updateAllClient = getClients.map((element, index) => {
          if (element.firstName === getUser.firstName) {
            return newUser;
          } else {
            return { ...element };
          }
        });
        const updatAllCoachsbyDomaine = getCoachs.map((element, index) => {
          const updatingCoachs = element.coachs.map((coach) => {
            if (coach.firstName === location.state.user.firstName) {
             const updateMessages= coach.messages.map((message) => {
                if (message.user.firstName === getUser.firstName) {
                  const addnewMessage = message.allMessages;
                  addnewMessage.push({
                    type: "Client",
                    firstName: getUser.firstName,
                    message: newMessage,
                    phoneNumber: getUser.phoneNumber,
                  });

                  return{...message,allMessages:addnewMessage}
                } else {
                  return { ...message };
                }
              });
              return{...coach,messages:updateMessages}
            } else {
              return { ...coach };
            }
          });
          return { ...element, coachs: updatingCoachs };
        });
        // console.log("updatAllCoachsbyDomaine", updatAllCoachsbyDomaine);
        localStorage.setItem("dataClient", JSON.stringify(updateAllClient));
        localStorage.setItem("dataCoach",JSON.stringify(updatAllCoachsbyDomaine));
      } else {
        const updatAllCoachsbyDomaine = getCoachs.map((element, index) => {
          if (element.domaine === getUser.domaine) {
            const updateAllCoachs = element.coachs.map((coach, ind) => {
              if (coach.firstName === getUser.firstName) {
                return { ...coach, messages: newDataUserMessages };
              } else {
                return { ...coach };
              }
            });
            return { ...element, coachs: updateAllCoachs };
          } else {
            return { ...element };
          }
        });
        const updateAllClientFromCoach = getClients.map((element, index) => {
          if (element.firstName === location.state.user.firstName) {
            const updateMessages = element.messages.map((message, indice) => {
              console.log("message", message);
              if (message.user.firstName === getUser.firstName) {
                const addnewMessage = message.allMessages;
                addnewMessage.push({
                  type: "Coach",
                  firstName: getUser.firstName,
                  message: newMessage,
                  phoneNumber: getUser.phoneNumber,
                });
                console.log("addnewMessage", addnewMessage);
                return { ...message, allMessages: addnewMessage };
              } else {
                return { ...message };
              }
            });
            return { ...element, messages: updateMessages };
          } else {
            return { ...element };
          }
        });
        localStorage.setItem("dataCoach",JSON.stringify(updatAllCoachsbyDomaine));
        localStorage.setItem("dataClient",JSON.stringify(updateAllClientFromCoach));
      }

      localStorage.setItem("dataUser", JSON.stringify(newUser));
      setAllMessages(newUser.messages[location.state.index ? location.state.index : 0].allMessages);
    }
  };
  return (
    <div className="container-private-message">
      <div className="container-class">
        <div className="header-private-message">
          <div
            onClick={() => {
              setHideTabBar(true);
            }}
          >
            <BackIcon />
          </div>
          <img
            className="image-user"
            src={location.state.user.image_user}
            style={{ marginLeft: 30 }}
          />
          <p className="name-user-private-message">{location.state.user.firstName} {location.state.user.lastName}</p>
        </div>
        <div className="container-class"></div>
      </div>
      <div className="allMessagesPrivate-container">
        {allmessages.map((message, index) => {
          if (message.type === getUser.type) {
            return (
              <div className="message-container-me" key={index}>
                <div className="message-content">
                  <p className="message-txt-me">{message.message}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="message-container-destination" key={index}>
                <div className="message-content-destination">
                  <p className="message-txt-destination">{message.message}</p>
                </div>
              </div>
            );
          }
        })}
      </div>

      <CustomInput sendMessage={sendMessage} setNewMessage={setNewMessage} />
    </div>
  );
}

export default PrivateMessage;
