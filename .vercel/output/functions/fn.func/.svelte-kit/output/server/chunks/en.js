const page = {
  about: {
    title: "About Me",
    me: {
      job: "Software Engineer",
      description: [
        "App developer and Artificial Intelligence engineer. Proficient in crafting dynamic applications using advanced technologies, and creating innovative solutions and data-driven decisions. Committed to continuous learning to deliver innovation and practicality."
      ]
    },
    experience: {
      title: "Experience",
      companies: [
        {
          entity: "TITSA",
          url: "https://www.titsa.com/",
          title: "Machine Learning Specialist",
          from: "02/2023",
          to: "05/2023",
          description: [
            "Demonstrated prowess in machine learning, through advanced models utilizing PyTorch. Achieving confidence levels surpassing 95% in predicting the number of customers.",
            "Solved the Open Vehicle Routing Problem implementing state-of-the-art algorithms. These solutions not only addressed the problem's complexity but also showcased the ability to leverage cutting-edge approaches.",
            "Brought to life a dynamic full-stack web application using React.JS and Flask. Provided users an interactive avenue to visualize the algorithms in action, enhancing comprehension and engagement.",
            "Harnessed data potential through astute analysis and streamlined automation with SQL Server. Resulting the acceleration of critical processes and facilitation of data-driven decision-making.",
            "Always integrating best practices based in Agile methodologies, ensuring harmonious collaboration and iterative development."
          ]
        }
      ]
    },
    education: {
      title: "Education",
      degrees: [
        {
          entity: "ULL",
          url: "https://www.ull.es/",
          from: "09/2019",
          to: "07/2023",
          title: "Computer Science",
          description: [
            "Developed a bot agent for shooting games in C# within the Unity framework, displaying adeptness in game development and AI.",
            "Exhibited versatility by creating an interpreter and compiler in JavaScript, while demonstrated a flair for user-centric design by crafting frontend websites using TypeScript.",
            "Designing text classification software utilizing natural language processing and machine learning, showcasing expertise in computer vision through the implementation of a hand gesture recognizer using Python.",
            "Proficiency in network programming and real-time communication by constructing sockets in C/C++.",
            "Solidified capabilities through leveraging SQL for database management, thus encompassing a diverse range of technical expertise."
          ]
        }
      ]
    }
  },
  projects: {
    title: "Projects",
    description: "Description"
  },
  contact: {
    title: "Contact",
    mail: "Mail",
    subject: "Subject",
    subjectPlaceholder: "Hello Daniel!",
    message: "Message",
    messagePlaceholder: "Dear Sir,\n...",
    send: "Send",
    reset: "Reset"
  }
};
const settings = {
  title: "Settings",
  mode: "Mode",
  light: "Light",
  dark: "Dark",
  lang: "Language",
  en: "English",
  es: "Spanish"
};
const error = {
  notFound: "Page not found",
  notFoundDescription: "The page you are looking for does not exist.",
  notFoundButton: "Go home"
};
const en = {
  page,
  settings,
  error
};
export {
  en as default,
  error,
  page,
  settings
};
