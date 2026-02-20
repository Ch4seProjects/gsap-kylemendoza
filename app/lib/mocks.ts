import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "trials",
    name: "Trials",
    year: 2024,
    services: ["Web Development", "Desktop Development"],
    techStack: ["Next.js", "Electron.js", "Graphql", "SCSS"],
    liveSite: "https://trials.gg",
    carbonFootprint: "0.12g CO2/visit",
    images: [
      "/projects/trials/trials-1.png",
      "/projects/trials/trials-2.png",
      "/projects/trials/trials-3.png",
      "/projects/trials/trials-4.png",
      "/projects/trials/trials-5.png",
      "/projects/trials/trials-6.png",
    ],
    description:
      "A competitive gaming platform that transforms gameplay into structured Trials — objective-based challenges across Valorant, League of Legends, Apex Legends, and more. Earn points, collectible cards, and event tokens through proof of skill, not chance.",
  },
  {
    slug: "solara-energy",
    name: "Solara Energy",
    year: 2025,
    services: ["Web Development", "Motion Design"],
    techStack: ["React", "Three.js", "D3.js"],
    liveSite: "https://solaraenergy.io",
    carbonFootprint: "0.08g CO2/visit",
    images: [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
    ],
    description:
      "A renewable energy dashboard showcasing real-time solar panel performance data with interactive 3D visualizations and animated infographics.",
  },
  {
    slug: "nomad-collective",
    name: "Nomad Collective",
    year: 2024,
    services: ["Full-Stack Development", "UI/UX Design"],
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    liveSite: "https://nomadcollective.com",
    carbonFootprint: "0.15g CO2/visit",
    images: [
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    ],
    description:
      "A travel community platform connecting remote workers worldwide. Includes interactive maps, real-time chat, and a curated city guide system.",
  },
  {
    slug: "archetype-magazine",
    name: "Archetype Magazine",
    year: 2024,
    services: ["Web Development", "CMS Integration", "Typography"],
    techStack: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    liveSite: "https://archetypemag.com",
    carbonFootprint: "0.10g CO2/visit",
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
    ],
    description:
      "A digital editorial experience for a contemporary design magazine. Features custom typeface integration, scroll-driven animations, and a headless CMS.",
  },
  {
    slug: "pulse-fitness",
    name: "Pulse Fitness",
    year: 2024,
    services: ["Web App", "UI/UX Design", "API Development"],
    techStack: ["React", "Express", "PostgreSQL", "Chart.js"],
    liveSite: "https://pulsefitness.app",
    carbonFootprint: "0.18g CO2/visit",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    ],
    description:
      "A fitness tracking web app with personalized workout plans, progress analytics, and social features. Built with performance and accessibility in mind.",
  },
];
