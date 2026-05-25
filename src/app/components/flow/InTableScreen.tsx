import { motion } from 'motion/react';
import { useState } from 'react';
import { BackButton } from '../BackButton';

interface InTableScreenProps {
  onViewPerson: (personId: number) => void;
  onLeaveTable: () => void;
  onBack?: () => void;
}

export function InTableScreen({ onViewPerson, onLeaveTable, onBack }: InTableScreenProps) {
  const [showPrompts, setShowPrompts] = useState(true);

  const members = [
    { id: 1, name: 'Sarah', initial: 'S', status: 'Deep in writing', energy: 'Focused' },
    { id: 2, name: 'Marcus', initial: 'M', status: 'Reading poetry', energy: 'Calm' },
    { id: 3, name: 'Aisha', initial: 'A', status: 'Journaling', energy: 'Reflective' },
    { id: 4, name: 'You', initial: 'Y', status: 'Just joined', energy: 'Settling in' },
  ];

  const prompts = [
    'What brings you here today?',
    'Working on anything interesting?',
    'Favorite thing to write about?',
  ];

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-12">
      {/* Top navigation with back button */}
      {onBack && (
        <div className="px-6 pt-6 md:px-8 md:pt-10">
          <BackButton onBack={onBack} />
        </div>
      )}

      {/* Header - Minimal, unobtrusive */}
      <div className="px-6 pt-6 pb-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[13px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                At table · 2h 15m
              </span>
            </div>
            <button
              onClick={onLeaveTable}
              className="text-[14px] text-foreground/60 hover:text-foreground transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Leave quietly
            </button>
          </div>

          <h1 className="text-[32px] leading-tight mb-2 md:text-[52px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            Sunday morning
            <br />
            writers
          </h1>
          <p className="text-[15px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            Quiet focus · 4 people at table
          </p>
        </motion.div>
      </div>

      {/* Members grid */}
      <div className="px-6 mb-8 md:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {members.map((member, i) => (
            <motion.button
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              onClick={() => member.name !== 'You' && onViewPerson(member.id)}
              className="bg-card rounded-2xl p-4 border border-border text-left active:scale-95 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[18px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {member.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[16px] mb-0.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                    {member.name}
                  </div>
                  <div className="text-[12px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {member.energy}
                  </div>
                </div>
              </div>
              <div className="text-[13px] text-foreground/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {member.status}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Conversation prompts */}
      {showPrompts && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="px-6 mb-8 md:px-8"
        >
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 border border-primary/10">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-[18px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Conversation starters
              </h3>
              <button
                onClick={() => setShowPrompts(false)}
                className="text-foreground/40 hover:text-foreground/60"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-2">
              {prompts.map((prompt, i) => (
                <motion.button
                  key={prompt}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  className="w-full text-left bg-card/50 rounded-xl p-3 text-[14px] hover:bg-card transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {prompt}
                </motion.button>
              ))}
            </div>

            <p className="text-[13px] text-foreground/50 mt-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Optional — only share when it feels natural
            </p>
          </div>
        </motion.div>
      )}

      {/* Shared interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-6 mb-8 md:px-8"
      >
        <h3 className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
          Shared interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Creative writing', 'Poetry', 'Journaling', 'Literature', 'Quiet spaces'].map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 bg-card rounded-full text-[14px] border border-border"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Table vibe indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="px-6 md:px-8"
      >
        <div className="bg-card rounded-3xl p-6 border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[24px]">🌙</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Current vibe
              </h3>
              <p className="text-[15px] text-foreground/70 leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Everyone's focused on their work. Feel free to share your presence without words.
              </p>
              <div className="text-[13px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                Table energy: Quiet & contemplative
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Easy exit reminder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-6 mt-8 md:px-8"
      >
        <div className="text-center">
          <p className="text-[14px] text-foreground/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Take all the time you need. When you're ready to go,
            <br />
            just tap "Leave quietly" above
          </p>
        </div>
      </motion.div>
    </div>
  );
}
