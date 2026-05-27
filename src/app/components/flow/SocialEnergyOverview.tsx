import { motion } from 'motion/react';
import { BackButton } from '../BackButton';

interface SocialEnergyOverviewProps {
  onSelectTable: (tableType: string) => void;
  onBack?: () => void;
}

export function SocialEnergyOverview({ onSelectTable, onBack }: SocialEnergyOverviewProps) {
  const tableTypes = [
    {
      id: 'quiet-focus',
      title: 'Quiet Focus',
      description: 'Deep work, reading, solo presence',
      icon: '🌙',
      energy: 'Low',
      activeTables: 2,
      color: 'from-primary/10 to-primary/5',
      borderColor: 'border-primary/20',
    },
    {
      id: 'casual-talk',
      title: 'Casual Coffee Talk',
      description: 'Light conversation, friendly vibes',
      icon: '☕',
      energy: 'Medium',
      activeTables: 3,
      color: 'from-accent/10 to-accent/5',
      borderColor: 'border-accent/20',
    },
    {
      id: 'creative',
      title: 'Creative Table',
      description: 'Design, writing, making together',
      icon: '✨',
      energy: 'Medium',
      activeTables: 1,
      color: 'from-secondary/10 to-secondary/5',
      borderColor: 'border-secondary/20',
    },
    {
      id: 'board-games',
      title: 'Board Games',
      description: 'Play, laugh, friendly competition',
      icon: '🎲',
      energy: 'High',
      activeTables: 1,
      color: 'from-accent/15 to-accent/8',
      borderColor: 'border-accent/25',
    },
    {
      id: 'language',
      title: 'Language Exchange',
      description: 'Practice languages, cultural share',
      icon: '🗣️',
      energy: 'Medium',
      activeTables: 2,
      color: 'from-primary/12 to-primary/6',
      borderColor: 'border-primary/22',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-12">
      {/* Top navigation with back button */}
      {onBack && (
        <div className="px-6 pt-6">
          <BackButton onBack={onBack} />
        </div>
      )}

      {/* Header */}
      <div className="px-6 pt-6 pb-6 md:px-8 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            The Hideout
          </p>
          <h1 className="text-[36px] leading-[1.1] tracking-[-0.01em] mb-4 md:text-[52px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            Choose your
            <br />
            energy
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every table has its own vibe. Find one that matches how you're feeling.
          </p>
        </motion.div>
      </div>

      {/* Table type cards */}
      <div className="px-6 space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 md:px-8 xl:grid-cols-3">
        {tableTypes.map((table, i) => (
          <motion.button
            key={table.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            onClick={() => onSelectTable(table.id)}
            className={`w-full text-left bg-gradient-to-br ${table.color} border ${table.borderColor} rounded-3xl p-6 active:scale-98 transition-all duration-200`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="text-[40px] leading-none">{table.icon}</div>
                <div className="pt-1">
                  <h3 className="text-[24px] leading-tight mb-1" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {table.title}
                  </h3>
                  <p className="text-[15px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {table.description}
                  </p>
                </div>
              </div>

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 flex-shrink-0 mt-2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>

            <div className="flex items-center gap-4 text-[14px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {table.energy} energy
              </div>
              <div>·</div>
              <div>{table.activeTables} active {table.activeTables === 1 ? 'table' : 'tables'}</div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Your energy card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mx-6 mt-8 md:mx-8 md:max-w-xl"
      >
        <div className="bg-card rounded-3xl p-6 border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your energy today
              </p>
              <div className="text-[24px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Medium
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
              <span className="text-[24px]">🍃</span>
            </div>
          </div>
          <p className="text-[14px] text-foreground/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Perfect for casual conversation or creative collaboration
          </p>
        </div>
      </motion.div>
    </div>
  );
}
