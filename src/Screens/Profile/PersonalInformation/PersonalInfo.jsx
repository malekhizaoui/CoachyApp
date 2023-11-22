import React, { useState } from 'react'
import './persoInfo.css'
import BackIcon from '../../../assets/icons/BackIcon'
import ArrowrightIcon from '../../../assets/icons/ArrowrightIcon'
import AddPicIcon from '../../../assets/icons/Profile/AddPicIcon'
import { useNavigate,useLocation } from "react-router-dom";
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { useTranslation } from 'react-i18next'
function PersonalInfo() {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const Location = useLocation();
  const [photo, setPhoto] = useState(null);
  console.log("Location.state",Location.state);
  const getAllCoachs = JSON.parse(localStorage.getItem("dataCoach"));
  const getAllClients = JSON.parse(localStorage.getItem("dataClient"));
  const data= Location.state
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
    if(data.type==="Client"){ 
     const updateAllClients= getAllClients.map((client)=>{
        if(client.firstName===data.firstName){
          localStorage.setItem('dataUser',JSON.stringify({...client,image_user:image.dataUrl}))
          return{...client,image_user:image.dataUrl}
        }else{
          return{...client}
        }
      })
      localStorage.setItem('dataClient',JSON.stringify(updateAllClients))

    }else{
      const updateAllCoachs=getAllCoachs.map((element)=>{
        if(element.domaine===data.domaine){
         const updateCoachs= element.coachs.map((coach)=>{
            if(coach.firstName===data.firstName){
              localStorage.setItem('dataUser',JSON.stringify({...coach,image_user:image.dataUrl}))
              return {...coach,image_user:image.dataUrl}
            }else{
              return {...coach}
            }
          })
          return {...element,coachs:updateCoachs}
        }else{
          return {...element}
        }
      })
      localStorage.setItem('dataCoach',JSON.stringify(updateAllCoachs))
    }
    setPhoto(shortenedUrl);
  };




  return (
    <div className="perso-info-container">
      <div className="container-perso">

        <div className="navigate" >
          <BackIcon/>
          <p className="name-page">{t('personalInfo')}</p>
        </div>

        <div className="img-container">
          <div className="profile-imag" onClick={takePhoto}>
            <img src={photo?photo:data.image_user} className="profile-imag"/>
            <div className='camera-icon'>
            <AddPicIcon/>
            </div>
          </div>
        </div>

        <div className="perso-conatiner">
          <div className="line"></div>
          <p className="attribute-info">{t('fullName')}</p>
          <div className="detail-info" onClick={()=>{navigate('/UpdateName',{state:data})}}>
            <p className="value-info">{data.firstName} {data.lastName}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          <p className="attribute-info">{t('age')}</p>
          <div className="detail-info" onClick={()=>{navigate('/UpdateAge',{state:data})}}>
            <p className="value-info">{data.age} yo</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>
          <p className="attribute-info">{t('phoneNumber')}</p>
          <div className="detail-info">
            <p className="value-info">+41 {data.phoneNumber}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div>

          {data.email?.length>0?<><p className="attribute-info">{t('email')}</p>
          <div className="detail-info">
            <p className="value-info">{data.email}</p>
            <ArrowrightIcon/>
          </div>
          <div className="line"></div></>:null}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo