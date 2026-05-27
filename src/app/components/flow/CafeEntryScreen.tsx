import { motion } from 'motion/react';
import { ImageWithFallback } from '../ImageWithFallback';

interface CafeEntryScreenProps {
  onContinue: () => void;
}

export function CafeEntryScreen({ onContinue }: CafeEntryScreenProps) {
  const atmosphereTags = ['Welcoming', 'Calm', 'Spacious'];
  const engagementStates = ['Safe', 'Connected', 'Comfortable', 'In Control'];

  return (
    <div className="min-h-screen bg-background flex flex-col md:grid md:grid-cols-[minmax(360px,0.95fr)_minmax(420px,1.05fr)] md:items-stretch">
      {/* Hero image section */}
      <div className="relative h-[45vh] overflow-hidden md:h-screen">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1624583338957-4d155ca886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Café interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

        {/* Floating café info card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10"
        >
          <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h1 className="text-[32px] leading-tight mb-1" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                  The Hideout
                </h1>
                <p className="text-[15px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Hayes Valley · Open until 8pm
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[13px] text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Active
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pb-4">
              {atmosphereTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-[12px] text-primary/80"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 border-t border-border/70 pt-4 text-[14px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                12 people here
              </div>
              <div>·</div>
              <div>5 active tables</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content section */}
      <div className="flex-1 px-6 pt-8 pb-32 md:flex md:items-center md:px-12 md:pb-40 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-[28px] leading-tight mb-4 md:text-[44px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
            Welcome to
            <br />
            a social space
          </h2>
          <p className="text-[17px] leading-relaxed text-foreground/70 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            You've entered a café where people gather at shared tables. Join conversations, meet new people, or simply enjoy the atmosphere.
          </p>

          <div className="mb-8 rounded-3xl border border-border/60 bg-card/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 rounded-full border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-accent/10">
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/70" />
                {engagementStates.map((state, index) => {
                  const positions = [
                    'left-1/2 top-2 -translate-x-1/2',
                    'right-2 top-1/2 -translate-y-1/2',
                    'bottom-2 left-1/2 -translate-x-1/2',
                    'left-2 top-1/2 -translate-y-1/2',
                  ];

                  return (
                    <div
                      key={state}
                      className={`absolute h-2.5 w-2.5 rounded-full border border-card ${
                        index === 0 ? 'bg-primary/70' : index === 1 ? 'bg-[#D9A08B]' : index === 2 ? 'bg-[#AFC7D8]' : 'bg-secondary/80'
                      } ${positions[index]}`}
                      aria-label={state}
                    />
                  );
                })}
              </div>
              <div className="min-w-0">
                <p className="mb-2 text-[13px] uppercase tracking-[0.08em] text-foreground/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Cafe engagement
                </p>
                <div className="flex flex-wrap gap-2">
                  {engagementStates.map((state) => (
                    <span
                      key={state}
                      className="rounded-full bg-muted/70 px-3 py-1 text-[12px] text-foreground/65"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current vibe indicators */}
          <div className="space-y-3 mb-12 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
            <div className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Current atmosphere
            </div>

            {[
              { label: 'Quiet focus', count: 2, color: 'bg-primary/10 text-primary' },
              { label: 'Casual conversation', count: 3, color: 'bg-accent/10 text-accent' },
            ].map((vibe, i) => (
              <motion.div
                key={vibe.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${vibe.color} flex items-center justify-center text-[18px]`}>
                    {vibe.count}
                  </div>
                  <span className="text-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {vibe.label}
                  </span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </motion.div>
            ))}
          </div>

          {/* QR scan prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-2xl flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3 className="text-[22px] mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
              Scanned successfully
            </h3>
            <p className="text-[15px] text-foreground/60 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              You're all set to explore tables and join conversations
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent md:left-auto md:right-[max(2rem,calc((100vw-72rem)/2+2rem))] md:bottom-8 md:w-[420px] md:p-0 md:bg-transparent"
      >
        <button
          onClick={onContinue}
          className="w-full py-4 bg-primary text-primary-foreground rounded-2xl shadow-[0_4px_24px_rgba(79,107,90,0.25)] active:scale-98 transition-transform duration-200"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          Explore tables
        </button>
      </motion.div>
    </div>
  );
}
