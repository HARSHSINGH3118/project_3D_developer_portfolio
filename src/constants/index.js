import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import tripfox from "../assets/company/tripfox.png";
import system from "../assets/company/Systemic Altruism.png";
import turbo from "../assets/company/turbo digital.jpg";
import mara from "../assets/company/mara.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tripfox Travel",
    icon: tripfox,
    iconBg: "#383E56",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developed and optimized a full-stack travel platform using React.js and Node.js, improving user engagement by 30%.",
      "Collaborated with cross-functional teams to enhance UX, reduce load time by 40%, and boost user retention by 25%.",
      "Implemented responsive design, ensuring seamless functionality across devices and cross-browser compatibility.",
      "Leveraged MongoDB and Express.js for efficient data handling, improving backend performance by 25%.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Systemic Altruism",
    icon: system,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Turbo Digital",
    icon: turbo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "University of Mara Malaysia",
    icon: mara,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Conducted research on crystal plasticity modeling, simulating microstructural behavior using DAMASK.",
      "Collaborated with faculty and researchers to develop computational models for predicting material deformation.",
      "Implemented simulations to analyze slip systems, twinning, and grain boundary interactions for phase transformations.",
      "Optimized microstructural modeling, achieving a 95% accuracy rate in predicting mechanical behavior.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've seen many young talents, but your ability to learn and grow at such a young age is truly impressive. Keep going—you have the potential to become one of the best engineers and tech experts.",
    name: "Sumit Mendiratta",
    designation: "CTO",
    company: "Procol io",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEuQsdO6vTYig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707766746278?e=1744848000&v=beta&t=FvnNkgY9d8qHvur3BHvMiS-2epYfonldtuWqQVsODns",
  },
  {
    testimonial:
      "Your bug-finding skills are just amazing, and you are an SEO master, crafting beautiful and highly optimized websites. During Unfold 2024.",
    name: "Nitin Vinayachandran",
    designation: "Operational Head",
    company: "Rabble Labs",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGU0h-7CEVV1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672659353847?e=1744848000&v=beta&t=a1zihiVjIH4LCSltD9UZ_tvksnwJmyb2Fpo61OJlT-k",
  },
  {
    testimonial:
      "You are a true leader who not only takes the whole team together but also inspires and motivates them to achieve success through collaboration and innovation.",
    name: "Dr. V.N. Manikand",
    designation: "Assit. Professor",
    company: "SRM University AP",
    image: "https://srmap.edu.in/file/2020/03/Manikandan2.jpg",
  },
];

const projects = [
  {
    name: "Medical Automation System | SRM AP",
    description:
      "Web-based system that automates appointment scheduling and medical record management, enhancing efficiency and reducing wait times for students and healthcare providers at SRM AP.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/HARSHSINGH3118/medical_automation",
  },
  {
    name: "FitFusion | Fitness Tracker  ",
    description:
      "Web application that allows users to track fitness activities, monitor calorie expenditure, and analyze workout progress in real-time, providing personalized insights for a healthier lifestyle.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/HARSHSINGH3118/FitFussion",
  },
  {
    name: "Safe Click",
    description:
      "A browser extension that detects and blocks spam websites, protecting users from phishing attacks and malicious links while ensuring a safe and secure browsing experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "XGboost",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/HARSHSINGH3118/SafeClick",
  },
];

export { services, technologies, experiences, testimonials, projects };
