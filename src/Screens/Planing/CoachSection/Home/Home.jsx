import React, { useEffect, useState } from "react";
import "./coach.css";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import ArrowTime from "../../../../assets/icons/Planing/ArrowTime";
import { useNavigate } from "react-router-dom";
import { Geolocation } from "@capacitor/geolocation";
import { useTranslation } from "react-i18next";
function Home({ setHideTabBar, sethideTabBarforCoachDetail }) {
  const data = localStorage.getItem("dataUser");
  const dataUser = JSON.parse(data);
  const navigate = useNavigate();
  const [newData, setNewData] = useState(dataUser.reservation);
  const {t}=useTranslation()
  const getLang=localStorage.getItem('language')
  const getCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });
        localStorage.setItem('position',JSON.stringify([
          coordinates.coords.latitude,
          coordinates.coords.longitude,
        ]))

    } catch (error) {
      console.error("Error getting location", error);
    }
  };

  useEffect(() => {
    reorganizeReservation();
    getCurrentPosition()
  }, []);

  const getWeekDaysInfo=()=> {
    const today = new Date();
    const daysInfo = [];
    daysInfo.push(
      `${t("today")},${today.getDate()} ${today.toLocaleDateString(getLang==='fr' ?"fr-FR":"en-US", {
        month: "long",
      })}`
    );
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    daysInfo.push(
      `${t("tomorow")}, ${tomorrow.getDate()} ${tomorrow.toLocaleDateString(getLang==='fr' ?"fr-FR":"en-US", {
        month: "long",
      })}`
    );

    for (let i = 2; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      daysInfo.push(
        `${nextDay.toLocaleDateString(getLang==='fr' ?"fr-FR":"en-US", {
          weekday: "long",
        })}, ${nextDay.getDate()} ${nextDay.toLocaleDateString(getLang==='fr' ?"fr-FR":"en-US", {
          month: "long",
        })}`
      );
    }

    return daysInfo;
  }
  const days = getWeekDaysInfo();
  function getFutureDates(array, inputNumber) {
    const result = [];
    for (let i = inputNumber; i < array.length; i++) {
      result.push(array[i]);
    }

    for (let i = 0; i < inputNumber; i++) {
      result.push(array[i]);
    }
    return result;
  }

  const reorganizeReservation = () => {
    const data = localStorage.getItem("today");
    const getToday = JSON.parse(data);
    if (!getToday) {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const newDataReservation =
        dayOfWeek === 0
          ? getFutureDates(dataUser.reservation, 6)
          : getFutureDates(dataUser.reservation, dayOfWeek - 1);
      setNewData(newDataReservation);
      localStorage.setItem("dataUser",JSON.stringify({ ...dataUser, reservation: newDataReservation }));
      localStorage.setItem("today", JSON.stringify(days[0]));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="welcome-page">
          <p className="look-coach">{t('planing')}</p>
          <CalendarIcon />
        </div>
        {/*  RESERVATION ACCEPTED */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {newData.map((element, index) => {
            if (element.length === 0) {
              return (
                <>
                  <p className="day">{days[index]}</p>
                  {/* <p className="Restday">Rest Day</p> */}
                  <div className="RestDayContainer">
                    <div className="rest-Day">
                      <p>{t('restday')}</p>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <p className="day">{days[index]}</p>
                  {/* <div className="RestDayContainer">
                    <div style={{ flex: 0.5 }}>
                      <img className="image-user" src={dataUser.image_user} />
                    </div>
                    <div className="check-Day">
                      <p>Check Your Planing</p>
                    </div>
                    <div style={{ flex: 0.5, alignSelf: "center" }}>
                      <ArrowrightIcon />
                    </div>
                  </div> */}
                  {element.map((booking, i) => {
                    console.log("booking.client.image_user",booking.client);
                    if (booking.reservationState === "noRequest") {
                      return (
                        <div className="RestDayContainer">
                          <div
                            style={{
                              flex: 1.8,
                              flexDirection: "row",
                              display: "flex",
                              marginLeft: 10,
                              alignItems: "center",
                            }}
                          >
                            <p style={{ fontSize: "60%" }}>
                              {booking.from > 12
                                ? booking.from + ":00 Pm"
                                : booking.from + ":00 Am"}
                            </p>
                            <ArrowTime />
                            <p style={{ fontSize: "60%" }}>
                              {booking.to > 12
                                ? booking.to + ":00 Pm"
                                : booking.to + ":00 Am"}
                            </p>
                          </div>
                          <div className="rest-Day">
                            <p>No Request</p>
                          </div>
                          <div style={{ flex: 0.5, alignSelf: "center" }}>
                            <ArrowrightIcon />
                          </div>
                        </div>
                        // <></>
                      );
                    }
                    else if (booking.reservationState === "accepted") {
                      return (
                        <div
                          className="reservation"
                          onClick={() => {
                            console.log("days[index]", days[index]);
                            navigate("/ClientLocation", {
                              state: {
                                dataCoach: booking.client,
                                reservationState: "accepted",
                                indexReservation: index,
                                indexsession: i,
                                dataUsers: newData,
                                reservation:newData[index]

                              },
                            });
                            setHideTabBar(true);
                            sethideTabBarforCoachDetail(true);
                          }}
                        >
                          <div className="line-check"></div>

                          <div className="rectangle-content">
                            <div className="time">
                              <p className="text">
                                {booking.from > 12
                                  ? booking.from + ":00 pm"
                                  : booking.from + ":00 am"}
                              </p>
                              <p className="text">
                                {booking.to > 12
                                  ? booking.to + ":00 pm"
                                  : booking.to + ":00 am"}
                              </p>
                            </div>
                            <div className="detail-user">
                              <img
                                className="image-user"
                                src={booking.client.image_user?booking.client.image_user:""}
                              />
                              <div className="style-user-detail">
                                <p className="text-name">
                                  {booking.client.firstName}{" "}
                                  {booking.client.lastName}
                                </p>
                                <p className="text-location">
                                  {booking.client.location.city}
                                </p>
                              </div>
                            </div>
                            <div style={{ alignSelf: "center", flex: 0.4 }}>
                              <ArrowrightIcon />
                            </div>
                          </div>
                          <p className="text-checkReservation">
                            {t('checkReservation')}
                          </p>
                        </div>
                      );
                    }
                    else{
                      return (
                        <div
                          className="reservation"
                          onClick={() => {
                            navigate("/ClientLocation", {
                              state: {
                                dataCoach: booking.client,
                                reservationState: "pending",
                                indexReservation: index,
                                indexsession: i,
                                dataUsers: newData,
                                reservation:newData[index]
                              },
                            });
                            setHideTabBar(true);
                            sethideTabBarforCoachDetail(true);
                          }}
                        >
                          <div className="line-pending"></div>

                          <div className="rectangle-content">
                            <div className="time">
                              <p className="text">
                                {booking.from > 12
                                  ? booking.from + ":00 pm"
                                  : booking.from + ":00 am"}
                              </p>
                              <p className="text">
                                {booking.to > 12
                                  ? booking.to + ":00 pm"
                                  : booking.to + ":00 am"}
                              </p>
                            </div>
                            <div className="detail-user">
                              <img
                                className="image-user"
                                src={booking.client.image_user?booking.client.image_user:""}
                              />
                              <div className="style-user-detail">
                                <p className="text-name">
                                  {booking.client.firstName}{" "}
                                  {booking.client.lastName}
                                </p>
                                <p className="text-location">
                                
                                  {booking.client.location.city}
                                </p>
                              </div>
                            </div>
                            <div style={{ alignSelf: "center", flex: 0.4 }}>
                              <ArrowrightIcon />
                            </div>
                          </div>
                          <p className="text-pendingReservation">
                            {t('pendingReservation')}
                          </p>
                        </div>
                      );
                    }
                  })}
                </>
              );
            }
          })}
        </div>
        <div style={{ height: 120 }}></div>
      </div>
    </div>
  );
}

export default Home;
