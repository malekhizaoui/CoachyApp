export const dataClient = [
  {
    id: 1,
    type: "Client",
    firstName: "Malek",
    lastName: "Hizaoui",
    phoneNumber: "21345350",
    Password: "hello",
    email: "hizaoui.malek.habib@gmail.com",
    image_user: require("../MalekPhoto.jpg"),
    location: {
      city: "Genève",
      latitude: "47.183706",
      longitude: "8.547383",
    },
    age: 23,
    reservation: [
      [
        {
          from: 17,
          to: 18,
          reservation: "accepted",
          coach: {
            firstName: "Fedi",
            lastName: "dghim",
            location: {
              city: "Genéve",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            image_user: require("../MalekPhoto.jpg"),
          },
        },
        {
          from: 17,
          to: 18,
          reservation: "accepted",
          coach: {
            firstName: "Fedi",
            lastName: "dghim",
            location: {
              city: "Genéve",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            image_user: require("../MalekPhoto.jpg"),
          },
        },
      ],
      [],
      [
        {
          from: 17,
          to: 18,
          reservation: "pending",
          coach: {
            firstName: "Fedi",
            lastName: "dghim",
            location: {
              city: "Genéve",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            image_user: require("../MalekPhoto.jpg"),
          },
        },
      ],
      [],
      [],
      [
        {
          from: 17,
          to: 18,
          reservation: "accepted",
          coach: {
            firstName: "Fedi",
            lastName: "dghim",
            location: {
              city: "Genéve",
              latitude: "47.183706",
              longitude: "8.547383",
            },
            image_user: require("../MalekPhoto.jpg"),
          },
        },
      ],
      [],
    ],
  },
];
