import React, { useState } from "react";
import "../auth.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useTranslation } from 'react-i18next';

function SignUp() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cookies = new Cookies();
  const getAllClient = JSON.parse(localStorage.getItem("dataClient"));
  const getAllCoach = JSON.parse(localStorage.getItem("dataCoach"));

  const [checkboxCoach, setCheckboxCoach] = useState(false);
  const [checkboxClient, setCheckboxClient] = useState(false);
  const [typeUser, setTypeUser] = useState("");
  const [domaine, setDomaine] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const signUpAsCoach = () => {
    var checkIfFound = true;
    const updateAllCoachs = getAllCoach.map((element) => {
      if (element.domaine === domaine) {
        console.log("element.coachs.length", element.coachs.length);
        if (element.coachs.length === 0) {
          const updateCoachs = {
            id: element.coachs.length + 1,
            domaine: domaine,
            bio: `dedicated ${domaine} enthusiast and certified personal trainer. He has a passion for helping individuals of all ${domaine} levels achieve their health and wellness goals.`,
            firstName: firstName,
            type: "Coach",
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
            Tarification: `${firstName} offers his coaching services at a competitive rate of $60 per session.`,
            modeDePaiment: ` pay ${firstName} using PayPal or Credit Card for convenience.`,
            age: 30,
            image_user: require('../../../assets/images/annonyme.jpg'),
            experience: `over 8 years of experience, ${firstName} has successfully trained clients in weight management, strength building, and overall ${domaine} improvement. `,
            location: {
              city: "genéve",
              longitude: "47.183322",
              latitude: "8.500463",
            },
            reservation: [[], [], [], [], [], [], []],
            availability: [[], [], [], [], [], [], []],
            sessionHistory: [],
            messages: [],
          };
          return { ...element, coachs: [updateCoachs] };
        } else {
          const updateCoachs = element.coachs.map((coach) => {
            if (
              coach.firstName === firstName ||
              coach.phoneNumber === phoneNumber
            ) {
              console.log("ljhgljhg");
              checkIfFound = false;
              return { ...coach };
            } else {
              return { ...coach };
            }
          });
          if (checkIfFound) {
            updateCoachs.push({
              id: element.coachs.length + 1,
              type: "Coach",
              domaine: domaine,
              bio: `dedicated ${domaine} enthusiast and certified personal trainer. He has a passion for helping individuals of all ${domaine} levels achieve their health and wellness goals.`,
              firstName: firstName,
              type: typeUser,
              lastName: lastName,
              phoneNumber: phoneNumber,
              password: password,
              Tarification: `${firstName} offers his coaching services at a competitive rate of $60 per session.`,
              modeDePaiment: ` pay ${firstName} using PayPal or Credit Card for convenience.`,
              age: 30,
              image_user: require('../../../assets/images/annonyme.jpg'),
              experience: `over 8 years of experience, ${firstName} has successfully trained clients in weight management, strength building, and overall ${domaine} improvement. `,
              location: {
                city: "genéve",
                longitude: "47.183322",
                latitude: "8.500463",
              },
              reservation: [[], [], [], [], [], [], []],
              availability: [[], [], [], [], [], [], []],
              sessionHistory: [],
              messages: [],
            });
          }

          return { ...element, coachs: updateCoachs };
        }
      } else {
        return { ...element };
      }
    });
    localStorage.setItem("dataCoach", JSON.stringify(updateAllCoachs));
    if(checkIfFound){
      navigate('/Login')
    }
  };

  const signUpAsClient = () => {
    var checkIfFound = true;
    const updateAllClient = () => {
      if (getAllClient.length === 0) {
        return [
          {
            id: getAllClient.length + 1,
            type: "Client",
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            Password: password,
            image_user: require('../../../assets/images/annonyme.jpg'),
            location: {
              city: "Genève",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            age: 23,
            reservation: [[], [], [], [], [], [], []],
            sessionHistory: [],
            messages: [],
          },
        ];
      } else {

        let checkIfFound = true;
        const updateAllClients = getAllClient.map((client) => {
          if (client.firstName === firstName || client.phoneNumber === phoneNumber) {
            checkIfFound = false;
            return { ...client };
          } else {
            return { ...client };
          }
        });
        if (checkIfFound) {
          updateAllClients.push({
            id: getAllClient.length + 1,
            type: "Client",
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            Password: password,
            image_user: require('../../../assets/images/annonyme.jpg'),
            location: {
              city: "Genève",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            age: 23,
            reservation: [[], [], [], [], [], [], []],
            sessionHistory: [],
            messages: [],
          });
        }
        return updateAllClients
      }
    };
   const addClient= updateAllClient()
   localStorage.setItem('dataClient',JSON.stringify(addClient))
   if(checkIfFound){
    navigate('/Login')
  }
  };

  const handleCheckBoxCoach = () => {
    if (typeUser === "Coach") {
      setTypeUser("");
    } else {
      setTypeUser("Coach");
    }
    setCheckboxCoach(!checkboxCoach);
    setCheckboxClient(false);
  };
  const handleCheckBoxClient = () => {
    if (typeUser === "Client") {
      setTypeUser("");
    } else {
      setTypeUser("Client");
    }    setCheckboxClient(!checkboxClient);
    setCheckboxCoach(false);
  };
  return (
    <div className="container-auth">
      <div className="container-page-auth">
        <img className="logo-img" src={require("../18.png")} />
        <div className="form-signUp">
          <input
            type="text"
            className="input-firstName"
            placeholder={t("firstName")}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder={t('lastName')}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder={t("phoneNumber")}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
          {typeUser === "Coach" && (
            <input
              type="text"
              className="input"
              placeholder={t("domaine")}
              onChange={(event) => {
                setDomaine(event.target.value);
              }}
            />
          )}
          <input
            type="password"
            className="input"
            placeholder={t('password')}
            onChange={(event) => {
              setPassword(event.target.value);
          }}
          />
        </div>
        <div style={{ width: "100%" ,display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxCoach}
              onChange={handleCheckBoxCoach}
            />
            <label>{t('signUpAsCoach')}</label>
          </div>
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxClient}
              onChange={handleCheckBoxClient}
            />
            <label>{t('signupAsClient')}</label>
          </div>
        </div>
        <button
          className="btn-auth"
          onClick={() => {
            typeUser === "Coach" ? signUpAsCoach() :typeUser === "Client" ? signUpAsClient():alert('pick you type');
          }}
        >
          {t('createAcc')}
        </button>
        <p>{t('alreadyHaveAcc')} <a className="txt-auth" onClick={()=>{navigate('/Login')}}>{t('sign')}</a></p>
      </div>
    </div>
  );
}

export default SignUp;
