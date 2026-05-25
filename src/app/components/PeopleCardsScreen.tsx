import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

export function PeopleCardsScreen() {
  const people = [
    {
      id: 1,
      name: 'Sarah Chen',
      tagline: 'Designer exploring mindful tech',
      interests: ['Design systems', 'Journaling', 'Film photography'],
      recentActivity: 'Joined 3 tables this month',
      socialEnergy: 'Medium',
      image: 'https://images.unsplash.com/photo-1669456920788-215ea17430c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      mutualConnections: 2,
    },
    {
      id: 2,
      name: 'Marcus Rivera',
      tagline: 'Writer seeking quiet conversation',
      interests: ['Poetry', 'Architecture', 'Coffee culture'],
      recentActivity: 'Regular at The Hideout',
      socialEnergy: 'Low-key',
      image: 'https://images.unsplash.com/photo-1760623681430-9224e69d9683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      mutualConnections: 0,
    },
    {
      id: 3,
      name: 'Aisha Patel',
      tagline: 'Community builder & book lover',
      interests: ['Fiction', 'Community organizing', 'Urban gardening'],
      recentActivity: 'Hosts Sunday book club',
      socialEnergy: 'Medium',
      image: 'https://images.unsplash.com/photo-1758445038510-1ed36a6e6edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      mutualConnections: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-background px-8 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[14px] uppercase tracking-[0.1em] text-foreground/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Community
          </p>
          <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            People you might
            <br />
            connect with
          </h1>
          <p className="text-[17px] leading-relaxed text-foreground/60 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            These are people who share your interests and respect the same values around meaningful connection.
          </p>
        </motion.div>
      </div>

      {/* People cards - Premium editorial style */}
      <div className="max-w-5xl mx-auto space-y-8">
        {people.map((person, i) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            className="bg-card rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_24px_64px_rgba(0,0,0,0.12)] transition-all duration-500 group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image section - Large, premium */}
              <div className="md:w-2/5 relative">
                <div className="aspect-[4/5] md:aspect-auto md:h-full relative overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-[56px]" style={{ fontFamily: 'Cormorant, serif' }}>
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mutual connections badge */}
                {person.mutualConnections > 0 && (
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 bg-card/95 backdrop-blur-md rounded-full text-[12px] tracking-wide flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      {person.mutualConnections} mutual
                    </div>
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="md:w-3/5 p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h2 className="text-[36px] leading-tight mb-2" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                      {person.name}
                    </h2>
                    <p className="text-[18px] text-foreground/60 italic" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}>
                      {person.tagline}
                    </p>
                  </div>

                  {/* Interests */}
                  <div className="mb-6">
                    <div className="text-[13px] text-foreground/40 mb-3 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Interests
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {person.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-4 py-1.5 bg-muted rounded-full text-[14px] text-foreground/70"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activity & Energy */}
                  <div className="flex items-center gap-6 pb-6 mb-6 border-b border-border">
                    <div>
                      <div className="text-[13px] text-foreground/40 mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Activity
                      </div>
                      <div className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {person.recentActivity}
                      </div>
                    </div>
                    <div>
                      <div className="text-[13px] text-foreground/40 mb-1 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Energy
                      </div>
                      <div className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {person.socialEnergy}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions - Subtle and low-pressure */}
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_2px_12px_rgba(79,107,90,0.15)] hover:shadow-[0_4px_20px_rgba(79,107,90,0.25)]">
                    Say hello
                  </button>
                  <button className="px-6 py-3.5 border border-border rounded-xl hover:bg-muted transition-all duration-300 text-foreground/70">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty state message - calm and encouraging */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-5xl mx-auto mt-16"
      >
        <div className="bg-card rounded-3xl p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.08)]">
          <div className="text-[48px] mb-4">☕</div>
          <h3 className="text-[28px] mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
            Take your time
          </h3>
          <p className="text-[17px] text-foreground/60 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            There's no rush to connect. Browse at your own pace, and when someone feels right, reach out.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
