import type { Metadata } from "next";
import Link from "next/link";

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
        <h1 className="text-[128px] leading-none">404</h1>
        <p className="text-xl mt-4 uppercase">Page not found</p>
        <Link href="/" className="inline-block mt-6 text-sm uppercase underline underline-offset-4 hover:text-[#9eff00]">
          Go back home
        </Link>
      </div>
    </main>
  );
}
