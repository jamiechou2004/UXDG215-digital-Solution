import { motion } from 'motion/react';
import { useState } from 'react';

interface InteractionScreenProps {
  onComplete: () => void;
}

export function InteractionScreen({ onComplete }: InteractionScreenProps) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const actions = [
    {
      id: 'wave',
      icon: '👋',
      label: 'Wave',
      description: 'A friendly, low-pressure greeting',
      message: 'Sarah will see you waved',
    },
    {
      id: 'say-hi',
      icon: '💬',
      label: 'Say hi',
      description: 'Start a gentle conversation',
      message: 'Sarah can reply when ready',
    },
    {
      id: 'save',
      icon: '⭐',
      label: 'Save connection',
      description: 'Connect after you leave the table',
      message: 'You can reach out later',
    },
  ];

  const handleSelect = (actionId: string) => {
    setSelectedAction(actionId);
    setTimeout(() => onComplete(), 1500);
  };

  if (selectedAction) {
    const action = actions.find(a => a.id === selectedAction)!;
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center"
          >
            <span className="text-[48px]">{action.icon}</span>
          </motion.div>

          <h2 className="text-[32px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
            {action.label} sent
          </h2>
          <p className="text-[16px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            {action.message}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 md:px-8 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[36px] leading-[1.1] tracking-[-0.01em] mb-4 md:text-[52px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            How would you
            <br />
            like to connect?
          </h1>
          <p className="text-[16px] leading-relaxed text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose what feels comfortable for you
          </p>
        </motion.div>
      </div>

      {/* Action cards */}
      <div className="flex-1 px-6 pb-32 md:px-8 md:pb-12">
        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
          {actions.map((action, i) => (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              onClick={() => handleSelect(action.id)}
              className="w-full text-left bg-card rounded-3xl p-6 border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] active:scale-98 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-[32px]">{action.icon}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[22px] leading-tight mb-1" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {action.label}
                  </h3>
                  <p className="text-[15px] text-foreground/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {action.description}
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 flex-shrink-0 mt-2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 border border-primary/10 md:max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                No pressure
              </h3>
              <p className="text-[14px] text-foreground/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sarah can respond when they're ready. All interactions are optional and respect social energy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
