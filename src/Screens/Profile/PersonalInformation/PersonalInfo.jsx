import React, { useState } from 'react'
import './persoInfo.css'
import BackIcon from '../../../assets/icons/BackIcon'
import ArrowrightIcon from '../../../assets/icons/ArrowrightIcon'
import AddPicIcon from '../../../assets/icons/Profile/AddPicIcon'
import { useNavigate,useLocation } from "react-router-dom";
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

function PersonalInfo() {
  const navigate = useNavigate();
  const Location = useLocation();
  const [photo, setPhoto] = useState(null);

  const createShortUrl = (dataUrl) => {
    const blob = dataURItoBlob(dataUrl);
    const url = URL.createObjectURL(blob);
    return url;
  };
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ab], { type: 'image/png' }); 
  };
  console.log("Location",Location.state);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    const shortenedUrl = createShortUrl(image.dataUrl);
    console.log("shortenedUrl",shortenedUrl);
    setPhoto(shortenedUrl);
  };




  return (
    <div className="perso-info-container">
      <div className="container-perso">

        <div className="navigate" >
          <BackIcon/>
          <p className="name-page">Personal information</p>
        </div>

        <div className="img-container">
          <div className="profile-imag" onClick={takePhoto}>
            <img src={photo?photo:Location.state.image_user} className="profile-imag"/>
            <div className='camera-icon'>
            <AddPicIcon/>
            </div>
          </div>
        </div>

        <div className="perso-conatiner">
          <div className="line"></div>
          <p className="attribute-info">Full Name</p>
          <div className="detail-info" onClick={()=>{navigate('/UpdateName',{state:Location.state})}}>
            <p className="value-info">{Location.state.firstName} {Location.state.lastName}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          <p className="attribute-info">Age</p>
          <div className="detail-info" onClick={()=>{navigate('/UpdateAge',{state:Location.state})}}>
            <p className="value-info">{Location.state.age} yo</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
          <p className="attribute-info">Phone number</p>
          <div className="detail-info">
            <p className="value-info">+41 {Location.state.phoneNumber}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          <p className="attribute-info">E-mail</p>
          <div className="detail-info">
            <p className="value-info">{Location.state.email}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo