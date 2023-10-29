import React from "react";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import ArrowTime from "../../../assets/icons/Planing/ArrowTime";
import AddIcon from "../../../assets/icons/Profile/AddIcon";
import Cookies from "universal-cookie";
import BackIcon from "../../../assets/icons/BackIcon";
import "./availability.css";
function Availability() {
  const cookies = new Cookies();
  const dataUser = cookies.get("dataUser");
  console.log("dataUser.availability", dataUser.availability);
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
    <div className="container">
       <div className="navigate-Available" >
          <BackIcon/>
          <p className="name-page">My availability</p>
        </div>
      {dataUser.availability.map((element, index) => (
        <div className="container" key={index}>
          <div className="day-available">
          <p className="day">{days[index]}</p>
          <AddIcon/>
          </div>
          {element.length !== 0 ? (
            <>
              {element.map((day, i) => (
                <div key={i} className="Availablity-container">
                  <div
                    style={{
                      flex: 1.5,
                      flexDirection: "row",
                      display: "flex",
                      marginLeft: 10,
                      alignItems: "center",
                      height: 65,
                    }}
                  >
                    <p style={{ fontSize: 12 }}>
                      {day.from > 12
                        ? day.from + ":00 Pm"
                        : day.from + ":00 Am"}
                    </p>
                    <ArrowTime />
                    <p style={{ fontSize: 12 }}>
                      {day.to > 12 ? day.to + ":00 Pm" : day.to + ":00 Am"}
                    </p>
                  </div>

                  <div style={{ flex: 0.5, alignSelf: "center" }}>
                    <ArrowrightIcon />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="RestDayContainer">
            <div className="rest-Day">
              <p>RestDay</p>
            </div>
          </div>
          )}
        </div>
        
      ))}
              
    </div>
  );
}

export default Availability;
