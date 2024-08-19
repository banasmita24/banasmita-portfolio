import {
    machine,
    frontend,
    raspberry,
    data,
    javascript,
    html,
    css,
    tailwind,
    nodejs,
    python,
    git,
    figma,
    rv,
    um,
    threejs,
    cpp,
    c,
    java,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "socials",
      title: "Socials",
    },
  ];
  
  const services = [
    {
      title: "Exploratory Data Analysis (EDA)",
      icon: data,
    },
    {
      title: "Beginner in Machine Learning",
      icon: machine,
    },
    {
      title: "Frontend Development Experience",
      icon: frontend,
    },
    {
      title: "Experience with Raspberry Pi Pico W",
      icon: raspberry,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "my sql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Exploratory Analysis on Google Play Store Apps",
      company_name: "RV University",
      icon: rv,
      iconBg: "#383E56",
      date: "November 2023 - December 2023",
      points: [
        "This project involves an in-depth data analysis of Google Play Store apps.",
        "The analysis aims to uncover various trends and insights related to app categories, ratings, reviews, sizes, and other relevant attributes. ",
        "The project includes a Jupyter Notebook containing the analysis and visualizations, as well as the dataset in CSV format.",
      ],
    },
    {
      title: "ApplyNest - A Flask Application",
      company_name: "RV University",
      icon: rv,
      iconBg: "#383E56",
      date: "May 2024 - June 2024",
      points: [
        "Users can register, login, and logout. There are two types of users: admins and regular users.",
        "Admins can view, add, edit, and delete job postings.",
        "Regular users can view job postings and apply for them.",
        "Admins can view job applications submitted by users.",
        "Passwords are securely hashed before storing in the database.",
      ],
    },
    {
      title: "Heart Disease Diagnostic Analysis",
      company_name: "Unified Mentor - Internship",
      icon: um,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Explored the Age Range by Heart Disease Presence, revealing interesting patterns in heart disease prevalence across different age groups.",
        "Investigated proportions, percentages, frequencies, and distributions for various attributes, offering valuable insights into potential risk factors for heart disease.",
      ],
    },
    {
      title: "LLaVA, Mistral-7b Chatbot Development",
      company_name: "RV University - Internship",
      icon: rv,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "With the integration of LLAVA, Mistral, LangChain, and Streamlit, the chatbot developed has shown notable advancement in its functionality.",
        "Slow responsiveness due to open-source models being used, unpredictable outputs for image-based queries due to the less number of tokens used.",
        "The chatbot offers multi-modal capabilities which is able to do basic text-based chatting now and image-based interactions, audio based chatting are still under development.",
      ],
    },
  ];
  
  export { services, technologies, experiences};