import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

export function TableDiscoveryScreen() {
  const tables = [
    {
      id: 1,
      title: 'Sunday morning writers',
      cafe: 'The Hideout',
      location: 'Hayes Valley',
      time: 'Tomorrow, 9:00 AM',
      seats: '2 of 4 seats available',
      vibe: 'Quiet focus',
      topics: ['Creative writing', 'Poetry', 'Journaling'],
      image: 'https://images.unsplash.com/photo-1578231177134-f1bbe379b054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      energy: 'Low-key',
    },
    {
      id: 2,
      title: 'Tech & coffee conversations',
      cafe: 'Ritual Coffee',
      location: 'Mission District',
      time: 'Today, 4:00 PM',
      seats: '1 of 3 seats available',
      vibe: 'Engaged discussion',
      topics: ['Design systems', 'Web dev', 'Startups'],
      image: 'https://images.unsplash.com/photo-1611323128401-faa8f1b6de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      energy: 'Medium',
    },
    {
      id: 3,
      title: 'Book club: fiction lovers',
      cafe: 'Blue Bottle',
      location: 'Ferry Building',
      time: 'Thursday, 6:30 PM',
      seats: '3 of 6 seats available',
      vibe: 'Deep conversation',
      topics: ['Contemporary fiction', 'Book recommendations'],
      image: 'https://images.unsplash.com/photo-1624583338957-4d155ca886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      energy: 'Medium',
    },
  ];

  return (
    <div className="min-h-screen bg-background px-8 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[14px] uppercase tracking-[0.1em] text-foreground/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Discover
          </p>
          <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            Find your table
          </h1>
          <p className="text-[17px] leading-relaxed text-foreground/60 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join conversations happening at cafés near you. Every table is a chance to connect with people who share your interests.
          </p>
        </motion.div>
      </div>

      {/* Filters - Subtle and premium */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {['All tables', 'Today', 'This week', 'Low energy', 'Medium energy', 'High energy'].map((filter, i) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap text-[14px] transition-all duration-300 ${
                i === 0
                  ? 'bg-primary text-primary-foreground shadow-[0_2px_12px_rgba(79,107,90,0.2)]'
                  : 'bg-card text-foreground/70 hover:bg-muted border border-border'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Table cards - Editorial layout */}
      <div className="max-w-6xl mx-auto space-y-6">
        {tables.map((table, i) => (
          <motion.div
            key={table.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="bg-card rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_24px_64px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image section */}
              <div className="md:w-2/5 relative overflow-hidden h-80 md:h-auto">
                <ImageWithFallback
                  src={table.image}
                  alt={table.cafe}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r" />

                {/* Energy badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-card/90 backdrop-blur-md rounded-full text-[12px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {table.energy}
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="md:w-3/5 p-10">
                <div className="mb-6">
                  <h2 className="text-[36px] leading-tight mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                    {table.title}
                  </h2>
                  <div className="flex items-center gap-2 text-[15px] text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {table.cafe} · {table.location}
                  </div>
                </div>

                {/* Time & seats */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                  <div>
                    <div className="text-[13px] text-foreground/40 mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                      When
                    </div>
                    <div className="text-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {table.time}
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] text-foreground/40 mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Availability
                    </div>
                    <div className="text-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {table.seats}
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <div className="text-[13px] text-foreground/40 mb-3 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Topics
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {table.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-1.5 bg-muted rounded-full text-[14px] text-foreground/70"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full md:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_2px_12px_rgba(79,107,90,0.15)] hover:shadow-[0_4px_20px_rgba(79,107,90,0.25)]">
                  Request to join
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
