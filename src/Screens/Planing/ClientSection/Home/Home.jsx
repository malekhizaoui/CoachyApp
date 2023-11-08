import React, { useState, useEffect } from "react";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import "./home.css";
import Cookies from "universal-cookie";
// import { data } from "../../../../DataBase/clientDB/Data";
import { useNavigate } from "react-router-dom";

function Home({ setHideTabBar, sethideTabBarforCoachDetail }) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const data = localStorage.getItem("dataUser");
  const dataUser=JSON.parse(data)
  const [newData, setNewData] = useState(dataUser.reservation);
  useEffect(() => {
    reorganizeReservation();
  }, []);

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
  const reorganizeReservation = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const newDataReservation =
      dayOfWeek === 0
        ? getFutureDates(dataUser.reservation, 6)
        : getFutureDates(dataUser.reservation, dayOfWeek-1);

    setNewData(newDataReservation);
  };
  return (
    <div>
      <div className="container-homeClient">
        <div className="welcome-page">
          <p className="look-coach">I’m looking for a coach</p>
          <CalendarIcon />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {newData.map((element, index) => {
            return (
              < >
                <p className="day">{days[index]}</p>
                {element.length <= 0 ? (
                  <div className="noReservation">
                    <div style={{ flex: 0.5 }}></div>
                    <div  
                      className="available"
                      onClick={() => {
                        navigate("/DomaineCoaching",{state:index});
                      }}
                    >
                      <p className="see-coachs">See the available coachs</p>
                    </div>
                    <div className="icon">
                      <ArrowrightIcon />
                    </div>
                  </div>
                ) : (
                  <>
                    {element.map((elem, i) => {
                      if (elem.reservation === "accepted") {
                        return (
                          <div
                          key={i}
                            className="reservation"
                            onClick={() => {
                              navigate("/CoachLocation", { state: elem.coach });
                              setHideTabBar(true);
                              sethideTabBarforCoachDetail(true);
                            }}
                          >
                            <div className="line-check"></div>

                            <div className="rectangle-content">
                              <div className="time">
                                <p className="text">{elem.from}:00 pm</p>
                                <p className="text">{elem.to}:00 pm</p>
                              </div>
                              <div className="detail-user">
                                <img
                                  className="image-user"
                                  src={elem.coach.image_user}
                                />
                                <div className="style-user-detail">
                                  <p className="text-name">
                                    {elem.coach.firstName} {elem.coach.lastName}
                                  </p>
                                  <p className="text-location">
                                    {elem.coach.location.city}
                                  </p>
                                </div>
                              </div>
                              <div style={{ alignSelf: "center", flex: 0.5 }}>
                                <ArrowrightIcon />
                              </div>
                            </div>
                            <p className="text-checkReservation">
                              Check reservation
                            </p>
                          </div>
                        );
                      } else {
                        return (
                          <div className="reservation"
                          key={i}

                          >
                            <div className="line-pending"></div>

                            <div
                              className="rectangle-content"
                              onClick={() => {}}
                            >
                              <div className="time">
                                <p className="text">{elem.from}:00 pm</p>
                                <p className="text">{elem.to}:00 pm</p>
                              </div>
                              <div className="detail-user">
                                <img
                                  className="image-user"
                                  src={elem.coach.image_user}
                                />
                                <div className="style-user-detail">
                                  <p className="text-name">
                                    {elem.coach.firstName} {elem.coach.lastName}
                                  </p>
                                  <p className="text-location">
                                    {elem.coach.location.city}
                                  </p>
                                </div>
                              </div>
                              <div style={{ alignSelf: "center", flex: 0.5 }}>
                                <ArrowrightIcon />
                              </div>
                            </div>
                            <p className="text-checkReservation">
                              Pending reservation
                            </p>
                          </div>
                        );
                      }
                    })}
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div style={{ height: 8 }}></div>
    </div>
  );
}

export default Home;
