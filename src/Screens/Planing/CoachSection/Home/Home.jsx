import React, { useEffect, useState } from "react";
import "./coach.css";
import Cookies from "universal-cookie";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import ArrowTime from "../../../../assets/icons/Planing/ArrowTime";
// import { data } from "../../../../DataBase/clientDB/Data";
import { useNavigate } from "react-router-dom";
function Home({ setHideTabBar, sethideTabBarforCoachDetail }) {
  const cookies = new Cookies();
  const dataUser = cookies.get("dataUser");
  const navigate = useNavigate();
  const [newData, setNewData] = useState([]);
  // const [days,setDays]=useState()
  // const days = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  useEffect(() => {
    // getWeekDaysInfo();
    reorganizeReservation();
    console.log("newData",newData);
  },[]);
  const days = getWeekDaysInfo();
  
  function getWeekDaysInfo() {
    const today = new Date();
    const daysInfo = [];
    daysInfo.push(
      `Today,${today.getDate()} ${today.toLocaleDateString("en-US", {
        month: "long",
      })}`
    );
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    daysInfo.push(
      `Tomorrow, ${tomorrow.getDate()} ${tomorrow.toLocaleDateString("en-US", {
        month: "long",
      })}`
    );

    for (let i = 2; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      daysInfo.push(
        `${nextDay.toLocaleDateString("en-US", {
          weekday: "long",
        })}, ${nextDay.getDate()} ${nextDay.toLocaleDateString("en-US", {
          month: "long",
        })}`
      );
    }

    return daysInfo;
  }


  function getFutureDates(array,inputNumber ) {
    // if (inputNumber < 0 || inputNumber > 6) {
    //   console.log('ljhksgdlhgdsqj');
    //   return [];
    // }
    console.log("number",inputNumber);
    console.log("array",array);
    const result = [];
    for (let i = inputNumber; i < array.length; i++) {
      result.push(array[i]);
    }

    for (let i = 0; i < inputNumber; i++) {
      result.push(array[i]);
    }
    console.log("result",result);
    return result;
  }

  const reorganizeReservation = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    console.log("hello");
    const newDataReservation = getFutureDates(dataUser.reservation, dayOfWeek-1);
    setNewData(newDataReservation);
  };

  // console.log("daysInfo", days);
  console.log("dataUser.reservation", dataUser.reservation);
  // console.log("startinngg");
  return (
    <div>
      <div className="container">
        <div className="welcome-page">
          <p className="look-coach">My Planing</p>
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
                      <p>RestDay</p>
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
                    if (i === 0) {
                    }
                    if (booking.reservationState === "noRequest") {
                      return (
                        <div className="RestDayContainer">
                          <div
                            style={{
                              flex: 1.5,
                              flexDirection: "row",
                              display: "flex",
                              marginLeft: 10,
                              alignItems: "center",
                            }}
                          >
                            <p style={{ fontSize: 12 }}>
                              {booking.from > 12
                                ? booking.from + ":00 Pm"
                                : booking.from + ":00 Am"}
                            </p>
                            <ArrowTime />
                            <p style={{ fontSize: 12 }}>
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
                    if (booking.reservationState === "accepted") {
                      return (
                        <div
                          className="reservation"
                          onClick={() => {
                            navigate("/ClientLocation", {
                              state: {
                                dataCoach: booking.client,
                                reservationState: "accepted",
                                indexReservation: index,
                                indexsession: i,
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
                                src={booking.client.image_user}
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
                            check your reservation
                          </p>
                        </div>
                      );
                    }
                    {
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
                                src={booking.client.image_user}
                              />
                              <div className="style-user-detail">
                                <p className="text-name">
                                  {booking.client.firstName}{" "}
                                  {booking.client.lastName}
                                </p>
                                <p className="text-location">
                                  {" "}
                                  {booking.client.location.city}
                                </p>
                              </div>
                            </div>
                            <div style={{ alignSelf: "center", flex: 0.4 }}>
                              <ArrowrightIcon />
                            </div>
                          </div>
                          <p className="text-pendingReservation">
                            Pending reservation
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
