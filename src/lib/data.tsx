import { Github, Twitter, Figma } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-python.svg';
import LogoReact from '/public/images/logos/icon-aws.svg';
import LogoNextjs from '/public/images/logos/icon-kubernetes.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-ansible.svg';
import LogoExpressLight from '/public/images/logos/icon-ansible-light.svg';
import LogoNest from '/public/images/logos/icon-docker.svg';
import LogoSocket from '/public/images/logos/icon-github.svg';
import LogoSocketLight from '/public/images/logos/icon-github-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-graylog.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/icon-grafana.svg';
import LogoTailwindcss from '/public/images/logos/icon-centos.svg';
import LogoFigma from '/public/images/logos/icon-jenkins.svg';
import LogoCypress from '/public/images/logos/icon-chef.svg';
import LogoStorybook from '/public/images/logos/icon-terraform.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/icon-kaiser.png';
import LogoGreenApex from '/public/images/logos/icon-trinuscorp.png';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Rafael-Moreno-7',
  GITHUB_REPO: 'https://github.com/Rafael-Moreno-7/aws-cloud-resume-challenge',
  TWITTER: 'https://twitter.com/RevMeno',
  FIGMA: 'https://www.figma.com/',
  FIGMA_FILE:
    'https://www.figma.com/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Rafael-Moreno-7',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/RevMeno',
  },
  {
    icon: Figma,
    url: 'https://www.figma.com',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Python',
    logo: LogoTypescript,
    url: 'https://www.python.org/',
  },
  {
    label: 'Aws',
    logo: LogoReact,
    url: 'https://aws.amazon.com/',
  },
  {
    label: 'Kubernetes',
    logo: LogoNextjs,
    url: 'https://kubernetes.io/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Ansible',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://www.ansible.com/',
  },
  {
    label: 'Docker',
    logo: LogoNest,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Github',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://github.com/',
  },
  {
    label: 'Graylog',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Grafana',
    logo: LogoSass,
    url: 'https://grafana.com/',
  },
  {
    label: 'Centos',
    logo: LogoTailwindcss,
    url: 'https://www.centos.org/',
  },
  {
    label: 'Jenkins',
    logo: LogoFigma,
    url: 'https://www.jenkins.io/',
  },
  {
    label: 'Chef',
    logo: LogoCypress,
    url: 'https://www.chef.io/',
  },
  {
    label: 'Terraform',
    logo: LogoStorybook,
    url: 'https://www.terraform.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'IT Refresh Technician',
    startDate: new Date(2022, 9),
    currentlyWorkHere: true,
    summary: [
      'Executed hardware and software installations, upgrades, and migrations for clients, ensuring seamless IT system transitions.',
      'Conducted troubleshooting and provided technical support to resolve hardware and software issues.',
      'Documented and maintained accurate inventory records for hardware and software assets.',
    ],
  },
  {
    logo: LogoGreenApex,
    logoAlt: 'Greenapex logo',
    position: 'IT Helpdesk Intern',
    startDate: new Date(2022, 8),
    endDate: new Date(2022, 9),
    summary: [
      'Provide friendly and timely technical support to users through various channels, helping them troubleshoot and resolve issues.',
      'Manage and document user requests in the helpdesk system, ensuring prompt resolution and proper escalation if needed.',
      'Contribute to the helpdesks knowledge base by creating helpful resources to assist users in resolving common problems..',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wingie',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Fiskil',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Ray Luna',
    personAvatar: AvatarKrisztian,
    title: 'Senior Desktop Support - Kaiser Permanente',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Rafael to all, he is a fast learner.',
  },
  {
    personName: 'Kevin Xiong',
    personAvatar: AvatarEugen,
    title: 'IT Refresh Tech - Kaiser Permanente',
    testimonial:
      'Great guy, highly recommended for any Systems automation job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Isaiah Romero',
    personAvatar: AvatarDummy,
    title: 'IT Enthusiast',
    testimonial:
    'Rafael was extremely easy and pleasant to work with and he truly cares about the project being a success. Would love to work with him again!',
  },
];
