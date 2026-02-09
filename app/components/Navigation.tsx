import ScrambleText from "./ScrambleText";

export default function Navigation() {
  return (
    <nav aria-label="Main navigation" className="grid grid-cols-10 gap-x-4">
      <ScrambleText
        withHover
        text="Kyle Dominic Mendoza"
        className="font-mono text-xs uppercase col-span-6 w-fit"
      />
      <ScrambleText
        withHover
        href="/"
        text="work"
        className="font-mono text-xs uppercase w-fit"
      />
      <ScrambleText
        withHover
        href="/info"
        text="info"
        className="font-mono text-xs uppercase w-fit"
      />
      {/* <ScrambleText
        withHover
        href="/archives"
        text="archives"
        className="font-mono text-xs uppercase w-fit"
      /> */}
    </nav>
  );
}
