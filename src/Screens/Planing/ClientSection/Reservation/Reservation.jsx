import React, { useState } from "react";
import "./reservation.css";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import BackIcon from "../../../../assets/icons/BackIcon";
import ArrowTime from "../../../../assets/icons/Planing/ArrowTime";
import { useNavigate, useLocation } from "react-router-dom";

function Reservation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [seeAvailableDay, setSeeAvailableDay] = useState(999);

  const data = location.state.availability;
  console.log("data", data);

  const [openDay, setOpenDay] = useState(false);
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
    <div className="reservation-container">
      <div className="page-container">
        <div className="navigate">
          <div style={{ textAlign: "left", marginRight: 30 }}>
            <BackIcon />
          </div>

          <p className="name-page">Reservation</p>
        </div>

        {data.map((element, index) => {
          console.log("element.image_user", location.state.image_user);
          return (
            <div>
              <p className="day">{days[index]}</p>
              <div
                className="bookDay"
                onClick={() => {
                  seeAvailableDay === index
                    ? setSeeAvailableDay(999)
                    : setSeeAvailableDay(index);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      className="image-user"
                      src={location.state.image_user}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        margin: 0,
                        // marginTop:16
                      }}
                    >
                      Check my availablility
                    </p>
                    {element.length > 0 ? (
                      <p
                        style={{
                          color: "#519750",
                          fontFamily: "Inter",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "normal",
                          margin: 0,
                          marginTop: 15,
                          textAlign: "left",
                        }}
                      >
                        Disponible
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "red",
                          fontFamily: "Inter",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "normal",
                          margin: 0,
                          marginTop: 15,
                          textAlign: "left",
                        }}
                      >
                        not disponible
                      </p>
                    )}
                  </div>
                </div>
                <div style={{ marginRight: 10 }}>
                  <ArrowrightIcon />
                </div>
              </div>
              {seeAvailableDay === index ? (
                <div>
                  {element.length > 0 ? (
                    <div>
                      {element.map((elem, i) => {
                        return (
                          
                          <div className="book-Horaire">
                            <div className="time-book">
                              <p className="txt-time">
                                {elem.from > 12
                                  ? `${elem.from}:00 Pm`
                                  : `${elem.from}:00 Am`}
                              </p>
                              <ArrowTime />
                              <p className="txt-time">
                                {elem.to > 12
                                  ? `${elem.to}:00 Pm`
                                  : `${elem.to}:00 Am`}
                              </p>
                            </div>
                            <div style={{ marginRight: 10 }}>
                              <ArrowrightIcon />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
        {/* booking Day */}
        {/* <div>
          <p className="day">Today</p>
          <div className="bookDay">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="image-user"></div>
              <p
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Check my availablility
              </p>
            </div>
            <div style={{ marginRight: 10 }}>
              <ArrowrightIcon />
            </div>
          </div>


          <div className="bookDay">
            <div className="time-book">
              <p className="txt-time">17:00 Pm</p>
              <ArrowTime />
              <p className="txt-time">18:00 Pm</p>
            </div>
            <div className="btn-reserve">
              <p className="txt-reserve">Reserve</p>
            </div>
          </div>
          <div className="bookDay">
            <div className="time-book">
              <p className="txt-time">17:00 Pm</p>
              <ArrowTime />
              <p className="txt-time">18:00 Pm</p>
            </div>
            <div className="btn-reserve">
              <p className="txt-reserve">Reserve</p>
            </div>
          </div>
          <div className="bookDay">
            <div className="time-book">
              <p className="txt-time">17:00 Pm</p>
              <ArrowTime />
              <p className="txt-time">18:00 Pm</p>
            </div>
            <div className="btn-reserve">
              <p className="txt-reserve">Reserve</p>
            </div>
          </div>
        </div>

        <div>
          <p className="day">Tomorow</p>
          <div
            className="bookDay"
            onClick={() => {
              setOpenDay(!openDay);
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="image-user"></div>
              <p
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Check my availablility
              </p>
            </div>
            <div style={{ marginRight: 10 }}>
              <ArrowrightIcon />
            </div>
          </div>
          {openDay ? (
            <div>
              <div className="bookDay">
                <div className="time-book">
                  <p className="txt-time">17:00 Pm</p>
                  <ArrowTime />

                  <p className="txt-time">18:00 Pm</p>
                </div>
                <div className="btn-reserve">
                  <p className="txt-reserve">Reserve</p>
                </div>
              </div>
              <div className="bookDay">
                <div className="time-book">
                  <p className="txt-time">17:00 Pm</p>
                  <ArrowTime />

                  <p className="txt-time">18:00 Pm</p>
                </div>
                <div className="btn-reserve">
                  <p className="txt-reserve">Reserve</p>
                </div>
              </div>
              <div className="bookDay">
                <div className="time-book">
                  <p className="txt-time">17:00 Pm</p>
                  <ArrowTime />

                  <p className="txt-time">18:00 Pm</p>
                </div>
                <div className="btn-reserve">
                  <p className="txt-reserve">Reserve</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <p className="day">Tomorow</p>
          <div className="bookDay">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="image-user"></div>
              <p
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Check my availablility
              </p>
            </div>
            <div style={{ marginRight: 10 }}>
              <ArrowrightIcon />
            </div>
          </div>
        </div>

        <div>
          <p className="day">Tomorow</p>

          <div className="bookDay">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="image-user"></div>
              <p
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Check my availablility
              </p>
            </div>
            <div style={{ marginRight: 10 }}>
              <ArrowrightIcon />
            </div>
          </div>
        </div>

        <div>
          <p className="day">Tomorow</p>

          <div className="bookDay" onClick={() => {}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="image-user"></div>
              <p
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Check my availablility
              </p>
            </div>
            <div style={{ marginRight: 10 }}>
              <ArrowrightIcon />
            </div>
          </div>
        </div> */}

        <div style={{ height: 120 }}></div>
      </div>
    </div>
  );
}

export default Reservation;
