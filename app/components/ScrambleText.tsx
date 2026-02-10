"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface ScrambleTextProps {
  text: string;
  className?: string;
  withHover?: boolean;
  href?: string;
  scrambleOn?: boolean;
  activeHighlight?: boolean;
  as?: "p" | "span";
}

export default function ScrambleText({
  text,
  className = "",
  withHover = false,
  href,
  scrambleOn,
  activeHighlight = true,
  as: Tag = "p",
}: ScrambleTextProps) {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pathname = usePathname();
  const isActive = activeHighlight && href ? pathname === href : false;
  const words = text.split(" ");

  const scramble = useCallback(() => {
    text.split(" ").forEach((word, i) => {
      const el = wordRefs.current[i];
      if (el) {
        // Lock width to the target word's natural size to prevent jitter
        el.style.width = "auto";
        el.textContent = word;
        const width = el.getBoundingClientRect().width;
        el.style.width = `${width}px`;

        gsap.to(el, {
          duration: 0.8,
          scrambleText: {
            text: word,
            speed: 1,
            chars: scrambleChars,
            tweenLength: false,
          },
          onComplete: () => {
            el.style.width = "";
          },
        });
      }
    });
  }, [text]);

  // Scramble on mount and when text changes
  useEffect(() => {
    scramble();
  }, [scramble]);

  // Scramble when explicitly triggered (e.g. hover on project card)
  useEffect(() => {
    if (scrambleOn) scramble();
  }, [scrambleOn, scramble]);

  const handleMouseEnter = useCallback(() => {
    const isTweening = wordRefs.current.some((el) => el && gsap.isTweening(el));
    if (!isTweening) scramble();
  }, [scramble]);

  const hoverClass = withHover
    ? `cursor-pointer before:content-['['] after:content-[']'] before:text-[#9eff00] after:text-[#9eff00] ${isActive ? "before:visible after:visible" : "before:invisible after:invisible"} hover:before:visible hover:after:visible`
    : "";

  const wordElements = words.map((word, i) => (
    <span key={i}>
      <span
        ref={(el) => {
          wordRefs.current[i] = el;
        }}
        className="inline-block"
      >
        {word}
      </span>
      {i < words.length - 1 && " "}
    </span>
  ));

  const props = {
    className: `${hoverClass} ${className}`,
    "data-text": text,
    onMouseEnter: withHover ? handleMouseEnter : undefined,
  };

  if (href) {
    return (
      <Link href={href} {...props}>
        {wordElements}
      </Link>
    );
  }

  return <Tag {...props}>{wordElements}</Tag>;
}
