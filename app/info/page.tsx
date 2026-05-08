import { Metadata } from "next";
import InfoClient from "./InfoClient";

export const metadata: Metadata = {
  title: "Info",
  description:
    "Learn about Kyle Dominic Mendoza — his background, skills in React.js and TypeScript, and his journey as a Front-End Developer.",
};

export default function Info() {
  return <InfoClient />;
}
