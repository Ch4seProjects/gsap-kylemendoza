export default function GridBackground() {
  return (
    <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-4 px-4 lg:px-6 -z-10">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          className={`h-full border-x border-gray-600/20 ${
            i >= 6 ? "hidden lg:block" : i >= 4 ? "hidden md:block" : ""
          }`}
          key={i}
        />
      ))}
    </div>
  );
}
