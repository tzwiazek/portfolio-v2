import { Project } from "../../../shared/interfaces/project.interface";

const Projects: Project[] = [
  {
    name:"lvbet",
    project: {
      url:"https://lvbet.pl/",
      content: {
        title: "LV BET",
        description: "A modular, highly efficient, distributed system for servicing a large number of end customers (lvbet.pl, lvbet.com, lvbet.lv). Fully integrated with all leading providers."
      }
    }
  },
  {
    name: "noblebet",
    project: {
      url: "https://noblebet.pl/",
      content: {
        title: "Noblebet",
        description: "Noblebet is an elite, modern and safe player club that will provide emotions and service at the highest level. Project includes live matches, sports betting, virtual sports, BetBuilder, cash-out and a lot more."
      }
    }
  },
  {
    name: "portfolio",
    project: {
      url: "https://eager-goldwasser-614770.netlify.app/",
      content: {
        title: "Portfolio",
        description: "Personal portfolio made in Gatsby. I wanted to show personality, branding and developing skills in a simple and straightforward way."
      }
    }
  }
];

export default Projects;
