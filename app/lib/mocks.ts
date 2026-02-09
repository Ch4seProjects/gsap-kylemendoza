import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "flavor-studios",
    name: "Flavor Studios",
    year: 2025,
    services: ["Web Development", "UI/UX Design", "Branding"],
    liveSite: "https://flavorstudios.co",
    carbonFootprint: "0.12g CO2/visit",
    images: [
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    ],
    description:
      "A creative studio platform built with modern web technologies. Features smooth page transitions, dynamic content loading, and an immersive visual experience.",
  },
  {
    slug: "solara-energy",
    name: "Solara Energy",
    year: 2025,
    services: ["Web Development", "Motion Design"],
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
