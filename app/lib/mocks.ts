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
    ],
    description:
      "A competitive gaming platform that transforms gameplay into structured Trials — objective-based challenges across Valorant, League of Legends, Apex Legends, and more. Earn points, collectible cards, and event tokens through proof of skill, not chance.",
  },
  {
    slug: "ecoventure",
    name: "Ecoventure",
    year: 2024,
    services: ["Web Development", "UI/UX Design"],
    techStack: ["React", "Kuula", "Tailwind CSS"],
    liveSite: "https://virtual-tour-app.vercel.app/",
    carbonFootprint: "0.08g CO2/visit",
    images: [
      "/projects/ecoventure/ecoventure-1.jpg",
      "/projects/ecoventure/ecoventure-2.png",
      "/projects/ecoventure/ecoventure-3.png",
      "/projects/ecoventure/ecoventure-4.png",
      "/projects/ecoventure/ecoventure-5.png",
      "/projects/ecoventure/ecoventure-6.png",
    ],
    description:
      "A virtual tour web app for Bakhawan Eco Park in Kalibo, letting users explore different locations within the park through an immersive, interactive experience.",
  },
  {
    slug: "monark",
    name: "Monark",
    year: 2025,
    services: ["Web Development", "Creative Development"],
    techStack: ["Next.js", "Node.js", "GSAP", "Framer Motion"],
    liveSite: "https://monark.gg",
    carbonFootprint: "0.15g CO2/visit",
    images: [
      "/projects/monark/monark-1.png",
      "/projects/monark/monark-2.png",
      "/projects/monark/monark-3.png",
      "/projects/monark/monark-4.png",
      "/projects/monark/monark-5.png",
      "/projects/monark/monark-6.png",
    ],
    description:
      "Monark's company portfolio showcasing their services and past products. Built with a focus on visual impact — powered by fluid animations using GSAP and Framer Motion.",
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
