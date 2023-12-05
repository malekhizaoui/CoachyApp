import React, { useState, useEffect } from "react";
import "./home.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function useServicePlaning() {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const data = localStorage.getItem("currentUser");
    const dataUser = JSON.parse(data);
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
        `${t("today")},${today.getDate()} ${today.toLocaleDateString("en-US", {
          month: "long",
        })}`
      );
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      daysInfo.push(
        `${t("tomorow")}, ${tomorrow.getDate()} ${tomorrow.toLocaleDateString(
          "en-US",
          {
            month: "long",
          }
        )}`
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
          : getFutureDates(dataUser.reservation, dayOfWeek - 1);
  
      setNewData(newDataReservation);
    };
  return {
    newData,
    t,
    days,
    navigate
  }
}

export default useServicePlaning