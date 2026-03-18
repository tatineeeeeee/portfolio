"use client";
import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light transition-colors z-10"
        onClick={onClose}
        aria-label="Close preview"
        type="button"
      >
        &times;
      </button>
      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        <Image
          src={image}
          alt="Project preview"
          fill
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <p className="absolute bottom-4 text-white/60 text-sm">
        Click anywhere or press Escape to close
      </p>
    </div>
  );
}
