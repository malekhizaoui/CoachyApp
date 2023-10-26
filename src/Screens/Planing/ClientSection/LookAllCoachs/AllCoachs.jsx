import React, { useState } from "react";
import "./allCoachs.css";
import CloseIcon from "../../../../assets/icons/Planing/CloseIcon";
import Checked from "../../../../assets/icons/Planing/Checked";
import PinIcon from "../../../../assets/icons/Planing/PinIcon";
import Unchecked from "../../../../assets/icons/Planing/Unchecked";
// import { data } from "../../../../DataBase/coachDB/Data";
import { useNavigate, useLocation } from "react-router-dom";

function AllCoachs({setHideTabBar,sethideTabBarforCoachDetail}) {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [checkedOrNot, setCheckedOrNot] = useState(999);
  const [chooseCoach,setChooseCoach]=useState({})
  const bookCoach=()=>{
    if(checkedOrNot!==999){
      navigate('/Reservation',{state:chooseCoach})
    }else{
      console.log("Choose Coach");
    }
  }
  console.log("coachData", data);
  console.log("checkedOrNot", checkedOrNot);
  console.log("chooseCoach", chooseCoach);
  return (
    <div className="container">
      <div className="container-page">
        <div className="icon-X">
          <CloseIcon />
        </div>
        <div className="title-page">
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Sending booking requests to caochs
          </p>
          <p
            style={{
              color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              marginTop: 8,
            }}
          >
            The first to accept your request will share your session
          </p>
          <div className="line"></div>
        </div>
        <p className="domaine-coaching">Fitness</p>
        <div className="container-coach">
          {/* coach checked */}
          {data.map((element, index) => {
            return (
              <div className="detail-coach" >
                <div className="header-coach">
                  <div
                  onClick={()=>{navigate('/CoachLocation',{state:element}); setHideTabBar(true);sethideTabBarforCoachDetail(true)}}
                    // className={
                    //   checkedOrNot === index
                    //     ? "image-user"
                    //     : "image-user noChecked"
                    // }
                  >
                    <img  className={
                      checkedOrNot === index
                        ? "image-user"
                        : "image-user noChecked"
                    }
                    src={element.image_user}
                    
                    />
                  </div>
                  <div
                    style={
                      checkedOrNot !== index ? { margin: 0 } : { margin: 13 }
                    }
                    onClick={() => {
                      checkedOrNot === index
                        ? setCheckedOrNot(999)
                        : setCheckedOrNot(index);setChooseCoach(element)
                    }}
                  >
                    {checkedOrNot == index ? <Checked /> : <Unchecked />}
                  </div>
                </div>
                <div className="info-coach">
                  <p
                    style={{
                      color: "var(--Black, #3F3C3C)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      margin: 1,
                      padding: 1,
                    }}
                  >
                    {element.firstName} {element.lastName}
                  </p>
                  <p
                    style={{
                      color: "var(--Green, #519750)",
                      fontFamily: "Inter",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      margin: 1,
                      padding: 1,
                    }}
                  >
                    disponible
                  </p>
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <PinIcon />
                    <p
                      style={{
                        color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                        fontFamily: "Inter",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 700, // Use 700 for "font-weight" to set it to bold
                        lineHeight: "normal",
                        margin: 1,
                        padding: 1,
                      }}
                    >
                      {element.location.city}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer style={{ width: "100%" }}>
        <button
        onClick={bookCoach}
          style={{
            // position: "fixed",
            marginBottom: 100,
            width: "80%",
            height: 50,
            borderRadius: "10px",
            background: checkedOrNot !== 999 ? "#5D54A0" : "#DCDCDC",
            color: "var(--white, #FFFBFB)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          Book this Coach
        </button>
      </footer>
    </div>
  );
}

export default AllCoachs;
