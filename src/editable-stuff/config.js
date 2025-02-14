// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jishnu",
  middleName: "",
  lastName: "Baburaj",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JishnuBaburaj",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jishnubaburaj/",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jishnu.png"),
  imageSize: 375,
  message:
    "My name is Jishnu Baburaj. I’m a graduate of 2016 from Calicut University with a degree in Electronics. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume:
    "https://docs.google.com/document/d/1lNIBL_LH4aEQZipQrtmoeRzkLEI33E5dFOD_xrQTWSE/edit",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JishnuBaburaj",
  reposLength: 0,
  specificRepos: [
    "transmit",
    "envitictestrun",
    "socialoauthlogin",
    "pizzaplace",
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 75 },
    { name: "NodeJS", value: 75 },
    { name: "ExpressJS", value: 70 },
    { name: "MySQL", value: 65 },
    { name: "MongoDB", value: 60 },
    { name: "Kafka", value: 60 },
    { name: "Redis", value: 60 },
    { name: "Python", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 70 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jishnubaburajofficial@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/freshtohome.png"),
      date: "Apr 2023 – Present",
      url: "https://www.freshtohome.com/",
    },
    {
      role: "Associate Software Engineer",
      companylogo: require("../assets/img/freshtohome.png"),
      date: "Nov 2021 – Mar 2023",
      url: "https://www.freshtohome.com/",
    },
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/codelattice.png"),
      date: "Dec 2020 – Nov 2021",
      url: "https://www.codelattice.com/",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
