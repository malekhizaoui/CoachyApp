import React from "react";
import CalendarIcon from "../../../../assets/icons/Planing/CalendarIcon";
import ArrowrightIcon from "../../../../assets/icons/ArrowrightIcon";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="container-homeClient">
        <div className="welcome-page">
          <p className="look-coach">I’m looking for a coach</p>
          <CalendarIcon />
        </div>
        {/*  RESERVATION ACCEPTED */}
        <div style={{ width: "100%",display:"flex",flexDirection:"column",alignItems:"center" }}>
          <p className="day">Today</p>

          <div className="reservation">
          <div className="line-check"></div>
    
            <div className="rectangle-content">
              <div className="time">
                <p className="text">17:00 pm</p>
                <p className="text">18:00 pm</p>
              </div>
              <div className="detail-user">
                <div className="image-user"></div>
                <div className="style-user-detail">
                  <p className="text-name">Malek hizaoui</p>
                  <p className="text-location">genève</p>
                </div>
              </div>
              <div style={{ alignSelf: "center", flex: 0.5 }}>
                <ArrowrightIcon />
              </div>
            </div>
            <p className="text-checkReservation">Check reservation</p>
          </div>
        </div>
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="day">Toay</p>

          <div className="reservation">
            <div className="line-check"></div>

            <div className="rectangle-content">
              <div className="time">
                <p className="text">17:00 pm</p>
                <p className="text">18:00 pm</p>
              </div>
              <div className="detail-user">
                <div className="image-user"></div>
                <div className="style-user-detail">
                  <p className="text-name">Malek hizaoui</p>
                  <p className="text-location">genève</p>
                </div>
              </div>
              <div style={{ alignSelf: "center", flex: 0.5 }}>
                <ArrowrightIcon />
              </div>
            </div>
            <p className="text-checkReservation">Pending reservation</p>
          </div>
        </div> */}
        {/* NO RESERVATION */}

        <p className="day">Tomorow</p>

        <div className="noReservation">
          <div style={{ flex: 0.5 }}></div>
          <div className="available">
            <p className="see-coachs">SEE THE AVAILABLE COACHS</p>
          </div>
          <div className="icon">
            <svg
              style={{ marginTop: 29 }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
            >
              <path
                d="M8.7027 11L0 2.56667L2.64865 0L14 11L2.64865 22L0 19.4333L8.7027 11Z"
                fill="#3F3C3C"
              />
            </svg>
          </div>
        </div>

        {/*  RESERVATION DECLINED */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="day">Wednesday, 20 Novembre</p>

          <div className="reservation">
            <div className="line-pending"></div>

            <div className="rectangle-content">
              <div className="time">
                <p className="text">17:00 pm</p>
                <p className="text">18:00 pm</p>
              </div>
              <div className="detail-user">
                <div className="image-user"></div>
                <div className="style-user-detail">
                  <p className="text-name">Malek hizaoui</p>
                  <p className="text-location">genève</p>
                </div>
              </div>
              <div style={{ alignSelf: "center", flex: 0.5 }}>
                <ArrowrightIcon />
              </div>
            </div>
            <p className="text-pendingReservation">Pending reservation</p>
          </div>
        </div>
        <p className="day">Thursday, 21 Novembre</p>

        <div className="noReservation">
          <div style={{ flex: 0.5 }}></div>
          <div className="available">
            <p className="see-coachs">SEE THE AVAILABLE COACHS</p>
          </div>
          <div className="icon">
            <svg
              style={{ marginTop: 29 }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
            >
              <path
                d="M8.7027 11L0 2.56667L2.64865 0L14 11L2.64865 22L0 19.4333L8.7027 11Z"
                fill="#3F3C3C"
              />
            </svg>
          </div>
        </div>
        <p className="day">Friday, 22 Novembre</p>

        <div className="noReservation">
          <div style={{ flex: 0.5 }}></div>
          <div className="available">
            <p className="see-coachs">SEE THE AVAILABLE COACHS</p>
          </div>
          <div className="icon">
            <svg
              style={{ marginTop: 29 }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
            >
              <path
                d="M8.7027 11L0 2.56667L2.64865 0L14 11L2.64865 22L0 19.4333L8.7027 11Z"
                fill="#3F3C3C"
              />
            </svg>
          </div>
        </div>
        <p className="day">Saturday, 23 Novembre</p>

        <div className="reservation">
          <div className="line-check"></div>

          <div className="rectangle-content">
            <div className="time">
              <p className="text">17:00 pm</p>
              <p className="text">18:00 pm</p>
            </div>
            <div className="detail-user">
              <div className="image-user"></div>
              <div className="style-user-detail">
                <p className="text-name">Malek hizaoui</p>
                <p className="text-location">genève</p>
              </div>
            </div>
            <div style={{ alignSelf: "center", flex: 0.5 }}>
              <ArrowrightIcon />
            </div>
          </div>
          <p className="text-checkReservation">check your reservation</p>
        </div>
      </div>
      <div style={{ height: 8 }}></div>
    </div>
  );
}

export default Home;
