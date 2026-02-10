"use client";

import { useState } from "react";
import Image from "next/image";
import ScrambleText from "../components/ScrambleText";
import Container from "../components/layout/Container";
import { bio, contacts } from "@/app/lib/constants";

export default function info() {
  return (
    <Container>
      <div className="flex-1 w-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-10">
        <div className="col-span-4 flex flex-col justify-between gap-6 lg:gap-0 pt-20 lg:pt-8 lg:pb-30">
          <ScrambleText
            text="INFO"
            className="font-sans text-5xl lg:text-[120px] font-medium"
          />
          <div className="flex flex-col gap-6">
            {bio.map((text, i) => (
              <p
                key={i}
                className="font-sans text-xl lg:text-2xl font-normal lg:font-medium"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="relative col-span-4 col-start-7 pt-8 lg:pb-30 flex flex-col lg:pl-4">
          <div className="relative w-[65%] lg:w-[98%] h-70 lg:h-1/2 ml-auto lg:ml-0">
            <Image
              src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80"
              alt="Kyle Dominic Mendoza"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-auto hidden lg:grid grid-cols-2 gap-6">
            <EmailContact />
            <ProfileLink
              label={contacts[1].label}
              value={contacts[1].value}
              href="https://www.linkedin.com/in/kyleemendoza/"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function EmailContact() {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = contacts[0].value;

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayText = copied
    ? "EMAIL COPIED"
    : hovered
      ? "COPY EMAIL ADDRESS"
      : email;

  return (
    <div
      className="flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCopied(false);
      }}
      onClick={handleClick}
    >
      <p className="font-sans text-lg font-medium">{contacts[0].label}</p>
      <ScrambleText
        text={displayText}
        className="font-mono text-[11px] uppercase text-gray-400"
      />
    </div>
  );
}

function ProfileLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="font-sans text-lg font-medium">{label}</p>
      <ScrambleText
        text={hovered ? "VISIT PROFILE" : value}
        className="font-mono text-[11px] uppercase text-gray-400"
      />
    </a>
  );
}
