import { Metadata } from "next";
import InfoClient from "./InfoClient";

export const metadata: Metadata = {
  title: "Info",
};

export default function Info() {
  return <InfoClient />;
}
