import Navigation from "../Navigation";
import GridBackground from "./GridBackground";
import ScrambleText from "../ScrambleText";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 lg:p-6 h-screen relative flex flex-col">
      <GridBackground />
      <header>
        <Navigation />
      </header>
      <main className="flex-1 min-h-0 relative flex">{children}</main>
      <div className="lg:hidden w-full absolute bottom-0 left-0 flex justify-around items-center p-4 border-t border-gray-600/10 bg-background">
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
        <ScrambleText
          withHover
          href="/blogs"
          text="blogs"
          className="font-mono text-xs uppercase w-fit"
        />
        <ScrambleText
          withHover
          href="/contact"
          text="contact"
          className="font-mono text-xs uppercase w-fit"
        />
      </div>
    </div>
  );
}
