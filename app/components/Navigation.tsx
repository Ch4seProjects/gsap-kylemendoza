import ScrambleText from "./ScrambleText";

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="grid grid-cols-10 gap-x-4 pb-4 lg:pb-0"
    >
      <ScrambleText
        withHover
        href="/"
        activeHighlight={false}
        text="Kyle Dominic Mendoza"
        className="font-mono text-[11px] lg:text-xs uppercase col-span-6 w-fit"
      />
      <ScrambleText
        withHover
        activeHighlight={false}
        text="Software Developer"
        className="font-mono text-[11px] text-white/50 lg:text-xs uppercase col-span-6 w-fit lg:hidden"
      />
      <ScrambleText
        withHover
        href="/"
        text="work"
        className="font-mono text-xs uppercase w-fit hidden lg:block"
      />
      <ScrambleText
        withHover
        href="/info"
        text="info"
        className="font-mono text-xs uppercase w-fit hidden lg:block"
      />
      <ScrambleText
        withHover
        href="/blogs"
        text="blogs"
        className="font-mono text-xs uppercase w-fit hidden lg:block"
      />
      <ScrambleText
        withHover
        href="/contact"
        text="contact"
        className="font-mono text-xs uppercase w-fit hidden lg:block"
      />
    </nav>
  );
}
