import { ImageWithFallback } from './ImageWithFallback';
import { motion } from 'motion/react';

export function OnboardingScreen() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Full bleed editorial style */}
      <div className="relative h-screen flex flex-col">
        {/* Large hero image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1624583338957-4d155ca886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Warm café interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-end h-full px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="text-[56px] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 400 }}>
              A quieter way
              <br />
              to connect
            </h1>
            <p className="text-[18px] leading-relaxed text-foreground/70 mb-12 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join café tables. Share genuine moments. Let conversation happen naturally.
            </p>

            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_2px_16px_rgba(79,107,90,0.15)] hover:shadow-[0_4px_24px_rgba(79,107,90,0.25)] backdrop-blur-sm">
              Begin your journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Value propositions - Apple-style cards */}
      <div className="px-8 py-24 space-y-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[28px] leading-tight mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                No performance required
              </h3>
              <p className="text-[17px] leading-relaxed text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                This isn't about curated profiles or perfect photos. It's about showing up as you are, when the energy feels right.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-2xl p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[28px] leading-tight mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Respect your rhythm
              </h3>
              <p className="text-[17px] leading-relaxed text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Track your social energy. Join tables when you're ready. Step back when you need space. You're always in control.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[28px] leading-tight mb-3" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                Find your people
              </h3>
              <p className="text-[17px] leading-relaxed text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Discover communities that share your interests. Join tables where conversation flows naturally. Build connections that matter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
