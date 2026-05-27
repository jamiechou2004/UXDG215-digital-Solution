import { motion } from 'motion/react';
import { ImageWithFallback } from '../ImageWithFallback';
import { BackButton } from '../BackButton';

interface TableBrowsingScreenProps {
  onSelectTable: (tableId: number) => void;
  onBack: () => void;
  tableType?: string;
}

export function TableBrowsingScreen({ onSelectTable, onBack, tableType = 'casual-talk' }: TableBrowsingScreenProps) {
  const tables = [
    {
      id: 1,
      name: 'Sunday morning writers',
      host: 'Sarah',
      vibe: 'Quiet Focus',
      description: 'Working on creative projects in comfortable silence',
      interests: ['Writing', 'Poetry', 'Reading'],
      members: 3,
      capacity: 4,
      energy: 'Low',
      time: '2h active',
      image: 'https://images.unsplash.com/photo-1669456920788-215ea17430c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      id: 2,
      name: 'Coffee & tech chat',
      host: 'Marcus',
      vibe: 'Casual Talk',
      description: 'Chatting about design, tech, and side projects',
      interests: ['Design', 'Tech', 'Startups'],
      members: 2,
      capacity: 4,
      energy: 'Medium',
      time: '45m active',
      image: 'https://images.unsplash.com/photo-1760623681430-9224e69d9683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      id: 3,
      name: 'Book recommendations',
      host: 'Aisha',
      vibe: 'Casual Talk',
      description: 'Sharing favorite reads and discovering new books',
      interests: ['Fiction', 'Book clubs', 'Literature'],
      members: 2,
      capacity: 5,
      energy: 'Medium',
      time: '1h 20m active',
      image: 'https://images.unsplash.com/photo-1758445038510-1ed36a6e6edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
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
            Tables
          </p>
          <h1 className="text-[36px] leading-[1.1] tracking-[-0.01em] mb-4 md:text-[52px]" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            Active tables
          </h1>
          <p className="text-[16px] leading-relaxed text-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            {tables.length} conversations happening right now
          </p>
        </motion.div>
      </div>

      {/* Table cards */}
      <div className="px-6 space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 md:px-8 xl:grid-cols-3">
        {tables.map((table, i) => (
          <motion.button
            key={table.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            onClick={() => onSelectTable(table.id)}
            className="w-full text-left bg-card rounded-3xl overflow-hidden border border-border shadow-[0_2px_12px_rgba(0,0,0,0.06)] active:scale-98 transition-all duration-200"
          >
            {/* Image header */}
            <div className="relative h-40 overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1.5 bg-card/95 backdrop-blur-md rounded-full text-[12px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {table.energy} energy
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-[22px] leading-tight mb-1" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {table.name}
                  </h3>
                  <p className="text-[14px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hosted by {table.host}
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-foreground/70 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                {table.description}
              </p>

              {/* Interests */}
              <div className="flex flex-wrap gap-2 mb-4">
                {table.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-muted rounded-full text-[13px] text-foreground/70"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-[14px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    </svg>
                    {table.members}/{table.capacity}
                  </div>
                  <div>·</div>
                  <div>{table.time}</div>
                </div>

                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
