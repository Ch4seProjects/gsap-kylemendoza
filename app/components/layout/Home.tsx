export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 min-h-screen relative">
      <div className="absolute inset-0 grid grid-cols-10 gap-x-4 px-6">
        {Array.from({ length: 10 }).map((_, i) => {
          return <div className="h-full border-x border-gray-600/10" key={i} />;
        })}
      </div>
      {children}
    </div>
  );
}
