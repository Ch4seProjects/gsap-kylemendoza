import Navigation from "../Navigation";
import GridBackground from "./GridBackground";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 lg:p-6 h-screen relative flex flex-col">
      <GridBackground />
      <header>
        <Navigation />
      </header>
      <main className="flex-1 min-h-0 relative flex">{children}</main>
    </div>
  );
}
