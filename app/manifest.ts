import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kyle Dominic Mendoza — Portfolio",
    short_name: "Kyle Mendoza",
    description:
      "Portfolio of Kyle Dominic Mendoza — Front-End Developer specializing in interactive, animation-driven web experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#9eff00",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
