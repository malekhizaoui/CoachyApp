import React, { useState } from "react";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import ArrowTime from "../../../assets/icons/Planing/ArrowTime";
import AddIcon from "../../../assets/icons/Profile/AddIcon";
import Cookies from "universal-cookie";
import BackIcon from "../../../assets/icons/BackIcon";
import ArrowDecrementTime from "../../../assets/icons/Profile/ArrowDecrementTime";
import ArrowIncrementTime from "../../../assets/icons/Profile/ArrowIncrementTime";
import "./availability.css";
function Availability() {
  const data = localStorage.getItem("dataUser");
  const dataUser = JSON.parse(data);
  const [bookFrom, setBookFrom] = useState({ hour: 0, min: 0 });
  const [bookTo, setBookTo] = useState({ hour: 0, min: 0 });
  const [editAvailability,setEditAvailability]=useState(null)
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log("dddd",!!editAvailability,editAvailability);
  return (
    <div className="container">
      <div className="navigate-Available">
        <BackIcon />
        <p className="name-page">My availability</p>
      </div>  
      {dataUser.availability.map((element, index) => (
        <div className="container" key={index}>
          <div className="day-available">
            <p className="day">{days[index]}</p>
            <AddIcon />
          </div>
          {element.length !== 0 ? (
            <>
              {element.map((day, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div className="Availablity-container" onClick={()=>{editAvailability===null?setEditAvailability(`${days[index]}+${i}`):setEditAvailability(null)}}>
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
                  {editAvailability===days[index]+"+"+i &&
                  <>
                  <p style={{textAlign:"left",marginLeft:15,color:"",fontSize:15}}>heure :</p>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                   
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"center"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          width: 130,
                          height: 50,
                          borderRadius: "15px",
                          margin: 10,
                          border: "0.4px solid black",
                          background: "var(--white, #FFFBFB)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 2,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              margin: 4,
                            }}
                          >
                            <div
                              onClick={() => {
                                setBookFrom({
                                  ...bookFrom,
                                  hour: bookFrom.hour === 23 ? 0:  bookFrom.hour + 1,
                                });
                              }}
                            >
                              <ArrowIncrementTime />
                            </div>
                            <p style={{ margin: 0 }}>
                              {bookFrom.hour > 9
                                ? bookFrom.hour + ""
                                : "0" + bookFrom.hour}
                            </p>
                            <div onClick={() => {
                                  setBookFrom({
                                    ...bookFrom,
                                    hour: bookFrom.hour === 0 ? 23 : bookFrom.hour - 1,
                                  });
                                }}>
                              <ArrowDecrementTime
                                
                              />
                            </div>
                          </div>
                          <p>:</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              onClick={() => {
                                setBookFrom({
                                  ...bookFrom,
                                  min: bookFrom.min === 59 ? 0:  bookFrom.min + 1,
                                });
                              }}
                            >
                              <ArrowIncrementTime />
                            </div>
                            <p style={{ margin: 0 }}>
                              {bookFrom.min > 9
                                ? bookFrom.min + ""
                                : "0" + bookFrom.min}
                            </p>
                            <div onClick={() => {
                                  setBookFrom({
                                    ...bookFrom,
                                    min: bookFrom.min === 0 ? 59 : bookFrom.min - 1,
                                  });
                                }}>
                              <ArrowDecrementTime />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 1,
                            backgroundColor: "#5D54A0",
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                          }}
                        >
                          <p style={{ color: "white" }}>Am</p>
                        </div>
                      </div>
                      <div>Jusqu'à</div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          width: 130,
                          height: 50,
                          borderRadius: "15px",
                          margin: 10,
                          border: "0.4px solid black",
                          background: "var(--white, #FFFBFB)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 2,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              margin: 4,
                            }}
                          >
                            <div
                              onClick={() => {
                                setBookTo({
                                  ...bookTo,
                                  hour: bookTo.hour === 23 ? 0:  bookTo.hour + 1,
                                });
                              }}
                            >
                              <ArrowIncrementTime />
                            </div>
                            <p style={{ margin: 0 }}>
                              {bookTo.hour > 9
                                ? bookTo.hour + ""
                                : "0" + bookTo.hour}
                            </p>
                            <div onClick={() => {
                                  setBookTo({
                                    ...bookTo,
                                    hour: bookTo.hour === 0 ? 23 : bookTo.hour - 1,
                                  });
                                }}>
                              <ArrowDecrementTime
                                
                              />
                            </div>
                          </div>
                          <p>:</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              onClick={() => {
                                setBookTo({
                                  ...bookTo,
                                  min: bookTo.min === 59 ? 0:  bookTo.min + 1,
                                });
                              }}
                            >
                              <ArrowIncrementTime />
                            </div>
                            <p style={{ margin: 0 }}>
                              {bookTo.min > 9
                                ? bookTo.min + ""
                                : "0" + bookTo.min}
                            </p>
                            <div onClick={() => {
                                  setBookTo({
                                    ...bookTo,
                                    min: bookTo.min === 0 ? 59 : bookTo.min - 1,
                                  });
                                }}>
                              <ArrowDecrementTime />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            flex: 1,
                            backgroundColor: "#5D54A0",
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                          }}
                        >
                          <p style={{ color: "white" }}>Am</p>
                        </div>
                      </div>
                      
                    </div>
                    <button
                      onClick={() => {}}
                      style={{
                        backgroundColor: "#5D54A0",
                        width: 70,
                        height: 30,
                        borderRadius: 10,
                        color: "white",
                        border: "none",
                      }}
                    >
                      Save
                    </button>
                  </div>
                  </>
                  }
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
