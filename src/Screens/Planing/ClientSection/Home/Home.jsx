import React from "react";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import "./home.css";
import { data } from "../../../../DataBase/clientDB/Data";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  console.log("data", data);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
          {data[0].reservation.map((element, index) => {
            return (
              <>
                <p className="day">{days[index]}</p>
                {element.length <= 0 ? (
                  <div className="noReservation">
                    <div style={{ flex: 0.5 }}></div>
                    <div className="available" onClick={()=>{navigate("/DomaineCoaching")}}>
                      <p className="see-coachs">SEE THE AVAILABLE COACHS</p>
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
                          <div className="reservation">
                            <div className="line-check"></div>

                            <div className="rectangle-content">
                              <div className="time">
                                <p className="text">{elem.from}:00 pm</p>
                                <p className="text">{elem.to}:00 pm</p>
                              </div>
                              <div className="detail-user">
                                <img className="image-user" src={elem.coach.pic}/>
                                <div className="style-user-detail">
                                  <p className="text-name">
                                    {elem.coach.firstName} {elem.coach.lastName}
                                  </p>
                                  <p className="text-location">
                                    {elem.coach.location}
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
                          <div className="reservation">
                            <div className="line-pending"></div>

                            <div className="rectangle-content">
                              <div className="time">
                                <p className="text">{elem.from}:00 pm</p>
                                <p className="text">{elem.to}:00 pm</p>
                              </div>
                              <div className="detail-user">
                              <img className="image-user" src={elem.coach.pic}/>
                                <div className="style-user-detail">
                                  <p className="text-name">
                                    {elem.coach.firstName} {elem.coach.lastName}
                                  </p>
                                  <p className="text-location">
                                    {elem.coach.location}
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
