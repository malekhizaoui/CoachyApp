import React, { useState } from "react";
import "./reservation.css";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import BackIcon from "../../../../assets/icons/BackIcon";
import ArrowTime from "../../../../assets/icons/Planing/ArrowTime";
function Reservation() {
  const [openDay, setOpenDay] = useState(false);
  return (
    <div className="reservation-container">
      <div className="page-container">
        <div className="navigate">
          <div style={{ textAlign: "left", marginRight: 30 }}>
            <BackIcon />
          </div>

          <p className="name-page">Reservation</p>
        </div>

        {/* booking Day */}
        <div>
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

        {/* Check or edit availablility */}
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
        </div>

        <div style={{ height: 120 }}></div>
      </div>
    </div>
  );
}

export default Reservation;
