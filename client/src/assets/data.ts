// // src/data/dummyJobs.ts
// import product_1 from "./../../public/img/product-1.png";
// import product_2 from "./../../public/img/product-2.png";
// import product_3 from "./../../public/img/prodcut-3.png";
// import product_4 from "./../../public/img/product-4.png";
// import product_5 from "./../../public/img/saved1.png";

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
  shortDescription: string;
  responsibilities?: string[];
  requirements?: string[];
  saved: boolean;
  relatedJobs?: Job[];
};

// const jobs: Job[] = [
//   {
//     id: 1,
//     title: "Product Designer",
//     company: "Binford Ltd.",
//     companyLogo: product_1,
//     location: "Remote",
//     jobType: "Full-time",
//     salary: "$200-$1,200",
//     numberOfApplicants: 2,
//     experience: 3,
//     shortDescription:
//       "Design user interfaces for web and mobile apps. Conduct research and create wireframes and prototypes.",
//     description:
//       "Design intuitive and visually appealing user interfaces for web and mobile applications. You will be responsible for the full design lifecycle including user research, wireframing, prototyping, and high-fidelity mockups. Collaborate closely with product managers and developers to ensure design feasibility and quality. Participate in design critiques and maintain consistency with brand guidelines.",
//     responsibilities: [
//       "Design and develop user interfaces for web and mobile applications.",
//       "Conduct user research, create wireframes and prototypes.",
//       "Collaborate with product managers and developers.",
//       "Maintain brand and design consistency across projects.",
//     ],
//     requirements: [
//       "Bachelor’s degree in Design or related field.",
//       "Minimum 3 years of experience in product design.",
//       "Proficiency in Figma, Adobe XD, or Sketch.",
//       "Strong portfolio of web and mobile design projects.",
//     ],
//     saved: false,
//   },
//   {
//     id: 2,
//     title: "UI/UX Designer",
//     numberOfApplicants: 3,
//     company: "Barone LLC",
//     companyLogo: product_2,
//     location: "Remote",
//     jobType: "Part-time",
//     salary: "$200-$800",
//     experience: 5,
//     shortDescription:
//       "Create user-centric interfaces for web and mobile apps and ensure accessibility.collaborating with cross-functional teams.",
//     description:
//       "Create user-centric interfaces for web and mobile applications. You will design intuitive workflows, interactive prototypes, and visual assets while collaborating with cross-functional teams. Lead design reviews and provide mentorship to junior designers. Ensure accessibility and inclusivity in all designs, keeping user experience and business objectives aligned.",
//     responsibilities: [
//       "Design and implement user-centric interfaces for web and mobile apps.",
//       "Develop interactive prototypes and visual assets.",
//       "Lead design reviews and mentor junior designers.",
//       "Ensure accessibility and inclusivity in all designs.",
//     ],
//     requirements: [
//       "Bachelor’s degree in Design or related field.",
//       "Minimum 5 years of experience in UI/UX design.",
//       "Proficiency in Figma, Adobe XD, or Sketch.",
//       "Strong portfolio showcasing UI/UX work.",
//     ],
//     saved: true,
//   },
//   {
//     id: 3,
//     title: "Front-End Developer",
//     company: "TechNova Inc.",
//     companyLogo: product_3,
//     location: "On-Site",
//     jobType: "Contract",
//     salary: "$400-$1,000",
//     numberOfApplicants: 6,
//     experience: 2,
//     shortDescription:
//       "Develop responsive web interfaces using React and collaborate with designers and back-end engineers.",
//     description:
//       "Develop responsive web interfaces using React and modern front-end technologies. Collaborate closely with designers and back-end engineers to deliver high-quality products. Participate in code reviews and ensure performance, accessibility, and scalability standards are met.",
//     responsibilities: [
//       "Develop responsive web interfaces with React.",
//       "Collaborate with designers and back-end developers.",
//       "Participate in code reviews and maintain code quality.",
//       "Ensure performance, accessibility, and scalability of applications.",
//     ],
//     requirements: [
//       "Bachelor’s degree in Computer Science or related field.",
//       "Minimum 2 years of front-end development experience.",
//       "Proficiency in React, JavaScript, HTML, CSS.",
//       "Experience with version control systems like Git.",
//     ],
//     saved: false,
//   },
//   {
//     id: 4,
//     title: "Backend Engineer",
//     company: "DevWorks",
//     companyLogo: product_4,
//     location: "Remote",
//     jobType: "Volunteer",
//     numberOfApplicants: 1,
//     salary: "$600-$1,500",
//     experience: 4,
//     shortDescription:
//       "Build scalable server-side applications and APIs using Node.js while ensuring high performance.",
//     description:
//       "Build scalable server-side applications and APIs using Node.js. Ensure high performance, reliability, and security in all backend processes. Collaborate with front-end developers to integrate APIs and participate in system architecture planning, code reviews, and database design.",
//     responsibilities: [
//       "Develop and maintain server-side applications using Node.js.",
//       "Design and implement APIs for front-end integration.",
//       "Ensure security, reliability, and performance of backend systems.",
//       "Participate in code reviews and database design.",
//     ],
//     requirements: [
//       "Bachelor’s degree in Computer Science or related field.",
//       "Minimum 4 years of backend development experience.",
//       "Proficiency in Node.js, Express, and database systems.",
//       "Strong problem-solving and debugging skills.",
//     ],
//     saved: false,
//   },
//   {
//     id: 5,
//     title: "Senior UI/UX Designer",
//     company: "Binford Ltd.",
//     companyLogo: product_5,
//     location: "Lagos",
//     jobType: "Internship",
//     salary: "$800-$1,500",
//     experience: 8,
//     numberOfApplicants: 40,
//     shortDescription:
//       "Lead the design of engaging UI/UX across digital platforms and mentor junior designers.team..",
//     description:
//       "We are seeking a highly skilled and creative Senior UI/UX Designer to join our dynamic team. You will lead the design of engaging user interfaces and enhance user experience across multiple digital platforms. Collaborate closely with product managers, developers, and stakeholders to bring innovative ideas to life while ensuring brand consistency and usability standards.",
//     responsibilities: [
//       "Design and develop user-centric interfaces for web and mobile applications.",
//       "Conduct user research, usability testing, and gather feedback to improve designs.",
//       "Create wireframes, prototypes, and high-fidelity designs using Figma, Adobe XD, or Sketch.",
//       "Collaborate with product managers and developers to ensure design consistency.",
//       "Lead and mentor junior designers in the team.",
//     ],
//     requirements: [
//       "Bachelor’s degree in Graphic Design, Interaction Design, or related field.",
//       "Minimum 5 years of UI/UX design experience.",
//       "Strong portfolio showcasing UI/UX design work.",
//       "Proficiency in Figma, Adobe XD, Sketch, and prototyping tools.",
//       "Experience with HTML/CSS and front-end collaboration.",
//       "Strong communication and problem-solving skills.",
//     ],
//     saved: true,
//   },
//   {
//     id: 6,
//     title: "Contract Mobile Developer",
//     company: "AppWorks",
//     companyLogo: product_4,
//     location: "Remote",
//     jobType: "Remote",
//     salary: "$500-$1,200",
//     experience: 10,
//     numberOfApplicants: 2,
//     shortDescription:
//       "Develop mobile applications for clients on a contract basis.Build React Native apps according to client requirements. Collaborate with designers.",
//     description:
//       "Build React Native apps according to client requirements. Collaborate with designers and backend developers to implement features. Maintain code quality and ensure timely delivery of mobile applications during the contract period.",
//     responsibilities: [
//       "Develop React Native apps.",
//       "Integrate APIs and backend services.",
//       "Collaborate with designers.",
//       "Ensure app quality.",
//     ],
//     requirements: [
//       "3 years experience in mobile development.",
//       "Portfolio required",
//     ],
//     saved: false,
//   },
//   {
//     id: 7,
//     title: "Remote UX Researcher",
//     company: "UserFirst",
//     companyLogo: product_5,
//     location: "Remote",
//     jobType: "On-Site",
//     salary: "$400-$900",
//     experience: 4,
//     numberOfApplicants: 3,
//     shortDescription:
//       "Conduct UX research and analyze user behavior remotely.Analyze user behavior and provide insights for product teams.",
//     description:
//       "Analyze user behavior and provide insights for product teams. Conduct surveys, interviews, and usability testing. Prepare reports and recommendations to improve user experience. Collaborate with designers and developers to apply insights to product design.",
//     responsibilities: [
//       "Conduct user interviews and surveys.",
//       "Analyze data for actionable insights.",
//       "Prepare reports and presentations.",
//       "Work with designers and developers.",
//     ],
//     requirements: ["4 years experience in UX research.", "Portfolio preferred"],
//     saved: false,
//   },
// ];

// // Add relatedJobs references after defining all jobs to avoid circular issues
// jobs[0].relatedJobs = [jobs[1], jobs[4]];
// jobs[1].relatedJobs = [jobs[0], jobs[4]];
// jobs[2].relatedJobs = [jobs[3]];
// jobs[3].relatedJobs = [jobs[2]];
// jobs[4].relatedJobs = [jobs[0], jobs[1]];

// export default jobs;
