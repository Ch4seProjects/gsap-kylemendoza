import ScrambleText from "./ScrambleText";

export default function Navigation() {
  return (
    <div className="grid grid-cols-10 gap-x-4">
      <ScrambleText
        withHover
        text="Kyle Dominic Mendoza"
        className="font-mono text-xs uppercase col-span-6 w-fit"
      />
      <ScrambleText
        withHover
        text="work"
        className="font-mono text-xs uppercase w-fit"
      />
      <ScrambleText
        withHover
        text="info"
        className="font-mono text-xs uppercase w-fit"
      />
      <ScrambleText
        withHover
        text="archives"
        className="font-mono text-xs uppercase w-fit"
      />
    </div>
  );
}
