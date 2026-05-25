import { motion } from 'motion/react';

interface BackButtonProps {
  onBack: () => void;
  className?: string;
}

export function BackButton({ onBack, className = '' }: BackButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onBack}
      className={`group flex items-center justify-center w-11 h-11 rounded-full bg-card/80 backdrop-blur-md border border-border/50 hover:bg-card hover:border-border transition-all duration-300 active:scale-95 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${className}`}
      aria-label="Go back"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/60 group-hover:text-foreground transition-colors duration-300"
      >
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </motion.button>
  );
}
