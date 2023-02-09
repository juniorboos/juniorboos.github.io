import {
  css3,
  figma,
  firebase,
  googleCloud,
  keras,
  python,
  react,
  reactNative,
  redux,
  // sqlite,
  styledComponents,
  tensorflow,
} from "./technologies";

export default {
  title: "Some things I've built",
  projects: [
    [
      {
        name: "IPBot",
        description:
          "Conversation module for an assistant robot using machine learning and natural language processing.",
        url: "https://github.com/juniorboos/ChatbotIPB",
        technologies: [python, tensorflow, keras],
      },
      {
        name: "AgendaPG",
        description:
          "Application that provides a robust interface to make appointments remotely for the public sector.",
        url: "https://github.com/juniorboos/AgendaPG",
        technologies: [reactNative, firebase, styledComponents],
      },
    ],
    [
      {
        name: "iParking",
        description:
          "Mobile app for drivers to find places to park in Smart Parkings.",
        url: "https://github.com/juniorboos/iParking",
        technologies: [reactNative, firebase, figma, googleCloud],
      },
      {
        name: "iParking Web",
        description: "A web marketing interface for the iParking app.",
        url: "https://github.com/juniorboos/iParkingWeb",
        technologies: [react, css3, figma],
      },
      {
        name: "iParking Management",
        description:
          "A web platform for marketing and management of the Smart Parkings!",
        url: "https://github.com/juniorboos/iParking-Management",
        technologies: [react, redux, firebase, css3, figma],
      },
    ],
    [
      {
        name: "Next Level Recycling",
        description:
          "Full stack app (web, mobile and backend) that makes it easier to find places to recycle garbage.",
        url: "https://github.com/juniorboos/nextlevel",
        technologies: [react, css3, firebase],
      },
      {
        name: "Arbeit",
        description:
          "A job finder app focused on temporary jobs (Castlethon Hackathon Winner)",
        url: "https://devpost.com/software/arbeit",
        technologies: [reactNative, firebase, figma],
      },
    ],
  ],
};
