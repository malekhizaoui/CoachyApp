import React, { useState } from 'react'
import './domaine.css'
import { useNavigate,useLocation } from "react-router-dom";
import BackIcon from '../../../../assets/icons/BackIcon';
// import {dataCoach} from '../../../../DataBase/coachDB/Data'
function DomaineCoaching() {
    const navigate = useNavigate();
    const location = useLocation();
    const [dataCoachFiltredbyDay,setDataCoachFiltredbyDay]=useState([])
    // console.log("datacoach",dataCoach);
    console.log("location.state",location.state);
    const dataCoach=JSON.parse(localStorage.getItem('dataCoach'))

    


    // const getFiltredCoach=()=>{
    //    const newData= dataCoach.map((element,index)=>{
    //         element.coachs.map((ele,i)=>{
    //             if(ele.availability[location.state].length!== 0){
    //                 console.log("hereee");
    //                 return {...ele}
    //             }
    //         })
    //         return {...element}
    //     })

    //     return newData
    // }


    // const x= getFiltredCoach()
    // console.log("mkajzhdmjhad",x);

  return (
    <div className='Domain-container'>
        <div className="navigate-fromDomain">
          <BackIcon/>

          <p className="name-page">Domaine</p>
          
        </div>
        <div className="line"></div>

      
        <div className='allDoamin'>
            <div className='domain'>
                <p>Fitness</p>
            </div>
            <div className='domain'>
            <p>Diet</p>
            </div>
            <div className='domain'>
            <p>Mental</p>
            </div>
            <div className='domain'>
            <p>Fitness</p>
            </div>
            {/* <div className='domain'></div> */}
            {/* <div className='domain'></div>   */}
        </div>
        <div className='content-domain'>
            {dataCoach.map((element,index)=>{
                return(
                    <div key={index} className='img-domain' onClick={()=>{navigate('/AllCoachs',{state:element.coachs})}}>
                    <img className='img-background' src={element.picDomaine} />
                </div>
                )
            })}
            <div style={{height:150}}></div>
        </div>
    </div>
  )
}

export default DomaineCoaching