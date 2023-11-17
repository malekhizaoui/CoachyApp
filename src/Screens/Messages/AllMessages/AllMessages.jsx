import React ,{useState} from "react";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import "./allMessages.css";
import { useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
function AllMessages({setHideTabBar}) {
  const navigate= useNavigate()
  const getUserMessages = JSON.parse(localStorage.getItem("dataUser"));
  const getAllClient = JSON.parse(localStorage.getItem("dataClient"));
  const getAllCoach = JSON.parse(localStorage.getItem("dataCoach"));
  // const [searchTerm, setSearchTerm] = useState('');

  // const [coachFiltred,setCoachFiltred]=useState(getAllCoach[0].coachs)
  // const [clientFiltred,setClientFiltred]=useState()
  // const searchUser=(e)=>{
  //   const coachFilter=[]
  //   if(searchTerm.length>=2){ 
  //     getAllCoach.forEach((element) => {
  //     element.coachs.map((coach)=>{
  //      if(coach.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //      coach.lastName.toLowerCase().includes(searchTerm.toLowerCase())){
  //       coachFilter.push(coach)
  //      }
  //       })
  //   });
  //   setCoachFiltred(coachFilter)
  // }else{
  //   setCoachFiltred(getAllCoach[0].coachs)
  // }
   
  // }
  // console.log("coachFiltred",coachFiltred);

  return (
    <div className="allMessages">
      <div className="allMessages-container">
        <p className="text-interface">Messages</p>
        
        <div className="line"></div>
        {/* <div style={{width:"100%",height:100,margin:10}}><SearchBar coachFiltred={coachFiltred}searchUser={searchUser} setSearchTerm={setSearchTerm}/></div> */}

        {getUserMessages.messages.map((element, index) => {
          return (
            <div className="allMessages" onClick={()=>{
              console.log("elemeeent",element);
              navigate('/PrivateMessage',{state:{user:element.user,index}});
              setHideTabBar(false)
            }}>
              <div className="message">
                <div className="message-detail">
                  <div>
                    <img
                      className="image-user"
                      src={element.user.image_user}
                    />
                  </div>
                  <div>
                    <p className="name-user">
                      {element.user.firstName} {element.user.lastName}
                    </p>
                    <p className="txt-description">
                      Bonjour, vous - Wednesday,4 October
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: 10 }}>
                  <ArrowrightIcon />
                </div>
              </div>
              <div className="line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllMessages;
