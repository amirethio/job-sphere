// src/data/dummyJobs.ts
import product_1 from './img/product-1.png'
import product_2 from './img/product-2.png'
import product_3 from './img/prodcut-3.png'
import product_4 from "./img/product-4.png";
import product_5 from "./img/saved1.png";

export type Job = {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  jobType:
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Internship"
    | "Volunteer"
    | "Remote"
    | "On-Site";
  salary: string;
  experience: string;
  numberOfApplicants?: number;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  saved: boolean;
  relatedJobs?: {
    title: string;
    company: string;
    location: string;
    salary: string;
  }[];
};


const jobs: Job[] = [
  {
    id: 1,
    title: "Product Designer",
    company: "Binford Ltd.",
    companyLogo: product_1,
    location: "Remote",
    jobType: "Full-time",
    salary: "$200-$1,200",
    experience: "3 years",
    description:
      "Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience.",
    saved: false,
    relatedJobs: [
      {
        title: "UI/UX Designer",
        company: "Barone LLC",
        location: "Remote",
        salary: "$200-$800",
      },
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Barone LLC",
    companyLogo: product_2,
    location: "Remote",
    jobType: "Full-time",
    salary: "$200-$800",
    experience: "5 years",
    description:
      "Create user-centric interfaces for web and mobile apps. Conduct usability testing and collaborate with cross-functional teams to ensure optimal user experience.",
    saved: true,
    relatedJobs: [
      {
        title: "Product Designer",
        company: "Binford Ltd.",
        location: "Remote",
        salary: "$200-$1,200",
      },
    ],
  },
  {
    id: 3,
    title: "Front-End Developer",
    company: "TechNova Inc.",
    companyLogo: product_3,
    location: "On-Site",
    jobType: "Contract",
    salary: "$400-$1,000",
    experience: "2 years",
    description:
      "Develop responsive web interfaces using React and modern front-end technologies. Collaborate with designers and back-end engineers to deliver high-quality products.",
    saved: false,
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "DevWorks",
    companyLogo: product_4,
    location: "Remote",
    jobType: "Full-time",
    salary: "$600-$1,500",
    experience: "4 years",
    description:
      "Build scalable server-side applications and APIs using Node.js. Ensure high performance and security in all backend processes.",
    saved: false,
  },
  {
    id: 5,
    title: "Senior UI/UX Designer",
    company: "Binford Ltd.",
    companyLogo: product_5,
    location: "Lagos",
    jobType: "Full-time",
    salary: "$800-$1,500",
    experience: "5 years",
    numberOfApplicants: 40,
    description:
      "We are seeking a highly skilled and creative Senior UI/UX Designer to join our dynamic team. You will design intuitive and engaging user interfaces and enhance user experience across digital platforms.",
    responsibilities: [
      "Design and develop user-centric interfaces for web and mobile applications.",
      "Conduct user research, usability testing, and gather feedback to improve designs.",
      "Create wireframes, prototypes, and high-fidelity designs using Figma, Adobe XD, or Sketch.",
      "Collaborate with product managers and developers to ensure design consistency.",
      "Lead and mentor junior designers in the team.",
    ],
    requirements: [
      "Bachelor’s degree in Graphic Design, Interaction Design, or related field.",
      "Minimum 5 years of UI/UX design experience.",
      "Strong portfolio showcasing UI/UX design work.",
      "Proficiency in Figma, Adobe XD, Sketch, and prototyping tools.",
      "Experience with HTML/CSS and front-end collaboration.",
      "Strong communication and problem-solving skills.",
    ],
    saved: true,
    relatedJobs: [
      {
        title: "UI/UX Designer",
        company: "Barone LLC",
        location: "Remote",
        salary: "$200-$800",
      },
      {
        title: "Product Designer",
        company: "Binford Ltd.",
        location: "Remote",
        salary: "$200-$1,200",
      },
    ],
  },
];

export default jobs;
