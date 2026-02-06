"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface ScrambleTextProps {
  text: string;
  className?: string;
  withHover?: boolean;
}

export default function ScrambleText({ text, className = "", withHover = false }: ScrambleTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      gsap.to(el, {
        duration: 0.8,
        scrambleText: {
          text: text,
          speed: 1,
          chars: scrambleChars,
          tweenLength: false,
        },
      });
    }
  }, [text]);

  const handleMouseEnter = useCallback(() => {
    const el = ref.current;
    if (el && !gsap.isTweening(el)) {
      gsap.to(el, {
        duration: 0.8,
        scrambleText: {
          text: text,
          speed: 1,
          chars: scrambleChars,
          tweenLength: false,
        },
      });
    }
  }, [text]);

  return (
    <p
      ref={ref}
      className={`${withHover ? "cursor-pointer before:content-['['] after:content-[']'] before:text-[#9eff00] after:text-[#9eff00] before:invisible after:invisible hover:before:visible hover:after:visible" : ""} ${className}`}
      data-text={text}
      onMouseEnter={withHover ? handleMouseEnter : undefined}
    >
      {text}
    </p>
  );
}
