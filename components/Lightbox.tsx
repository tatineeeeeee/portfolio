"use client";
import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/70 dark:bg-black/90 flex items-center justify-center p-4 cursor-pointer"
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
          >
            <Image
              src={image}
              alt="Project preview"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
          <p className="absolute bottom-4 text-white/60 text-sm">
            Click anywhere or press Escape to close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
