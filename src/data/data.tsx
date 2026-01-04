import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CodeBracketIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';

import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
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
  title: 'Vishwapathi Aravindh | Portfolio',
  description: 'CSE Data Science student building automation and AI-powered systems',
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
  name: 'Vishwapathi Aravindh',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">CSE (Data Science) student</strong>{' '}
        building real-world{' '}
        <strong className="text-stone-100">automation systems</strong> and AI-powered
        workflows.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I work with <strong className="text-stone-100">HTML</strong>,{' '}
        <strong className="text-stone-100">CSS</strong>,{' '}
        <strong className="text-stone-100">Tailwind</strong>,{' '}
        <strong className="text-stone-100">JavaScript</strong>, and{' '}
        <strong className="text-stone-100">Python</strong>, while practicing{' '}
        <strong className="text-stone-100">DSA</strong>.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m <strong className="text-stone-100">open to freelance work</strong> in
        automation, web interfaces, and AI solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/aravindhcv.pdf',
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
  profileImageSrc:
    'https://res.cloudinary.com/dudr6v8mi/image/upload/v1767516881/aravind.jpg_herupz.png',
  description:
    'CSE (Data Science) student focused on automation and AI-powered web applications. I build real products like AI call agents, dashboards, and workflow-based systems.',
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
      text: 'Automation & AI',
      Icon: SparklesIcon,
    },
    {
      label: 'Skills',
      text: 'HTML, CSS, Tailwind, JavaScript, Python',
      Icon: CodeBracketIcon,
    },
    {
      label: 'Problem Solving',
      text: 'DSA Practice',
      Icon: ChartBarIcon,
    },
    {
      label: 'Availability',
      text: 'Freelance & Internships',
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: [
      {name: 'HTML', level: 9},
      {name: 'CSS', level: 9},
      {name: 'Tailwind', level: 8},
      {name: 'JavaScript', level: 7},
    ],
  },
  {
    name: 'Programming',
    skills: [
      {name: 'Python', level: 8},
      {name: 'DSA', level: 6},
    ],
  },
];

/**
 * Portfolio
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AutoBook AI',
    description: 'AI-powered voice call agent with admin dashboard',
    url: 'https://auto-book-ai-dashboard-fe4206b3.base44.app',
    image: portfolioImage1,
  },
  {
    title: 'Campus Connect',
    description: 'Unified campus services web platform',
    url: 'https://pick-up-where-i-left-off-84.lovable.app',
    image: portfolioImage2,
  },
  {
    title: 'Library Connect',
    description: 'Smart library management system',
    url: 'https://library-aid-ai.lovable.app',
    image: portfolioImage3,
  },
];

/**
 * Testimonials
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Hackathon Experience',
      text: 'Participated in Telangana State Level Hackathon focused on AI automation.',
      image: '',
    },
    {
      name: 'IIIT Allahabad',
      text: 'Out of Context 26 hackathon participant.',
      image: '',
    },
  ],
};

/**
 * Contact
 */
export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'Open to freelance work, internships, and collaborations.',
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
      href: 'https://www.linkedin.com/in/ash04931',
    },
    {
      type: ContactType.Phone,
      text: '+919030706558',
      href: 'tel:+919030706558',
    },
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ash04931'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/cris._pat/'},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},
];
/**
 * Education
 */
export const education: TimelineItem[] = [
  {
    date: '2025 – 2029',
    location: 'Aurora Deemed to be University',
    title: 'B.Tech – Computer Science & Engineering (Data Science)',
    content: (
      <p>
        Pursuing B.Tech in Computer Science with a specialization in Data Science.
        Actively building automation systems, AI-powered web applications, and
        strengthening problem-solving skills through continuous DSA practice.
      </p>
    ),
  },
  {
    date: '2023 – 2025',
    location: 'Sri Surya Junior College',
    title: 'Intermediate (11th & 12th) – PCM Stream',
    content: (
      <p>
        Focused on Physics, Chemistry, and Mathematics, developing strong analytical
        and logical foundations for engineering studies.
      </p>
    ),
  },
  {
    date: '2022 – 2023',
    location: 'Sri Sai Chaitanya High School',
    title: 'Secondary School (10th Grade)',
    content: (
      <p>
        Completed secondary education with strong academic discipline and foundational
        problem-solving skills.
      </p>
    ),
  },
];
export {
  aboutData,
  contact,
  education,
  experience,
  heroData,
  homePageMeta,
  portfolioItems,
  skills,
  socialLinks,
  testimonial,
};
