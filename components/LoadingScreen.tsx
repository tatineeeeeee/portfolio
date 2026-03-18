"use client";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50"
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin mb-4 mx-auto"></div>
            <div className="text-slate-400 animate-pulse text-lg">
              Loading Portfolio...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
