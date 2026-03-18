"use client";

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 bg-slate-950 flex items-center justify-center z-50 transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin mb-4 mx-auto"></div>
        <div className="text-slate-400 animate-pulse text-lg">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
}
