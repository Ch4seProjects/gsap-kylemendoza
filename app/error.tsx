"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
      <p className="font-mono text-xs uppercase text-gray-600">
        Failed to load projects.
      </p>
      <button
        onClick={reset}
        className="font-mono text-xs uppercase text-[#9eff00] underline"
      >
        Try again
      </button>
    </div>
  );
}
