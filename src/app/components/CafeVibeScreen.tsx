import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';
import { useState } from 'react';

export function CafeVibeScreen() {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);

  const cafes = [
    {
      id: 1,
      name: 'The Hideout',
      neighborhood: 'Hayes Valley',
      vibe: 'Quiet sanctuary',
      atmosphere: 'Soft natural light, library-quiet corners, perfect for deep work or gentle conversation',
      currentEnergy: 'Low',
      capacity: '60% full',
      image: 'https://images.unsplash.com/photo-1611323128401-faa8f1b6de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Natural light', 'Quiet zones', 'Single-origin pour-over'],
      activeTables: 2,
    },
    {
      id: 2,
      name: 'Ritual Coffee',
      neighborhood: 'Mission District',
      vibe: 'Buzzing creativity',
      atmosphere: 'Energetic conversations, natural materials, community-focused design',
      currentEnergy: 'Medium-High',
      capacity: '85% full',
      image: 'https://images.unsplash.com/photo-1578231177134-f1bbe379b054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Community tables', 'Creative crowd', 'Espresso bar'],
      activeTables: 5,
    },
    {
      id: 3,
      name: 'Blue Bottle',
      neighborhood: 'Ferry Building',
      vibe: 'Elevated calm',
      atmosphere: 'Minimalist design, waterfront views, sophisticated and serene',
      currentEnergy: 'Medium',
      capacity: '40% full',
      image: 'https://images.unsplash.com/photo-1624583338957-4d155ca886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Waterfront seating', 'Minimal aesthetic', 'Premium beans'],
      activeTables: 3,
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
            Explore
          </p>
          <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            Choose your
            <br />
            atmosphere
          </h1>
          <p className="text-[17px] leading-relaxed text-foreground/60 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every café has its own energy. Find the space that matches how you're feeling today.
          </p>
        </motion.div>
      </div>

      {/* Vibe filters */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { label: 'All vibes', value: null },
            { label: 'Quiet focus', value: 'quiet' },
            { label: 'Gentle buzz', value: 'medium' },
            { label: 'Lively energy', value: 'high' },
          ].map((vibe, i) => (
            <motion.button
              key={vibe.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              onClick={() => setSelectedVibe(vibe.value)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap text-[14px] transition-all duration-300 ${
                selectedVibe === vibe.value
                  ? 'bg-primary text-primary-foreground shadow-[0_2px_12px_rgba(79,107,90,0.2)]'
                  : 'bg-card text-foreground/70 hover:bg-muted border border-border'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {vibe.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Café cards - Hero image style */}
      <div className="max-w-6xl mx-auto space-y-6">
        {cafes.map((cafe, i) => (
          <motion.div
            key={cafe.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="bg-card rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_24px_64px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer group"
          >
            {/* Hero image section */}
            <div className="relative h-96 overflow-hidden">
              <ImageWithFallback
                src={cafe.image}
                alt={cafe.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

              {/* Content overlay on image */}
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="text-card mb-2">
                  <div className="text-[14px] uppercase tracking-[0.12em] opacity-70 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {cafe.neighborhood}
                  </div>
                  <h2 className="text-[48px] leading-tight mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
                    {cafe.name}
                  </h2>
                  <p className="text-[20px] italic opacity-90 mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300 }}>
                    {cafe.vibe}
                  </p>
                </div>

                {/* Quick stats */}
                <div className="flex items-center gap-6 text-card/80 text-[14px] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      cafe.currentEnergy === 'Low' ? 'bg-green-400' :
                      cafe.currentEnergy === 'Medium' ? 'bg-yellow-400' : 'bg-orange-400'
                    }`} />
                    {cafe.currentEnergy} energy
                  </div>
                  <div>•</div>
                  <div>{cafe.capacity}</div>
                  <div>•</div>
                  <div>{cafe.activeTables} active {cafe.activeTables === 1 ? 'table' : 'tables'}</div>
                </div>
              </div>
            </div>

            {/* Details section */}
            <div className="p-10">
              <p className="text-[17px] leading-relaxed text-foreground/70 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                {cafe.atmosphere}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {cafe.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-1.5 bg-muted rounded-full text-[14px] text-foreground/70"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_2px_12px_rgba(79,107,90,0.15)] hover:shadow-[0_4px_20px_rgba(79,107,90,0.25)]">
                  View tables
                </button>
                <button className="px-6 py-3.5 border border-border rounded-xl hover:bg-muted transition-all duration-300 text-foreground/70 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Hours
                </button>
                <button className="px-6 py-3.5 border border-border rounded-xl hover:bg-muted transition-all duration-300 text-foreground/70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom encouragement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-6xl mx-auto mt-16"
      >
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 text-center">
          <h3 className="text-[32px] mb-4" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
            Can't decide?
          </h3>
          <p className="text-[17px] text-foreground/60 leading-relaxed max-w-md mx-auto mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let us suggest a café based on your current energy level and the vibe you're seeking.
          </p>
          <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_2px_12px_rgba(79,107,90,0.15)]">
            Get a suggestion
          </button>
        </div>
      </motion.div>
    </div>
  );
}
