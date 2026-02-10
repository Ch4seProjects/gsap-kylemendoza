export interface Project {
  slug: string;
  name: string;
  year: number;
  services: string[];
  liveSite: string;
  carbonFootprint: string;
  images: string[];
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  pubDate: string;
  content: string;
  thumbnail: string;
  link: string;
}
