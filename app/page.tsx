import Home from "./components/layout/Home";
import Navigation from "./components/Navigation";
import PhTime from "./components/PhTime";
import ScrambleText from "./components/ScrambleText";

export default function Page() {
  return (
    <Home>
      <Navigation />
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-[80%]">
        <div className="grid grid-cols-10 gap-x-4 items-end px-4">
          <div className="font-sans text-[128px] uppercase col-span-6">
            <ScrambleText text="Kyle Dominic" />
            <ScrambleText text="Mendoza" />
          </div>
          <div className="font-mono text-xs uppercase col-span-2">
            <ScrambleText text="Software" />
            <ScrambleText text="Engineer" />
          </div>
          <div className="font-mono text-xs uppercase">
            <ScrambleText text="Manila, Ph" />
            <PhTime />
          </div>
        </div>
      </div>
    </Home>
  );
}
