export interface Skill {
  id: number;
  name: string;
  logo: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    logo: "/public/assets/logos/JavaScript-logo.png",
    level: "Advanced",
  },
  {
    id: 2,
    name: "React.js",
    logo: "/public/assets/logos/react-logo.png",
    level: "Advanced",
  },
  {
    id: 3,
    name: "Node.js",
    logo: "/public/assets/logos/nodejs-logo.svg",
    level: "Advanced",
  },
  {
    id: 4,
    name: "MongoDB",
    logo: "/public/assets/logos/mongodb.svg",
    level: "Intermediate",
  },
  {
    id: 5,
    name: "Express.js",
    logo: "/public/assets/logos/express-js.png",
    level: "Advanced",
  },
  {
    id: 6,
    name: "Sqlite",
    logo: "/public/assets/logos/sqlite.png",
    level: "Advanced",
  },
  {
    id: 7,
    name: "DSA",
    logo: "/public/assets/logos/dsa_logo.webp",
    level: "Intermediate",
  },
  {
    id: 8,
    name: "C++",
    logo: "/public/assets/logos/c++.png",
    level: "Intermediate",
  },
  {
    id: 9,
    name: "Next.js",
    logo: "/public/assets/logos/nextjs.png",
    level: "Beginner",
  },
  {
    id: 10,
    name: "TypeScript",
    logo: "/public/assets/logos/typescript.png",
    level: "Beginner",
  },
  // Add more skills
];
