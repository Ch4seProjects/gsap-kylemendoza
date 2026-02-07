import Navigation from "../Navigation";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 min-h-screen relative flex flex-col">
      <div className="absolute inset-0 grid grid-cols-10 gap-x-4 px-6 -z-10">
        {Array.from({ length: 10 }).map((_, i) => {
          return <div className="h-full border-x border-gray-600/10" key={i} />;
        })}
      </div>
      <header>
        <Navigation />
      </header>
      <main className="flex-1 relative">{children}</main>
    </div>
  );
}
