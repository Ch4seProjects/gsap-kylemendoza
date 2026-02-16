import type { Metadata } from "next";
import ScrambleText from "@/app/components/ScrambleText";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="p-6 min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 grid grid-cols-10 gap-x-4 px-6 -z-10">
        {Array.from({ length: 10 }).map((_, i) => {
          return <div className="h-full border-x border-gray-600/10" key={i} />;
        })}
      </div>
      <div className="font-sans text-center">
        <h1 className="text-[256px] font-sans leading-none">404</h1>
        <p className="text-xl my-4 font-mono uppercase">Page not found</p>
        <ScrambleText
          withHover
          href="/"
          text="Go back home"
          className="mt-6 text-sm font-mono uppercase w-fit mx-auto"
        />
      </div>
    </main>
  );
}
