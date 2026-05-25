import { motion } from 'motion/react';
import { BackButton } from '../BackButton';

interface ProfilePreviewScreenProps {
  onInteract: () => void;
  onBack: () => void;
}

export function ProfilePreviewScreen({ onInteract, onBack }: ProfilePreviewScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top navigation with back button */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <BackButton onBack={onBack} />
        <button className="w-11 h-11 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center border border-border/50 hover:bg-card hover:border-border transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60">
            <circle cx="12" cy="12" r="1" fill="currentColor"/>
            <circle cx="12" cy="5" r="1" fill="currentColor"/>
            <circle cx="12" cy="19" r="1" fill="currentColor"/>
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
          {/* Profile header */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
              <span className="text-[40px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                S
              </span>
            </div>

            <h1 className="text-[36px] leading-tight mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
              Sarah
            </h1>
            <p className="text-[17px] text-foreground/60 italic mb-4" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}>
              Writer seeking quiet company
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[14px] text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                At this table now
              </span>
            </div>
          </div>

          {/* Energy today */}
          <div className="bg-card rounded-3xl p-6 border border-border mb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-[24px]">🌙</span>
              </div>
              <div className="flex-1">
                <div className="text-[12px] uppercase tracking-[0.08em] text-foreground/40 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Energy today
                </div>
                <div className="text-[18px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                  Low-key & focused
                </div>
              </div>
            </div>
            <p className="text-[14px] text-foreground/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Looking for quiet company while working on creative projects
            </p>
          </div>

          {/* Shared interests */}
          <div className="mb-6">
            <h3 className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              Shared interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Poetry', 'Creative writing', 'Reading', 'Journaling', 'Quiet spaces'].map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full text-[14px] border border-primary/20"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Conversation starters */}
          <div className="mb-6">
            <h3 className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              Open to talk about
            </h3>
            <div className="space-y-3">
              {[
                'Writing process & creative blocks',
                'Book recommendations',
                'Finding quiet spaces in the city',
                'Poetry & prose',
              ].map((topic, i) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="bg-card rounded-2xl p-4 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-[14px]">·</span>
                    </div>
                    <p className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {topic}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social comfort level */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 border border-primary/10 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                  Social comfort
                </h3>
                <p className="text-[14px] text-foreground/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Prefers 1-on-1 or small group conversations. Comfortable with silence. Values depth over small talk.
                </p>
              </div>
            </div>
          </div>

          {/* Context */}
          <div className="bg-card rounded-3xl p-6 border border-border">
            <h3 className="text-[16px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
              How we met
            </h3>
            <p className="text-[14px] text-foreground/60 leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              You're both at the "Sunday morning writers" table at The Hideout right now.
            </p>
            <div className="text-[13px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
              Table energy: Quiet Focus
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent"
      >
        <button
          onClick={onInteract}
          className="w-full py-4 bg-primary text-primary-foreground rounded-2xl shadow-[0_4px_24px_rgba(79,107,90,0.25)] active:scale-98 transition-transform duration-200 mb-3"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          Say hello to Sarah
        </button>
        <p className="text-center text-[13px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
          Low-pressure interaction — just a gentle wave
        </p>
      </motion.div>
    </div>
  );
}
