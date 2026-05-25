import { motion } from 'motion/react';
import { BackButton } from '../BackButton';

interface TablePreviewScreenProps {
  onJoinTable: () => void;
  onBack: () => void;
}

export function TablePreviewScreen({ onJoinTable, onBack }: TablePreviewScreenProps) {
  const members = [
    { name: 'Sarah', initial: 'S', interests: ['Writing', 'Poetry'], energy: 'Low-key' },
    { name: 'Marcus', initial: 'M', interests: ['Reading', 'Philosophy'], energy: 'Calm' },
    { name: 'Aisha', initial: 'A', interests: ['Journaling', 'Art'], energy: 'Reflective' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top navigation with back button */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <BackButton onBack={onBack} />
        <button className="w-11 h-11 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center border border-border/50 hover:bg-card hover:border-border transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Table header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1.5 bg-primary/10 rounded-full text-[13px] text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Quiet Focus
              </div>
              <div className="px-3 py-1.5 bg-card rounded-full text-[13px] text-foreground/60 border border-border" style={{ fontFamily: 'Inter, sans-serif' }}>
                2h active
              </div>
            </div>

            <h1 className="text-[40px] leading-[1.1] tracking-[-0.01em] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
              Sunday morning
              <br />
              writers
            </h1>

            <p className="text-[17px] leading-relaxed text-foreground/70 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Working on creative projects in comfortable silence. Occasional sharing of ideas welcome.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 text-[15px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                </svg>
                3 of 4 seats
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Low energy
              </div>
            </div>
          </div>

          {/* Conversation prompts */}
          <div className="mb-8">
            <h3 className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Conversation topics
            </h3>
            <div className="space-y-3">
              {['What are you working on?', 'Favorite writing spot?', 'Current creative block?'].map((prompt, i) => (
                <motion.div
                  key={prompt}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="bg-card rounded-2xl p-4 border border-border"
                >
                  <p className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {prompt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Members at table */}
          <div className="mb-8">
            <h3 className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              At this table
            </h3>
            <div className="space-y-3">
              {members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-card rounded-2xl p-4 border border-border flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[18px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                      {member.initial}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[17px] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                      {member.name}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.interests.map((interest) => (
                        <span
                          key={interest}
                          className="text-[13px] text-foreground/60"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[13px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {member.energy}
                  </div>
                </motion.div>
              ))}

              {/* Empty seat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 border border-dashed border-primary/30 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-card border-2 border-dashed border-primary/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[15px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    One seat available
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Table guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-card rounded-3xl p-6 border border-border"
          >
            <h3 className="text-[18px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
              Table guidelines
            </h3>
            <ul className="space-y-2 text-[15px] text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                <span>Respect the quiet atmosphere</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                <span>Share if inspired, silence is welcome</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                <span>Leave when you're ready, no pressure</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent"
      >
        <button
          onClick={onJoinTable}
          className="w-full py-4 bg-primary text-primary-foreground rounded-2xl shadow-[0_4px_24px_rgba(79,107,90,0.25)] active:scale-98 transition-transform duration-200"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          Request to join table
        </button>
        <p className="text-center text-[13px] text-foreground/50 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
          Hosted by Sarah · Tap to send a gentle request
        </p>
      </motion.div>
    </div>
  );
}
