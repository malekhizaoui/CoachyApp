export const dataCoach = [
  {
    domaine: "fitness",
    picDomaine: require("../../assets/images/fitness-backgound.jpg"),
    coachs: [
      {
        id: 1,
        bio: "dedicated fitness enthusiast and certified personal trainer. He has a passion for helping individuals of all fitness levels achieve their health and wellness goals.",
        firstName: "John",
        type: "Coach",
        lastName: "Smith",
        phoneNumber: "76879809",
        password: "heyhey",
        Tarification:
          " John offers his coaching services at a competitive rate of $60 per session.",
        modeDePaiment: " pay John using PayPal or Credit Card for convenience.",
        age: 30,
        image_user: require("../../assets/images/john.png"),
        location: {
          city: "genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },

        experience:
          "over 8 years of experience, John has successfully trained clients in weight management, strength building, and overall fitness improvement.",
        "": "",
        reservation:  [
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                },
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),


                }
              },
              {
                from: 20,
                to: 24,
                reservationState:"noRequest"
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }

              },
            ],
            [],
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                },
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),


                }
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 2,
        bio: "dedicated fitness enthusiast and certified personal trainer. He has a passion for helping individuals of all fitness levels achieve their health and wellness goals.",
        firstName: "David",
        type: "Coach",
        lastName: "Walker",
        phoneNumber: "76879809",
        password: "david",
        Tarification: " David's expertise comes at a rate of $75 per session.",
        modeDePaiment:
          " can pay David using Venmo or Cash, ensuring flexible payment options.",
        age: 30,
        image_user: require("../../assets/images/david.jpg"),
        location: {
          city: "genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },

        experience:
          " 12 years of experience in the fitness industry, helping clients transform their bodies and live",
        "": "",
        reservation:  [
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                },
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),


              }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),


              }
              },
              {
                from: 20,
                to: 24,
                reservationState:"noRequest"
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),


              }
              },
            ],
            [],
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }

              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 3,
        bio: "experienced fitness instructor who focuses on weight management and cardiovascular fitness",
        firstName: "Michael",
        type: "Coach",
        lastName: "Turner",
        phoneNumber: "76879809",
        password: "Turner",
        Tarification:
          " charges $65 per session for his fitness coaching services.",
        modeDePaiment: "can pay Michael through PayPal or Bank Transfer",
        age: 30,
        image_user: require("../../assets/images/michael.jpg"),
        location: {
          city: "genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },

        experience:
          "With 9 years of experience, Michael has guided clients to reach their fitness goals and improve their overall health.",
        "": "",
        reservation: [
          [
            {
              from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
            },
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
            {
              from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }

            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
          ],
          [],
          [
            {
              from: 8,
              reservationState:"noRequest",

              to: 12,
            },
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
          ],
          [],
          [],
        ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 4,
        bio: "Passionate fitness trainer dedicated to helping individuals achieve a healthier lifestyle through personalized workout plans.",
        firstName: "Lisa",
        type: "Coach",
        lastName: "Johnson",
        phoneNumber: "76879809",
        password: "johnson",
        Tarification: "$60 per session",
        modeDePaiment:
          "Lisa using Venmo or Cash, providing convenient payment options to suit your preferences.",
        age: 28,
        image_user: require("../../assets/images/lisa.jpeg"),
        location: {
          city: "genéve",
          longitude: "",
          latitude: "",
        },

        experience:
          "7 years of experience, Sophia has helped numerous women achieve their fitness goals and build confidence.",
        "": "",
        reservation: [
          [
            {
              from: 8,
              to: 12,
              reservationState:"noRequest",

            },
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
            {
              from: 20,
              to: 24,
              reservationState:"noRequest",

            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
              reservationState:"noRequest",

            },
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
          ],
          [],
          [],
        ],
        availability: [
          [
            {
              from: 8,
              
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 5,
        bio: "dedicated fitness trainer with a holistic approach to health and wellness. She specializes in yoga and mindfulness along with traditional fitness training",
        firstName: "Emily",
        type: "Coach",
        lastName: "Davis",
        phoneNumber: "76879809",
        password: "amily",
        Tarification:
          "Emily offers her coaching services at a competitive rate of $70 per session.",
        modeDePaiment: "can pay Emily using Credit Card or PayPal ",
        age: 28,
        image_user: require("../../assets/images/emily.jpg"),
        location: {
          city: "genéve",
          longitude: "",
          latitude: "",
        },

        experience:
          " 10 years of experience in the fitness industry, guiding clients toward improved physical and mental well-being.",
        "": "",
        reservation: [
          [
            {
              from: 8,
              to: 9,
              reservationState:"noRequest",
                
            },
            {
              from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }

            },
            {
              from: 14,
              to: 16,
              reservationState:"Pending",
              client:{
                firstName:"Malek",
                lastName:"Hizaoui",
                location:"Genève",
                image_user:require('../MalekPhoto.jpg'),
            }
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
              reservationState:"noRequest",

            },
          ],
          [],
          [
            {
              from: 8,
              reservationState:"noRequest",

              to: 12,
            },
            {
              from: 14,
              reservationState:"noRequest",

              to: 16,
            },
          ],
          [],
          [],
        ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
    ],
  },
  {
    domaine: "Diet",
    picDomaine: require("../../assets/images/diet-background.jpg"),
    coachs: [
      {
        id: 1,
        bio: "Dedicated dietitian with expertise in weight management and balanced nutrition.",
        firstName: "Diana",
        type: "Coach",
        lastName: "Wilson",
        phoneNumber: "76879809",
        password: "diana",
        Tarification:
          "Diana offers her diet coaching services at a competitive rate of $70 per session.",
        modeDePaiment:
          "You can pay Diana using PayPal or Credit Card for convenience.",
        age: 35,
        image_user: require("../../assets/images/diana.jpg"),
        location: {
          city: "Genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },
        experience:
          "With over 10 years of experience, Diana has helped clients achieve their diet and nutrition goals.",
        reservation: [
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
              {
                from: 20,
                to: 24,
                reservationState:"noRequest"
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 2,
        bio: "Experienced diet coach specializing in nutrition planning and dietary guidance.",
        firstName: "Laura",
        type: "Coach",
        lastName: "Anderson",
        phoneNumber: "76879809",
        password: "laura",
        Tarification: "Laura's expertise comes at a rate of $80 per session.",
        modeDePaiment:
          "You can pay Laura using Venmo or Cash, ensuring flexible payment options.",
        age: 40,
        image_user: require("../../assets/images/laura.jpg"),
        location: {
          city: "Genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },
        experience:
          "With 15 years of experience in the diet industry, Laura has guided clients toward improved dietary habits and health.",
        reservation: [
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
              {
                from: 20,
                to: 24,
                reservationState:"noRequest"
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 3,
        bio: "Certified dietitian with a focus on weight management and dietary planning.",
        firstName: "Sarah",
        type: "Coach",
        lastName: "Clark",
        phoneNumber: "76879809",
        password: "clarck",
        Tarification:
          "Sarah charges $75 per session for her diet coaching services.",
        modeDePaiment: "You can pay Sarah through PayPal or Bank Transfer.",
        age: 30,
        image_user: require("../../assets/images/sarah.jpg"),
        location: {
          city: "Genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },
        experience:
          "With 12 years of experience, Sarah has helped clients reach their diet and nutrition goals and improve their overall health.",
        reservation: [
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
              {
                from: 20,
                to: 24,
                reservationState:"noRequest"
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
    ],
  },
  {
    domaine: "Mental",
    picDomaine: require("../../assets/images/menatlBackground.jpg"),
    coachs: [
      {
        id: 1,
        bio: "Experienced mental health counselor specializing in stress management and mindfulness.",
        firstName: "Alice",
        type: "Coach",
        lastName: "Robinson",
        phoneNumber: "76879809",
        password: "robinson",
        Tarification:
          "Alice offers her mental coaching services at a competitive rate of $60 per session.",
        modeDePaiment:
          "You can pay Alice using PayPal or Credit Card for convenience.",
        age: 35,
        image_user: require("../../assets/images/alice.jpg"),
        location: {
          city: "Genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },
        experience:
          "With over 10 years of experience, Alice has helped clients manage stress, anxiety, and improve their mental well-being.",
        reservation:  [
            [
              {
                from: 8,
                to: 12,
                reservationState:"noRequest",
  
              },
              {
                from: 14,
                to: 16,
                reservationState:"noRequest",
  
              },
              {
                from: 20,
                reservationState:"noRequest",
  
                to: 24,
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"noRequest",
  
              },
            ],
            [],
            [
              {
                from: 8,
                reservationState:"noRequest",
  
                to: 12,
              },
              {
                from: 14,
                reservationState:"noRequest",
  
                to: 16,
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 2,
        bio: "Experienced mental health coach with a focus on mindfulness and emotional well-being.",
        firstName: "Eva",

        type: "Coach",
        lastName: "Garcia",
        phoneNumber: "76879809",
        password: "garcia",
        Tarification: "Eva's expertise comes at a rate of $75 per session.",
        modeDePaiment:
          "You can pay Eva using Venmo or Cash, ensuring flexible payment options.",
        age: 40,
        image_user: require("../../assets/images/eva.jpeg"),
        location: {
          city: "Genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },
        experience:
          "With 15 years of experience, Eva has guided clients toward improved mental health, emotional well-being, and mindfulness.",
        reservation:  [
            [
              {
                from: 8,
                to: 12,
                reservationState:"noRequest",
  
              },
              {
                from: 14,
                to: 16,
                reservationState:"noRequest",
  
              },
              {
                from: 20,
                reservationState:"noRequest",
  
                to: 24,
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"noRequest",
  
              },
            ],
            [],
            [
              {
                from: 8,
                reservationState:"noRequest",
  
                to: 12,
              },
              {
                from: 14,
                reservationState:"noRequest",
  
                to: 16,
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
      {
        id: 3,
        bio: "Certified mental health counselor specializing in anxiety management and psychological well-being.",
        firstName: "Olivia",
        // type:"Coach",
        lastName: "Thomas",
        phoneNumber: "76879809",
        password: "olivia",
        Tarification:
          "Olivia charges $70 per session for her mental coaching services.",
        modeDePaiment: "You can pay Olivia through PayPal or Bank Transfer.",
        age: 30,
        image_user: require("../../assets/images/olivia.jpg"),
        location: {
          city: "Genéve",
          longitude: "47.183322",
          latitude: "8.500463",
        },
        experience:
          "With 12 years of experience, Olivia has helped clients manage anxiety and improve their psychological well-being.",
        reservation:  [
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
              {
                from: 20,
                to: 24,
                reservationState:"noRequest"
              },
            ],
            [],
            [
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [
              {
                 from: 8,
                to: 12,
                reservationState:"accepted",
                client:{
                    firstName:"Malek",
                    lastName:"Hizaoui",
                    location:"Genève",
                    image_user:require('../MalekPhoto.jpg'),
                }
              },
              {
                from: 14,
                to: 16,
                reservationState:"Pending",
                client:{
                  firstName:"Malek",
                  lastName:"Hizaoui",
                  location:"Genève",
                  image_user:require('../MalekPhoto.jpg'),
              }
              },
            ],
            [],
            [],
          ],
        availability: [
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
            {
              from: 20,
              to: 24,
            },
          ],
          [],
          [
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [
            {
              from: 8,
              to: 12,
            },
            {
              from: 14,
              to: 16,
            },
          ],
          [],
          [],
        ],
      },
    ],
  },
  //   {
  //     domaine: "fitness",
  //     picDomaine: "",
  //     coachs: [
  //       {
  //         id: 1,
  //         bio: "",
  //         firstName: "Malek"
  //   type:"Coach",,
  //         lastName: "Hizaoui",
  //         Tarification: "",
  //         modeDePaiment: "",
  //         age: 22,
  //         image_user: require("../MalekPhoto.jpg"),
  //         location: {
  //           city: "genéve",
  //           longitude: "47.183322",
  //           latitude: "8.500463",
  //         },

  //         experience: "",
  //         "": "",
  //         reservation: [
  //           {
  //             monday: [
  //               {
  //                 from: 9,
  //                 to: 10,
  //                 reservationState: "accepted",
  //               },
  //               {
  //                 from: 11,
  //                 to: 12,
  //                 reservationState: "pending",
  //               },
  //             ],
  //           },
  //           {
  //             tuesday: [],
  //           },
  //           {
  //             wednesday: [],
  //           },
  //           {
  //             thursday: [],
  //           },
  //           {
  //             friday: [],
  //           },
  //           {
  //             saturday: [],
  //           },
  //           {
  //             sunday: [],
  //           },
  //         ],
  //         availability: [
  //           [
  //             {
  //               from: 8,
  //               to: 12,
  //             },
  //             {
  //               from: 14,
  //               to: 16,
  //             },
  //             {
  //               from: 20,
  //               to: 24,
  //             },
  //           ],
  //           [],
  //           [
  //             {
  //               from: 14,
  //               to: 16,
  //             },
  //           ],
  //           [],
  //           [
  //             {
  //               from: 8,
  //               to: 12,
  //             },
  //             {
  //               from: 14,
  //               to: 16,
  //             },
  //           ],
  //           [],
  //           [],
  //         ],
  //       },
  //       ,
  //     ],
  //   },
];
