import { motion } from 'motion/react';
import { useState } from 'react';

export function SocialEnergyScreen() {
  const [energyLevel, setEnergyLevel] = useState(65);

  return (
    <div className="min-h-screen bg-background px-8 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[14px] uppercase tracking-[0.1em] text-foreground/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Today's Energy
          </p>
          <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            How are you
            <br />
            feeling today?
          </h1>
        </motion.div>
      </div>

      {/* Energy visualization - Large premium card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="bg-card rounded-3xl p-12 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.08)] relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[32px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Social Battery
              </h2>
              <div className="text-[56px] leading-none" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}>
                {energyLevel}%
              </div>
            </div>

            {/* Energy bar */}
            <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-6">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${energyLevel}%` }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Energy labels */}
            <div className="flex justify-between text-[14px] text-foreground/50 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>Recharging</span>
              <span>Ready to connect</span>
            </div>

            {/* Insight */}
            <div className="pt-8 border-t border-border">
              <p className="text-[17px] leading-relaxed text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                You're in a good space for small group conversations. Consider joining a quiet café table or a focused interest group.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick energy check-in options */}
      <div className="max-w-4xl mx-auto">
        <p className="text-[14px] uppercase tracking-[0.1em] text-foreground/40 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          Adjust your energy
        </p>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Need space', value: 20, emoji: '🌙' },
            { label: 'Calm & present', value: 50, emoji: '🍃' },
            { label: 'Energized', value: 85, emoji: '✨' },
          ].map((option, i) => (
            <motion.button
              key={option.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              onClick={() => setEnergyLevel(option.value)}
              className="bg-card rounded-2xl p-8 text-left hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="text-[32px] mb-3">{option.emoji}</div>
              <div className="text-[18px] mb-1" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                {option.label}
              </div>
              <div className="text-[14px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                {option.value}% energy
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Weekly pattern insights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="bg-card rounded-3xl p-12 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.08)]">
          <h3 className="text-[28px] mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
            Your patterns
          </h3>

          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
              const height = [45, 60, 40, 70, 55, 85, 75][i];
              return (
                <div key={day} className="flex items-center gap-4">
                  <div className="w-12 text-[14px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {day}
                  </div>
                  <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary/70 to-accent/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                    />
                  </div>
                  <div className="w-12 text-right text-[14px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {height}%
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[15px] text-foreground/60 mt-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            You tend to have more energy on weekends. Consider scheduling meaningful connections during these peak times.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
