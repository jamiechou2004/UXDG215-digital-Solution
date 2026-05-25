import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface JoinTableScreenProps {
  onJoined: () => void;
}

export function JoinTableScreen({ onJoined }: JoinTableScreenProps) {
  const [step, setStep] = useState<'scanning' | 'requesting' | 'approved'>('scanning');

  useEffect(() => {
    if (step === 'scanning') {
      setTimeout(() => setStep('requesting'), 1500);
    } else if (step === 'requesting') {
      setTimeout(() => setStep('approved'), 2000);
    } else if (step === 'approved') {
      setTimeout(() => onJoined(), 1500);
    }
  }, [step, onJoined]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        {step === 'scanning' && (
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-2 rounded-full border-4 border-primary/30 animate-pulse" />
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </motion.div>

            <h2 className="text-[32px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
              Scanning table
            </h2>
            <p className="text-[16px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hold your phone near the NFC tag
            </p>
          </div>
        )}

        {step === 'requesting' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M21 12a9 9 0 11-6.219-8.56"/>
                </svg>
              </motion.div>
            </div>

            <h2 className="text-[32px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
              Requesting to join
            </h2>
            <p className="text-[16px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              Sarah will approve your request
            </p>
          </motion.div>
        )}

        {step === 'approved' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </motion.div>

            <h2 className="text-[32px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
              Welcome!
            </h2>
            <p className="text-[16px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              You've joined the table
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
