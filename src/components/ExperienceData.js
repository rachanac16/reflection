import otb from "../assets/icons/otb.png";
import JPMorgan from "../assets/icons/jpmc.png";
import deesha from "../assets/icons/deesha.jpg";
import cvs from "../assets/icons/cvs.png";

const ExperienceData = [
  // {
  //   id: 0,
  //   shortName: "otb",
  //   companyName: "OTB INNOVTECH LLP.",
  //   position: "ANDROID APPLICATION DEVELOPER INTERN",
  //   location: "MUMBAI, INDIA",
  //   date: "MAY 2019 - JULY 2019",
  //   description: [
  //     "Designed an Android Application to track 100+ salespersons in real-time on the field with integrated features like booking orders and updating inventory which led to saving 2 hours per salesperson in traveling and eliminated 10 hours of delay caused by decisions made manually",
  //     "Used Android Studio in Java; XML, PHP for REST API; AsyncTask for background threads; Firebase for real-time notifications",
  //   ],
  //   icon: otb,
  //   skills: "Android Studio | Java | Firebase | Javascript | REST API",
  // },
  {
    id: 0,
    shortName: "jpmc",
    companyName: "JPMorgan Chase & Co.",
    position: "Software Analyst Intern",
    location: "Mumbai, India",
    date: "June 2020 - July 2020",
    description: [
      "Developed a Web Application using Spring-boot, ReactJS, and MySQL for handling daily activities of an NGO and providing a seamless volunteer experience with dynamic schedules that used a heuristic approach for organizing events",
    ],
    icon: JPMorgan,
    skills: "Spring Boot | Java | React.js | HTML | Javascript",
  },
  // {
  //   id: 2,
  //   shortName: "deesha",
  //   companyName: "DEESHA TRADE ENDEAVORS PVT. LTD.",
  //   position: "BACKEND DEVELOPER INTERN",
  //   location: "MUMBAI, INDIA",
  //   date: "MARCH 2021 - APRIL 2021",
  //   description: [
  //     "Developed the application, tested, and maintained 10+ endpoints using Spring boot for an auction system of tea products",
  //     "Improved the database to store the client information and the auction details for fast and real-time querying",
  //   ],
  //   icon: deesha,
  //   skills: "Spring Boot | Java | Design Patterns | REST API | React.js",
  // },
  {
    id: 1,
    shortName: "jpmc",
    companyName: "JPMorgan Chase & Co.",
    position: "Software Analyst",
    location: "Mumbai India",
    date: "July 2021 - July 2022",
    description: [
      "Responsible for providing automation using Python to existing monitoring applications in a DevOps and SRE role and taking responsibility for ad hoc requests for enhancements in internal applications",
      "Created an incident reporting system in Java, and AngularJS used across all business markets by more than 200+ people",
    ],
    icon: JPMorgan,
    skills:
      "Python | Python Server Side | Java | Javascript | HTML | CI/CD | Jules deployment",
  },
  {
    id: 2,
    shortName: "cvs",
    companyName: "CVS Health",
    position: "Cloud Engineer",
    location: "Irving, Texas",
    date: "July 2023 - Present",
    description: [
      "Responsible for architecting and implementing cloud solutions",
      "Developing software solutions around client requirements in Python and Angular.",
      "Deploying and maintaining CI/CD pipelines",
    ],
    icon: cvs,
    skills: "Python | Angular | CircleCI | Harness | Postgres | MongoDB",
  },
];

export default ExperienceData.reverse();
