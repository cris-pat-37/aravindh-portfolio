import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChartBarIcon,
  CodeBracketIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from "../images/portfolio/portfolio-2.jpg";
import portfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import portfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: "Vishwapathi Aravindh",
  description: (
  <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I am a <strong className="text-stone-100">CSE (Data Science) student </strong>
      building real-world <strong className="text-stone-100"> Automation systems </strong>
      and AI-powered workflows.
    </p>

    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I work with <strong className="text-stone-100">HTML</strong>,{" "}
      <strong className="text-stone-100">CSS</strong>,{" "}
      <strong className="text-stone-100">Tailwind</strong>,{" "}
      <strong className="text-stone-100">JavaScript</strong>, and{" "}
      <strong className="text-stone-100">Python</strong>, while actively practicing{" "}
      <strong className="text-stone-100">Data Structures and Algorithms</strong>.
    </p>

    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I’m <strong className="text-stone-100">open to freelance work</strong> involving
      automation, web interfaces, and AI-driven solutions.
    </p>
  </>
),

  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc:'https://res.cloudinary.com/dudr6v8mi/image/upload/v1767516881/aravind.jpg_herupz.png',
  description: `I am a CSE (Data Science) student focused on building real-world automation
  and AI-powered web applications. I work on practical products like AI call agents,
  dashboards, and campus-focused platforms rather than demo projects.

  My technical stack includes HTML, CSS, Tailwind, JavaScript, and Python, with a strong
  interest in automation workflows and system integration. Alongside development, I
  actively practice Data Structures and Algorithms to improve problem-solving and build
  efficient, scalable solutions.

  I am open to freelance opportunities, internships, and collaborations where I can
  apply my skills to solve real problems.`,
  aboutItems: [
    {
      label: 'Location',
      text: 'India',
      Icon: MapIcon,
    },
    {
      label: 'Degree',
      text: 'B.Tech – CSE (Data Science)',
      Icon: AcademicCapIcon,
    },
    {
      label: 'Focus',
      text: 'Automation & AI-powered Web Apps',
      Icon: SparklesIcon,
    },
    {
      label: 'Skills',
      text: 'HTML, CSS, Tailwind, JavaScript, Python',
      Icon: CodeBracketIcon,
    },
    {
      label: 'Problem Solving',
      text: 'Active DSA Practice',
      Icon: ChartBarIcon,
    },
    {
      label: 'Availability',
      text: 'Open to Freelance & Internships',
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      { name: 'English', level: 8},
      { name: 'Hindi', level: 8},
      { name: 'Telugu', level: 10,},
      { name: 'German (Learning)', level: 1 },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      { name: 'HTML', level: 9},
      { name: 'CSS', level: 9},
      { name: 'Tailwind CSS', level: 8 },
      { name: 'JavaScript', level: 7 },
    ],
  },
  {
    name: 'Programming & CS',
    skills: [
      { name: 'Python', level: 8},
      { name: 'Data Structures & Algorithms', level: 6},
      { name: 'Problem Solving', level: 8},
    ],
  },
  {
    name: 'Automation & AI',
    skills: [
      { name: 'Workflow Automation', level: 9 },
      { name: 'Prompt Engineering', level: 10,},
      { name: 'AI-assisted Development', level: 8},
    ],
  },
  {
    name: 'Tools & Productivity',
    skills: [
      { name: 'Git & GitHub', level: 4 },
      { name: 'VS Code', level: 7},
      { name: 'API Integrations', level: 7},
      { name: 'Using AI to Boost Productivity', level: 9},
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "AutoBook AI",
  description:
    "AI-powered voice call agent with a dashboard to manage automated appointment bookings, confirmations, and follow-ups. Built to reduce manual workload using conversational AI and automation workflows.",
  url: "https://auto-book-ai-dashboard-fe4206b3.base44.app",
  image: portfolioImage1,
  },
  {
     title: "Campus Connect",
  description:
    "Web application designed to unify multiple campus services into a single platform for students, improving access to academic, administrative, and support resources.",
  url: "https://pick-up-where-i-left-off-84.lovable.app",
  image: portfolioImage2,
  },
  {
    title: "Library Connect",
  description:
    "Smart library management web application that improves book discovery, availability tracking, and overall access to library services for students.",
  url: "https://library-aid-ai.lovable.app",
  image: portfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2025– 2029',
    location: 'Aurora Deemed to be University',
    title: 'B.Tech – Computer Science & Engineering (Data Science)',
    content: (
      <p>
        Pursuing B.Tech in Computer Science with a specialization in Data Science.
        Actively building automation systems, AI-powered web applications,
        and strengthening problem-solving skills through continuous DSA practice.
      </p>
    ),
  },
  {
    date: '2023 – 2025',
    location: 'Sri Surya Junior College',
    title: 'Intermediate (11th & 12th) – PCM Stream',
    content: (
      <p>
        Completed intermediate education with a focus on Physics, Chemistry,
        and Mathematics, developing strong analytical and logical foundations
        for engineering studies.
      </p>
    ),
  },
  {
    date: '2022– 2023',
    location: 'Sri Sai Chaitanya High School',
    title: 'Secondary School (10th Grade)',
    content: (
      <p>
        Completed secondary school education with an emphasis on core academics,
        discipline, and foundational problem-solving skills.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 – Present',
    location: 'B.Tech CSE (Data Science)',
    title: 'Frontend & Automation Project Developer',
    content: (
      <p>
        Actively building frontend websites and automation-based applications alongside
        academic coursework. Experienced in developing responsive user interfaces using
        HTML, CSS, Tailwind, and JavaScript, as well as building automation and AI-driven
        projects such as dashboards, call agents, and workflow-based systems.
        Regularly practicing Data Structures and Algorithms to strengthen problem-solving
        and write efficient, scalable code.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Telangana State Level Hackathon',
      text:
        'Participant in a Telangana State Level Hackathon conducted by OpenAI in collaboration with NxtWave Institute. Gained hands-on experience building AI-based solutions focused on automation, real-world usability, and rapid problem-solving.',
      image: '',
    },
    {
      name: 'Out of Context 26 – IIIT Allahabad',
      text:
        'Participant in the Out of Context 26 Hackathon held at IIIT Allahabad. Collaborated with peers from different backgrounds, worked under strict timelines, and improved technical and teamwork skills through competitive problem-solving.',
      image: '',
    },
    {
      name: 'Freelance Client Feedback',
      text:
        'Successfully delivered an automated chatbot solution for a freelance client at a significantly lower cost than typical market agencies. The client appreciated the efficiency, quality, and clarity of the solution.',
      image: '',
    },
  ],
};


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I’m open to freelance projects, internships, collaborations, and hackathons. If you’re looking to build a website, automation workflow, or AI-powered solution, feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'vishwaphathiaravindh@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Telangana, India',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Vishwapathi Aravindh',
      href:'https://www.linkedin.com/in/ash04931',
      
    },
    {
  type: ContactType.Phone,
  text: '+919030706558',
  href: 'tel:+919030706558',
},

  ],
};


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ash04931'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/cris._pat/'},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},
];
