import React from 'react'
import './domaine.css'
import { useNavigate } from "react-router-dom";
import BackIcon from '../../../../assets/icons/BackIcon';
import {data} from '../../../../DataBase/coachDB/Data'
function DomaineCoaching() {
    const navigate = useNavigate();

    const sendData=(domain,data)=>{
        if(domain==="fitness"){
            navigate("AllCoachs",{state:data})
        }
    }
  return (
    <div className='Domain-container'>
        <div className="navigate-fromDomain">
          <BackIcon/>

          <p className="name-page">Personal information</p>
          
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
            {data.map((element,index)=>{
                return(
                    <div className='img-domain' onClick={()=>{navigate('/AllCoachs',{state:element.coachs})}}>
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