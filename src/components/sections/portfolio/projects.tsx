import { Project } from '../../../shared/interfaces/project.interface';

const Projects: Project[] = [
  {
    name: 'lvbet',
    project: {
      url: 'https://lvbet.pl/',
      content: {
        title: 'LV BET',
        description:
          'A modular, highly efficient, distributed system for servicing a large number of end customers (lvbet.pl, lvbet.com, lvbet.lv). Fully integrated with all leading providers.'
      }
    }
  },
  {
    name: 'noblebet',
    project: {
      url: 'https://noblebet.pl/',
      content: {
        title: 'Noblebet',
        description:
          'Noblebet is an elite, modern and safe player club that will provide emotions and service at the highest level. Project includes live matches, sports betting, virtual sports, BetBuilder, cash-out and a lot more.'
      }
    }
  },
  {
    name: 'sinsay',
    project: {
      url: 'https://www.sinsay.com/',
      content: {
        title: 'Sinsay',
        description:
          'E-commerce redesign for Sinsay. Focused on modern UI, smooth user experience and mobile-first performance to reflect fast-fashion brand identity.'
      }
    }
  },
  {
    name: 'side-project',
    project: {
      url: 'https://frontend-nuv.vercel.app/',
      content: {
        title: 'Side project',
        description:
          'Crypto market insights platform. Built to explore data-driven trends, improve decision-making and test ideas in a fast, minimal environment.'
      }
    }
  }
];

export default Projects;
