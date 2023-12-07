import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const useReservationService =(setHideTabBar)=> {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [seeAvailableDay, setSeeAvailableDay] = useState(999);
    const [pickTime, setPickTime] = useState(null);
    const [show, setShow] = useState(false);
    const data = location.state;
    console.log("data",data);
    const dataParsed = JSON.parse(localStorage.getItem("currentUser"));
    const alldataDomaineCoaching = JSON.parse(localStorage.getItem("dataDomaineCoaching"));
    const allDataClient = JSON.parse(localStorage.getItem("dataClient"));
    console.log("data",data);
    const days = [
      t('monday'),
      t('tuesday'),
      t('wednesday'),
      t('thursday'),
      t('friday'),
      t('saturday'),
      t('sunday'),
    ];
  
    const reserveSession = (day) => {
      const updatAlldataDomaineCoaching = alldataDomaineCoaching.map((element, index) => {
        if (element.name === data.domaine) {
          const coachUpdate = element.coachs.map((elem, i) => {
            if (elem.firstName === data.firstName) {
              const updateReservation = elem.reservation.map(
                (dayResrvation, place) => {
                  if (day === place) {
                    const coachReservationUpdate = dayResrvation;
                    coachReservationUpdate.push({
                      day: days[day],
                      from: pickTime,
                      to: pickTime + 1,
                      reservationState: "pending",
                      client: {
                        firstName: dataParsed.firstName,
                        image_user: dataParsed.image_user,
                        lastName: dataParsed.firstName,
                        location: {
                          city: dataParsed.location.city,
                          latitude: dataParsed.location.latitude,
                          longitude: dataParsed.location.longitude,
                        },
                      },
                    });
                    return coachReservationUpdate;
                  } else {
                    return [...dayResrvation];
                  }
                }
              );
              let checkIsFound =true
              const updateMessages = elem.messages.map((message) => {
                if (message.user.firstName === dataParsed.firstName) {
                  checkIsFound=checkIsFound&&false
                  const addMessage = message.allMessages;
                  addMessage.push({
                    type: "Client",
                    firstName: dataParsed.firstName,
                    message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                    phoneNumber: dataParsed.phoneNumber,
                  });
                  return { ...message, allMessages: addMessage };
                }
                else{
                  return  {...message}
                 }
              });
              const newMessage = 
              {
                user: {
                  firstName: dataParsed.firstName,
                  lastName: dataParsed.lastName,
                  image_user: dataParsed.image_user,
                },
                allMessages: [
                  {
                    type: "Client",
                    firstName: dataParsed.firstName,
                    message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                    phoneNumber: dataParsed.phoneNumber,
                  },
                ],
              }
              const addNewMessageFromCoach=updateMessages
              checkIsFound&&addNewMessageFromCoach.push(newMessage)
              const messages=elem.messages.length === 0 ? [newMessage] :!checkIsFound? updateMessages: addNewMessageFromCoach
              const newUserData=bookSession(day,messages);
              localStorage.setItem("currentUser",JSON.stringify(newUserData))
              return {...elem,reservation: updateReservation,messages,notificationPlaning:true,
                notificationMessage:true};
            } else {
              return { ...elem };
            }
          });
          return { ...element, coachs: coachUpdate };
        } else {
          return { ...element };
        }
      });
      const updatClient = allDataClient.map((element, index) => {
        if (element.firstName === dataParsed.firstName) {
          const updatedReservation = element.reservation.map((elem, i) => {
            if (i === day) {
              const clientReservationUpdate = elem;
              elem.push({
                day: days[day],
                from: pickTime,
                to: pickTime + 1,
                reservationState: "pending",
                coach: {
                  firstName: data.firstName,
                  lastName: data.lastName,
                  location: {
                    city: data.location.city,
                    latitude: data.location.latitude,
                    longitude: data.location.longitude,
                  },
                  image_user: data.image_user,
                },
              });
              return clientReservationUpdate;
            } else {
              return [...elem];
            }
          });
          let checkIsFound =true
          var updateMessagesClient = element.messages.map((message,i) => {
            console.log("index",i);
            if (message.user.firstName === data.firstName && checkIsFound) {
              console.log("here1");
              checkIsFound=checkIsFound&&false
              const addMessage = message.allMessages;
              addMessage.push({
                type: "Client",
                firstName: dataParsed.firstName,
                message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                phoneNumber: dataParsed.phoneNumber,
              });
              return { ...message, allMessages: addMessage };
            }else{
              console.log("here2");
  
             return  {...message}
            }
          });
          const newMessage = 
            {
              user: {
                firstName: data.firstName,
                lastName: data.lastName,
                image_user: data.image_user,
              },
              allMessages: [
                {
                  type: "Client",
                  firstName: dataParsed.firstName,
                  message: `Bonjour Est ce que vous pouvez checker ton planning pour le jour ${days[day]} car je vous ai envoyé une reservation `,
                  phoneNumber: dataParsed.phoneNumber,
                },
              ],
            };
          const addNewMessageFromClient=updateMessagesClient
          checkIsFound&&addNewMessageFromClient.push(newMessage)
          const messages=element.messages.length === 0 ? [newMessage] :checkIsFound?addNewMessageFromClient: updateMessagesClient
          const newUserData=bookSession(day,messages);
          localStorage.setItem("currentUser",JSON.stringify(newUserData))
          return {...element,
            reservation: updatedReservation,
            messages,
            notificationPlaning:true,
            notificationMessage:true
          };
         
        } else {
          const newUserData = bookSession(day, updateMessagesClient);
          localStorage.setItem("currentUser", JSON.stringify(newUserData));
  
          return { ...element };
        }
      });
      localStorage.setItem("dataDomaineCoaching", JSON.stringify(updatAlldataDomaineCoaching));
      localStorage.setItem("dataClient", JSON.stringify(updatClient));
      setHideTabBar(false)
      navigate("/PaymentScreen",{state:{day:days[day],sessionFrom:pickTime,cout:data.Tarification}});

    };
  



    
    const bookSession = (day, messages) => {
      const newReservation = dataParsed.reservation.map((element, index) => {
        if (day === index) {
          return [
            ...element,
            {
              day: days[day],
              from: pickTime,
              to: pickTime + 1,
              reservation: "pending",
              coach: {
                firstName: data.firstName,
                lastName: data.lastName,
                location: {
                  city: data.location.city,
                  latitude: data.location.latitude,
                  longitude: data.location.longitude,
                },
                image_user: location.state.image_user,
              },
            },
          ];
        } else {
          return [...element];
        }
      });
      return { ...dataParsed, reservation: newReservation, messages,notificationPlaning:true,
        notificationMessage:true };
    };
  return {data,days,seeAvailableDay,setSeeAvailableDay,location,t,setShow,setPickTime,show,pickTime,reserveSession}
}

export default useReservationService 