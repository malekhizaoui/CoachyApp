import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";
function useServiceSignup() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cookies = new Cookies();
  const getAllClient = JSON.parse(localStorage.getItem("dataClient"));
  const getAllCoach = JSON.parse(localStorage.getItem("dataCoach"));

  const [checkboxCoach, setCheckboxCoach] = useState(false);
  const [checkboxClient, setCheckboxClient] = useState(false);
  const [typeUser, setTypeUser] = useState("");
  const [domaine, setDomaine] = useState("fitness");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState(0);
  const [cout, setCout] = useState(0);
  const signUpAsCoach = () => {
    var checkIfFound = true;
    const updateAllCoachs = getAllCoach.map((element) => {
      if (element.domaine === domaine) {
        if (element.coachs.length === 0) {
          const updateCoachs = {
            id: element.coachs.length + 1,
            domaine: domaine,
            bio: `dedicated ${domaine} enthusiast and certified personal trainer.passion for helping individuals of all ${domaine} levels achieve their health and wellness goals.`,
            firstName: firstName,
            type: "Coach",
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
            Tarification: `${firstName} offers his coaching services at a competitive rate of ${cout} $ per session.`,
            modeDePaiment: ` pay ${firstName} using PayPal or Credit Card for convenience.`,
            age: age,
            image_user: require("../../../assets/images/annonyme.jpg"),
            experience: `over ${experience} years of experience, ${firstName} has successfully trained clients in weight management, strength building, and overall ${domaine} improvement. `,
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
              Tarification: `${firstName} offers his coaching services at a competitive rate of ${cout} $ per session.`,
              modeDePaiment: ` pay ${firstName} using PayPal or Credit Card for convenience.`,
              age: age,
              image_user: require("../../../assets/images/annonyme.jpg"),
              experience: `over ${experience} years of experience, ${firstName} has successfully trained clients in weight management, strength building, and overall ${domaine} improvement. `,
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
    if (checkIfFound) {
      navigate("/Login");
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
            image_user: require("../../../assets/images/annonyme.jpg"),
            location: {
              city: "Genève",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            age: age,
            reservation: [[], [], [], [], [], [], []],
            sessionHistory: [],
            messages: [],
          },
        ];
      } else {
        let checkIfFound = true;
        const updateAllClients = getAllClient.map((client) => {
          if (
            client.firstName === firstName ||
            client.phoneNumber === phoneNumber
          ) {
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
            image_user: require("../../../assets/images/annonyme.jpg"),
            location: {
              city: "Genève",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            age: age,
            reservation: [[], [], [], [], [], [], []],
            sessionHistory: [],
            messages: [],
          });
        }
        return updateAllClients;
      }
    };
    const addClient = updateAllClient();
    localStorage.setItem("dataClient", JSON.stringify(addClient));
    if (checkIfFound) {
      navigate("/Login");
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
    }
    setCheckboxClient(!checkboxClient);
    setCheckboxCoach(false);
  };
  return {
    setFirstName,
    setLastName,
    setAge,
    setPhoneNumber,
    setCout,
    setExperience,
    setDomaine,
    setPassword,
    checkboxCoach,
    handleCheckBoxCoach,
    checkboxClient,
    handleCheckBoxClient,
    signUpAsCoach,
    typeUser,
    signUpAsClient,
    navigate,
    t
  };
}

export default useServiceSignup;
