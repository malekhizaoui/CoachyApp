import React, { useState } from "react";
import "../updateName/updatName.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'
function useServiceAge() {
    const {t}=useTranslation()
    const Location = useLocation();
    const navigate = useNavigate();
    const [age,setAge]=useState(null)
    
    const getAllCoachs = JSON.parse(localStorage.getItem("dataCoach"));
    const getAllClients = JSON.parse(localStorage.getItem("dataClient"));
    const getDataUser = JSON.parse(localStorage.getItem("dataUser"));
    const data = Location.state;
    console.log("Locaction.state", Location.state);
    const updateAge = () => {
      if(age.length!==0){
        if (data.type === "Client") {
        const UpdateClient = getAllClients.map((client) => {
          if (client.firstName === data.firstName) {
            localStorage.setItem("dataUser",JSON.stringify({ ...client, age}))
  
            return { ...client, age };
          } else {
            return { ...client };
          }
        });
        localStorage.setItem("dataClient",JSON.stringify(UpdateClient))
        navigate('/')
      } else {
  
        const UpdateCoach = getAllCoachs.map((element) => {
          if (element.domaine === data.domaine) {
           const updateCoachs=element.coachs.map((coach) => {
              if (coach.firstName === data.firstName) {
                localStorage.setItem("dataUser",JSON.stringify({ ...coach, age }))
                return { ...coach, age };
              } else {
                return { ...coach };
              }
            });
            return {...element,coachs:updateCoachs}
          } else {
            return { ...element };
          }
        });
        localStorage.setItem("dataCoach",JSON.stringify(UpdateCoach))
        navigate('/')
      }
      }else{
        console.log("remplir tout le champs");
      }
    };
  return {
    t,setAge,updateAge
  }
}

export default useServiceAge