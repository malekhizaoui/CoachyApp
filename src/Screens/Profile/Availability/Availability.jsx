import React, { useEffect, useState } from "react";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import ArrowTime from "../../../assets/icons/Planing/ArrowTime";
import AddIcon from "../../../assets/icons/Profile/AddIcon";
import BackIcon from "../../../assets/icons/BackIcon";
import ArrowDecrementTime from "../../../assets/icons/Profile/ArrowDecrementTime";
import ArrowIncrementTime from "../../../assets/icons/Profile/ArrowIncrementTime";
import { useTranslation } from "react-i18next";
import "./availability.css";
function Availability() {
  const {t}=useTranslation()
  const data = localStorage.getItem("dataUser");
  const dataParsed = JSON.parse(data);
  const getAllCoachs = JSON.parse(localStorage.getItem("dataCoach"));
  const [dataUser, setDataUser] = useState(dataParsed);
  const [bookFrom, setBookFrom] = useState({ hour: 0, min: 0 });
  const [bookTo, setBookTo] = useState({ hour: 0, min: 0 });
  const [editAvailability, setEditAvailability] = useState(null);
  const days = [
    t('monday'),
    t('tuesday'),
    t('wednesday'),
    t('thursday'),
    t('friday'),
    t('saturday'),
    t('sunday'),
  ];

  const editTime = (day, session) => {
    const newDataAvailibility = dataUser.availability.map((element, index) => {
      if (day === index) {
        if (element.length === 0) {
          return [{ from: bookFrom.hour, to: bookTo.hour }];
        } else {
          return element.map((elem, i) => {
            if (session === i) {
              return { from: bookFrom.hour, to: bookTo.hour };
            }
            return { ...elem };
          });
        }
      }
      return [...element];
    });
    const updatAllCoachsbyDomaine = getAllCoachs.map((element) => {
      if (element.domaine === dataParsed.domaine) {
        const UpdateAllCoachs = element.coachs.map((coach) => {
          if (coach.firstName === dataParsed.firstName) {
            return { ...coach, availability: newDataAvailibility };
          } else {
            return { ...coach };
          }
        });
        return { ...element, coachs: UpdateAllCoachs };
      } else {
        return { ...element };
      }
    });
    // console.log("updatAllCoachsbyDomaine",updatAllCoachsbyDomaine);
    setEditAvailability(null);
    localStorage.setItem("dataCoach", JSON.stringify(updatAllCoachsbyDomaine));
    localStorage.setItem(
      "dataUser",
      JSON.stringify({ ...dataUser, availability: newDataAvailibility })
    );
    setDataUser({ ...dataUser, availability: newDataAvailibility });
  };

  return (
    <div className="container-avail-profile">
      <div className="navigate-Available">
        <BackIcon />
        <p className="name-page">{t('availability')}</p>
      </div>
      {dataUser.availability.map((element, index) => (
        <div className="container" key={index}>
          <div className="day-available">
            <p className="day">{days[index]}</p>
            <div
              onClick={() => {
                setEditAvailability(days[index]);
              }}
            >
              <AddIcon />
            </div>
          </div>
          {element.length !== 0 ? (
            <>
              {element.map((day, i) => (
                <div key={i} className="session-style-container">
                  <div
                    className="Availablity-container"
                    onClick={() => {
                      editAvailability === null
                        ? setEditAvailability(`${days[index]}+${i}`)
                        : setEditAvailability(null);
                    }}
                  >
                    <div className="dayavailability-container">
                      <p style={{ fontSize: "100%" }}>
                        {day.from > 12
                          ? day.from + ":00 Pm"
                          : day.from + ":00 Am"}
                      </p>
                      <ArrowTime />
                      <p style={{ fontSize: "100%" }}>
                        {day.to > 12 ? day.to + ":00 Pm" : day.to + ":00 Am"}
                      </p>
                    </div>

                    <div style={{ flex: 0.5, alignSelf: "center" }}>
                      <ArrowrightIcon />
                    </div>
                  </div>
                  {editAvailability === days[index] + "+" + i && (
                    <>
                      <p className="text-hour">{t("time")} :</p>
                      <div className="edit-container">
                        <div className="bookFrom-container">
                          <div className="edit-book">
                            <div className="time-editing">
                              <div className="edit-hour">
                                <div
                                  onClick={() => {
                                    setBookFrom({
                                      ...bookFrom,
                                      hour:
                                        bookFrom.hour === 23
                                          ? 0
                                          : bookFrom.hour + 1,
                                    });
                                  }}
                                >
                                  <ArrowIncrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                                <p style={{ margin: 0 }}>
                                  {bookFrom.hour > 9
                                    ? bookFrom.hour + ""
                                    : "0" + bookFrom.hour}
                                </p>
                                <div
                                  onClick={() => {
                                    setBookFrom({
                                      ...bookFrom,
                                      hour:
                                        bookFrom.hour === 0
                                          ? 23
                                          : bookFrom.hour - 1,
                                    });
                                  }}
                                >
                                  <ArrowDecrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                              </div>
                              <p>:</p>
                              <div className="edit-min">
                                <div
                                  onClick={() => {
                                    setBookFrom({
                                      ...bookFrom,
                                      min:
                                        bookFrom.min === 59
                                          ? 0
                                          : bookFrom.min + 1,
                                    });
                                  }}
                                >
                                  <ArrowIncrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                                <p style={{ margin: 0 }}>
                                  {bookFrom.min > 9
                                    ? bookFrom.min + ""
                                    : "0" + bookFrom.min}
                                </p>
                                <div
                                  onClick={() => {
                                    setBookFrom({
                                      ...bookFrom,
                                      min:
                                        bookFrom.min === 0
                                          ? 59
                                          : bookFrom.min - 1,
                                    });
                                  }}
                                >
                                  <ArrowDecrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="edit-am">
                              <p style={{ color: "white" }}>Am</p>
                            </div>
                          </div>
                          <div>{t("to")}</div>
                          <div className="edit-book">
                            <div className="time-editing">
                              <div className="edit-hour">
                                <div
                                  onClick={() => {
                                    setBookTo({
                                      ...bookTo,
                                      hour:
                                        bookTo.hour === 23
                                          ? 0
                                          : bookTo.hour + 1,
                                    });
                                  }}
                                >
                                  <ArrowIncrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                                <p style={{ margin: 0 }}>
                                  {bookTo.hour > 9
                                    ? bookTo.hour + ""
                                    : "0" + bookTo.hour}
                                </p>
                                <div
                                  onClick={() => {
                                    setBookTo({
                                      ...bookTo,
                                      hour:
                                        bookTo.hour === 0
                                          ? 23
                                          : bookTo.hour - 1,
                                    });
                                  }}
                                >
                                  <ArrowDecrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                              </div>
                              <p>:</p>
                              <div className="edit-min">
                                <div
                                  onClick={() => {
                                    setBookTo({
                                      ...bookTo,
                                      min:
                                        bookTo.min === 59 ? 0 : bookTo.min + 1,
                                    });
                                  }}
                                >
                                  <ArrowIncrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                                <p style={{ margin: 0 }}>
                                  {bookTo.min > 9
                                    ? bookTo.min + ""
                                    : "0" + bookTo.min}
                                </p>
                                <div
                                  onClick={() => {
                                    setBookTo({
                                      ...bookTo,
                                      min:
                                        bookTo.min === 0 ? 59 : bookTo.min - 1,
                                    });
                                  }}
                                >
                                  <ArrowDecrementTime
                                    width={"10"}
                                    height={"6"}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="edit-am">
                              <p style={{ color: "white" }}>Am</p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            editTime(index, i);
                          }}
                          className="btn-edit"
                        >
                          {t('save')}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="RestDayContainer">
                <div className="rest-Day">
                  <p>{t('restday')}</p>
                </div>
              </div>
            </div>
          )}
          {editAvailability === days[index] && (
            <>
              <p className="text-hour">{t('time')} :</p>
              <div className="edit-container">
                <div className="bookFrom-container">
                  <div className="edit-book">
                    <div className="time-editing">
                      <div className="edit-hour">
                        <div
                          onClick={() => {
                            setBookFrom({
                              ...bookFrom,
                              hour:
                                bookFrom.hour === 23 ? 0 : bookFrom.hour + 1,
                            });
                          }}
                        >
                          <ArrowIncrementTime width={"10"} height={"6"} />
                        </div>
                        <p style={{ margin: 0 }}>
                          {bookFrom.hour > 9
                            ? bookFrom.hour + ""
                            : "0" + bookFrom.hour}
                        </p>
                        <div
                          onClick={() => {
                            setBookFrom({
                              ...bookFrom,
                              hour:
                                bookFrom.hour === 0 ? 23 : bookFrom.hour - 1,
                            });
                          }}
                        >
                          <ArrowDecrementTime width={"10"} height={"6"} />
                        </div>
                      </div>
                      <p>:</p>
                      <div className="edit-min">
                        <div
                          onClick={() => {
                            setBookFrom({
                              ...bookFrom,
                              min: bookFrom.min === 59 ? 0 : bookFrom.min + 1,
                            });
                          }}
                        >
                          <ArrowIncrementTime width={"10"} height={"6"} />
                        </div>
                        <p style={{ margin: 0 }}>
                          {bookFrom.min > 9
                            ? bookFrom.min + ""
                            : "0" + bookFrom.min}
                        </p>
                        <div
                          onClick={() => {
                            setBookFrom({
                              ...bookFrom,
                              min: bookFrom.min === 0 ? 59 : bookFrom.min - 1,
                            });
                          }}
                        >
                          <ArrowDecrementTime width={"10"} height={"6"} />
                        </div>
                      </div>
                    </div>
                    <div className="edit-am">
                      <p style={{ color: "white" }}>Am</p>
                    </div>
                  </div>
                  <div>{t('to')}</div>
                  <div className="edit-book">
                    <div className="time-editing">
                      <div className="edit-hour">
                        <div
                          onClick={() => {
                            setBookTo({
                              ...bookTo,
                              hour: bookTo.hour === 23 ? 0 : bookTo.hour + 1,
                            });
                          }}
                        >
                          <ArrowIncrementTime width={"10"} height={"6"} />
                        </div>
                        <p style={{ margin: 0 }}>
                          {bookTo.hour > 9
                            ? bookTo.hour + ""
                            : "0" + bookTo.hour}
                        </p>
                        <div
                          onClick={() => {
                            setBookTo({
                              ...bookTo,
                              hour: bookTo.hour === 0 ? 23 : bookTo.hour - 1,
                            });
                          }}
                        >
                          <ArrowDecrementTime width={"10"} height={"6"} />
                        </div>
                      </div>
                      <p>:</p>
                      <div className="edit-min">
                        <div
                          onClick={() => {
                            setBookTo({
                              ...bookTo,
                              min: bookTo.min === 59 ? 0 : bookTo.min + 1,
                            });
                          }}
                        >
                          <ArrowIncrementTime width={"10"} height={"6"} />
                        </div>
                        <p style={{ margin: 0 }}>
                          {bookTo.min > 9 ? bookTo.min + "" : "0" + bookTo.min}
                        </p>
                        <div
                          onClick={() => {
                            setBookTo({
                              ...bookTo,
                              min: bookTo.min === 0 ? 59 : bookTo.min - 1,
                            });
                          }}
                        >
                          <ArrowDecrementTime width={"10"} height={"6"} />
                        </div>
                      </div>
                    </div>
                    <div className="edit-am">
                      <p style={{ color: "white" }}>Am</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    editTime(index, 0);
                  }}
                  className="btn-edit"
                >
              {t('save')}

                </button>
              </div>
            </>
          )}
        </div>
      ))}
      <div style={{ marginBottom: 120, height: "100%" }}></div>
    </div>
  );
}

export default Availability;
