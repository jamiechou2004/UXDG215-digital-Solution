import { motion } from 'motion/react';

interface NavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'onboarding', label: 'Welcome', icon: '✨' },
    { id: 'energy', label: 'Energy', icon: '🌱' },
    { id: 'tables', label: 'Tables', icon: '☕' },
    { id: 'people', label: 'People', icon: '👋' },
    { id: 'cafes', label: 'Cafés', icon: '🏛️' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] border border-border/50 px-4 py-3">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-[18px]">{item.icon}</span>
                  <span className={isActive ? 'block' : 'hidden md:block'}>
                    {item.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
