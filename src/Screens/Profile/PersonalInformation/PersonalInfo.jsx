import React from 'react'
import './persoInfo.css'
import BackIcon from '../../../assets/icons/BackIcon'
import ArrowrightIcon from '../../../assets/icons/ArrowrightIcon'
import AddPicIcon from '../../../assets/icons/Profile/AddPicIcon'
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const navigate = useNavigate();

  return (
    <div className="perso-info-container">
      <div className="container-perso">
        <div className="navigate" onClick={()=>{navigate(-1)}}>
          <BackIcon/>

          <p className="name-page">Personal information</p>
        </div>

        <div className="img-container">
          <div className="profile-imag">
            <div className='camera-icon'>
            <AddPicIcon/>
            </div>
          </div>
        </div>

        <div className="perso-conatiner">
          <div className="line"></div>
          <p className="attribute-info">Full Name</p>
          <div className="detail-info">
            <p className="value-info">Malek Habib Hizaoui</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          <p className="attribute-info">Age</p>
          <div className="detail-info">
            <p className="value-info">22 yo</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
          <p className="attribute-info">Phone number</p>
          <div className="detail-info">
            <p className="value-info">+41 78 306 34 68</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          <p className="attribute-info">E-mail</p>
          <div className="detail-info">
            <p className="value-info">hizaoui.malek.habib@gmail.com</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo