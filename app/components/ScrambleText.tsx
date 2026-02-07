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
  as?: "p" | "span";
}

export default function ScrambleText({ text, className = "", withHover = false, href, scrambleOn, as: Tag = "p" }: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isActive = href ? pathname === href : false;

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

  useEffect(() => {
    if (scrambleOn) {
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
    }
  }, [scrambleOn, text]);

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

  const sharedProps = {
    ref: ref as React.RefObject<any>,
    className: `${withHover ? `cursor-pointer before:content-['['] after:content-[']'] before:text-[#9eff00] after:text-[#9eff00] ${isActive ? "before:visible after:visible" : "before:invisible after:invisible"} hover:before:visible hover:after:visible` : ""} ${className}`,
    "data-text": text,
    onMouseEnter: withHover ? handleMouseEnter : undefined,
  };

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {text}
      </Link>
    );
  }

  return (
    <Tag {...sharedProps}>
      {text}
    </Tag>
  );
}
