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
  const [pickTime, setPickTime] = useState(null);
  const [show, setShow] = useState(false);
  const data = location.state;
  const dataClient=localStorage.getItem('dataUser')
  const dataParsed=JSON.parse(dataClient)
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const bookSession=(day)=>{
    console.log("data.location.image_user",data.location.image_user);
   const newReservation= dataParsed.reservation.map((element,index)=>{
      if(day===index){
        return[...element,
          {
          from:pickTime,
          to:pickTime+1,
          reservation:"pending",
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
        }
      ]
      }
      else{
        return [...element]
      }
    })
    return {...dataParsed,reservation:newReservation}
  }


 
  return (
    <div className="reservation-container">
      <div className="page-container">
        <div className="navigate">
          <div style={{ textAlign: "left", marginRight: 30 }}>
            <BackIcon />
          </div>

          <p className="name-page">Reservation</p>
        </div>

        {data.availability.map((element, index) => {
          console.log("element.image_user", location.state.image_user);
          return (
            <div key={index}>
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
                          <div key={i}>
                            <div
                              className="book-Horaire"
                              onClick={() => {
                                if (show === i) {
                                  setShow(null);
                                  setPickTime(null);
                                } else {
                                  setShow(i);
                                  setPickTime(null);
                                }
                              }}
                            >
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
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                              }}
                            >
                              {show === i &&
                                (() => {
                                  const elements = [];
                                  for (let i = elem.from; i < elem.to; i++) {
                                    elements.push(
                                      <div
                                        onClick={() => {
                                          setPickTime(i);
                                          if (pickTime && pickTime === i) {
                                            console.log("dd");
                                            setPickTime(null);
                                          } else {
                                            setPickTime(i);
                                          }
                                        }}
                                        style={{
                                          backgroundColor:
                                            pickTime === i
                                              ? "#5D54A0"
                                              : "#DCDCDC",
                                          color:
                                            pickTime === i ? "white" : "black",
                                        }}
                                        key={i}
                                        className="time-style"
                                        color="#5D54A0"
                                      >
                                        <p>
                                          {i > 12 ? `${i}:00 Pm` : `${i}:00 Am`}
                                        </p>
                                      </div>
                                    );
                                  }
                                  return elements;
                                })()}
                            </div>
                            {show === i && (
                              <button
                                onClick={()=>{
                                  const result = bookSession(index)
                                  console.log("result",result);

                                  localStorage.setItem('dataUser',JSON.stringify(result))
                                  navigate('/')
                                }}
                                style={{
                                  backgroundColor: pickTime
                                    ? "#5D54A0"
                                    : "#DCDCDC",
                                  width: 70,
                                  height: 30,
                                  borderRadius: 10,
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                Save
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : <p>Rest Day</p>}
                </div>
              ) : null}
            </div>
          );
        })}


        <div style={{ height: 120 }}></div>
      </div>
    </div>
  );
}

export default Reservation;
