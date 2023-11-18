import React, { useState } from "react";
import "../auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function SignUp() {
  const navigate = useNavigate();
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
            // email: "hizaoui.malek.habib@gmail.com",
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
            // email: "hizaoui.malek.habib@gmail.com",
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
  //  console.log("addClient",addClient);
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
            placeholder="First Name"
            onChange={(event) => {
              setFirstName(event.target.value);
              // setUser({ ...user, firstName: event.target.value });
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            onChange={(event) => {
              setLastName(event.target.value);
              // setUser({ ...user, lastName: event.target.value });
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="Phone Number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
              // setUser({ ...user, username: event.target.value });
            }}
          />
          {typeUser === "Coach" && (
            <input
              type="text"
              className="input"
              placeholder="Domaine"
              onChange={(event) => {
                setDomaine(event.target.value);
              }}
            />
          )}
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
              // setUser({ ...user, password: event.target.value });
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
            <label>s'inscrire entant que Coach</label>
          </div>
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxClient}
              onChange={handleCheckBoxClient}
            />
            <label>s'inscrire entant que Client</label>
          </div>
        </div>
        <button
          className="btn-auth"
          onClick={() => {
            typeUser === "Coach" ? signUpAsCoach() :typeUser === "Client" ? signUpAsClient():alert('pick you type');
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default SignUp;
// const signUp = () => {
//   console.log("user", user);
//   console.log("checkboxCoach", checkboxCoach);
//   console.log("checkboxClient", checkboxClient);
//   if (checkboxCoach || checkboxClient) {
//       axios
//         .post("https://memorixappgameserver.onrender.com/signup", user)
//         .then((res) => {
//           const {
//             token,
//             userId,
//             firstName,
//             lastName,
//             username,
//             hashedPassword,
//           } = res.data;
//           cookies.set("token", token);
//           cookies.set("userId", userId);
//           cookies.set("username", username);
//           cookies.set("firstName", firstName);
//           cookies.set("lastName", lastName);
//           cookies.set("hashedPassword", hashedPassword);
//           cookies.set("typeUser", typeUser);
//           navigate("/Login");
//         });
//     axios.post("https://memorixappgameserver.onrender.com/signup", user).then(
//       (res) => {
//         const {
//           token,
//           userId,
//           firstName,
//           lastName,
//           username,
//           hashedPassword,
//         } = res.data;
//         console.log("dataa",res.data);
//         localStorage.setItem("token", token);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("username", username);
//         localStorage.setItem("firstName", firstName);
//         localStorage.setItem("lastName", lastName);
//         localStorage.setItem("hashedPassword", hashedPassword);
//         localStorage.setItem("typeUser", typeUser);

//         navigate("/Login");
//       }
//     );
//   } else {
//     alert("you need to specify which type of user you are");
//   }
// };
