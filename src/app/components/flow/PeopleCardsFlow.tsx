import { motion } from 'motion/react';
import { BackButton } from '../BackButton';

interface PeopleCardsFlowProps {
  onSelectPerson: (personId: number) => void;
  onBack: () => void;
}

export function PeopleCardsFlow({ onSelectPerson, onBack }: PeopleCardsFlowProps) {
  const people = [
    {
      id: 1,
      name: 'Sarah',
      tagline: 'Writer seeking quiet company',
      interests: ['Poetry', 'Creative writing', 'Reading'],
      todayEnergy: 'Low-key',
      conversationTopics: ['Writing process', 'Book recommendations', 'Creative blocks'],
      initial: 'S',
    },
    {
      id: 2,
      name: 'Marcus',
      tagline: 'Designer & coffee enthusiast',
      interests: ['Design systems', 'Tech', 'Startups'],
      todayEnergy: 'Medium',
      conversationTopics: ['Design thinking', 'Side projects', 'Café culture'],
      initial: 'M',
    },
    {
      id: 3,
      name: 'Aisha',
      tagline: 'Book lover & community builder',
      interests: ['Fiction', 'Book clubs', 'Literature'],
      todayEnergy: 'Medium',
      conversationTopics: ['Favorite reads', 'Community building', 'Storytelling'],
      initial: 'A',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Top navigation with back button */}
      <div className="px-6 pt-6">
        <BackButton onBack={onBack} />
      </div>

      {/* Header */}
      <div className="px-6 pt-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] uppercase tracking-[0.08em] text-foreground/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            At this table
          </p>
          <h1 className="text-[36px] leading-[1.1] tracking-[-0.01em] mb-4" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            People you're
            <br />
            sitting with
          </h1>
          <p className="text-[16px] leading-relaxed text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Lightweight profiles to help you connect naturally
          </p>
        </motion.div>
      </div>

      {/* People cards stack */}
      <div className="px-6 space-y-4">
        {people.map((person, i) => (
          <motion.button
            key={person.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            onClick={() => onSelectPerson(person.id)}
            className="w-full text-left bg-card rounded-3xl overflow-hidden border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] active:scale-98 transition-all duration-200"
          >
            {/* Header with avatar */}
            <div className="p-6 pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {person.initial}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[24px] leading-tight mb-1" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {person.name}
                  </h3>
                  <p className="text-[15px] text-foreground/60 italic" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}>
                    {person.tagline}
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 flex-shrink-0 mt-3">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>

              {/* Today's energy */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[13px] text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {person.todayEnergy} energy today
                </span>
              </div>

              {/* Interests */}
              <div className="mb-4">
                <div className="text-[12px] uppercase tracking-[0.08em] text-foreground/40 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Interests
                </div>
                <div className="flex flex-wrap gap-2">
                  {person.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-muted rounded-full text-[13px] text-foreground/70"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conversation topics */}
              <div>
                <div className="text-[12px] uppercase tracking-[0.08em] text-foreground/40 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Open to talk about
                </div>
                <div className="space-y-1.5">
                  {person.conversationTopics.slice(0, 2).map((topic) => (
                    <div
                      key={topic}
                      className="text-[14px] text-foreground/70 flex items-center gap-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="text-primary">·</span>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer hint */}
            <div className="px-6 py-3 bg-muted/30 border-t border-border">
              <p className="text-[13px] text-foreground/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tap to see full profile
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Privacy note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-6 mt-8"
      >
        <div className="bg-card rounded-2xl p-6 border border-border text-center">
          <p className="text-[14px] text-foreground/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Profiles are only visible to people at your table.
            <br />
            Leave when you want — connections are optional.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
