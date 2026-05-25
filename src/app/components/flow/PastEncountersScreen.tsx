import { motion } from 'motion/react';
import { BackButton } from '../BackButton';

interface PastEncountersScreenProps {
  onSelectPerson: (personId: number) => void;
  onBack: () => void;
}

export function PastEncountersScreen({ onSelectPerson, onBack }: PastEncountersScreenProps) {
  const encounters = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      connection: 'Connected',
      when: 'Today at The Hideout',
      table: 'Sunday morning writers',
      sharedTopics: ['Writing', 'Poetry'],
      lastInteraction: 'You waved · 2h ago',
    },
    {
      id: 2,
      name: 'Marcus',
      initial: 'M',
      connection: 'Met',
      when: 'Yesterday at Ritual Coffee',
      table: 'Tech & coffee chat',
      sharedTopics: ['Design', 'Tech'],
      lastInteraction: 'Shared a table · 1 day ago',
    },
    {
      id: 3,
      name: 'Aisha',
      initial: 'A',
      connection: 'Connected',
      when: 'Last week at Blue Bottle',
      table: 'Book club',
      sharedTopics: ['Fiction', 'Books'],
      lastInteraction: 'You said hi · 5 days ago',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-12">
      {/* Top navigation with back button */}
      <div className="px-6 pt-6 md:px-8 md:pt-10">
        <BackButton onBack={onBack} />
      </div>

      {/* Header */}
      <div className="px-6 pt-6 pb-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Your connections
          </p>
          <h1 className="text-[36px] leading-[1.1] tracking-[-0.01em] mb-4 md:text-[52px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            People you've
            <br />
            met at cafés
          </h1>
          <p className="text-[16px] leading-relaxed text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            {encounters.length} connections from shared tables
          </p>
        </motion.div>
      </div>

      {/* Timeline of encounters */}
      <div className="px-6 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 md:px-8">
        {/* Today section */}
        <div>
          <div className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3 px-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Today
          </div>
          {encounters.slice(0, 1).map((person, i) => (
            <motion.button
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => onSelectPerson(person.id)}
              className="w-full text-left bg-card rounded-3xl p-6 border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] active:scale-98 transition-all duration-200 mb-4"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[20px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {person.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[20px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                      {person.name}
                    </h3>
                    {person.connection === 'Connected' && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-[14px] text-foreground/60 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {person.when}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-[12px] text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                      {person.table}
                    </span>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 flex-shrink-0 mt-1">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-[13px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex gap-2">
                    {person.sharedTopics.map(topic => (
                      <span key={topic} className="px-2 py-1 bg-muted rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <span>{person.lastInteraction}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* This week section */}
        <div>
          <div className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3 px-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            This week
          </div>
          {encounters.slice(1).map((person, i) => (
            <motion.button
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onClick={() => onSelectPerson(person.id)}
              className="w-full text-left bg-card rounded-3xl p-6 border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] active:scale-98 transition-all duration-200 mb-4"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[20px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {person.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[20px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                      {person.name}
                    </h3>
                  </div>
                  <p className="text-[14px] text-foreground/60 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {person.when}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
                    <span className="text-[12px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                      {person.table}
                    </span>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 flex-shrink-0 mt-1">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-[13px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex gap-2">
                    {person.sharedTopics.map(topic => (
                      <span key={topic} className="px-2 py-1 bg-muted rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <span>{person.lastInteraction}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-6 mt-8 md:max-w-2xl md:px-8"
      >
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Your connections are private
              </h3>
              <p className="text-[14px] text-foreground/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Only you can see who you've met. Reconnect when it feels right, or simply cherish the moment you shared.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
