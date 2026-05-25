import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CafeEntryScreen } from './components/flow/CafeEntryScreen';
import { SocialEnergyOverview } from './components/flow/SocialEnergyOverview';
import { TableBrowsingScreen } from './components/flow/TableBrowsingScreen';
import { TablePreviewScreen } from './components/flow/TablePreviewScreen';
import { JoinTableScreen } from './components/flow/JoinTableScreen';
import { InTableScreen } from './components/flow/InTableScreen';
import { PeopleCardsFlow } from './components/flow/PeopleCardsFlow';
import { ProfilePreviewScreen } from './components/flow/ProfilePreviewScreen';
import { InteractionScreen } from './components/flow/InteractionScreen';
import { PastEncountersScreen } from './components/flow/PastEncountersScreen';

type Screen =
  | 'cafe-entry'
  | 'energy-overview'
  | 'table-browsing'
  | 'table-preview'
  | 'join-table'
  | 'in-table'
  | 'people-cards'
  | 'profile-preview'
  | 'interaction'
  | 'past-encounters';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('cafe-entry');
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>(['cafe-entry']);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const dragConstraintsRef = useRef(null);

  const navigateTo = (screen: Screen) => {
    setNavigationHistory([...navigationHistory, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop();
      const previousScreen = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setCurrentScreen(previousScreen);
    }
  };

  const canGoBack = navigationHistory.length > 1;

  const renderScreen = () => {
    switch (currentScreen) {
      case 'cafe-entry':
        return <CafeEntryScreen onContinue={() => navigateTo('energy-overview')} />;

      case 'energy-overview':
        return <SocialEnergyOverview onSelectTable={() => navigateTo('table-browsing')} onBack={canGoBack ? goBack : undefined} />;

      case 'table-browsing':
        return <TableBrowsingScreen onSelectTable={() => navigateTo('table-preview')} onBack={goBack} />;

      case 'table-preview':
        return (
          <TablePreviewScreen
            onJoinTable={() => navigateTo('join-table')}
            onBack={goBack}
          />
        );

      case 'join-table':
        return <JoinTableScreen onJoined={() => navigateTo('in-table')} />;

      case 'in-table':
        return (
          <InTableScreen
            onViewPerson={() => navigateTo('people-cards')}
            onLeaveTable={() => navigateTo('energy-overview')}
            onBack={canGoBack ? goBack : undefined}
          />
        );

      case 'people-cards':
        return <PeopleCardsFlow onSelectPerson={() => navigateTo('profile-preview')} onBack={goBack} />;

      case 'profile-preview':
        return (
          <ProfilePreviewScreen
            onInteract={() => navigateTo('interaction')}
            onBack={goBack}
          />
        );

      case 'interaction':
        return <InteractionScreen onComplete={() => navigateTo('in-table')} />;

      case 'past-encounters':
        return <PastEncountersScreen onSelectPerson={() => navigateTo('profile-preview')} onBack={goBack} />;

      default:
        return <CafeEntryScreen onContinue={() => navigateTo('energy-overview')} />;
    }
  };

  return (
    <div ref={dragConstraintsRef} className="min-h-screen bg-background overflow-x-hidden max-w-md mx-auto relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Draggable floating ball navigation */}
      {currentScreen !== 'join-table' && (
        <motion.div
          drag
          dragConstraints={dragConstraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: ballPosition.x, y: ballPosition.y, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="fixed bottom-24 right-6 z-50"
          style={{ touchAction: 'none' }}
        >
          {/* Trigger button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full bg-card/95 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-border/60 flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors duration-300 hover:bg-card hover:border-border"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60">
              <circle cx="12" cy="12" r="1" fill="currentColor"/>
              <circle cx="12" cy="5" r="1" fill="currentColor"/>
              <circle cx="12" cy="19" r="1" fill="currentColor"/>
            </svg>
          </motion.button>

          {/* Floating menu panel */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-14 right-0 w-40"
              >
                <div className="bg-card/98 backdrop-blur-2xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-border/60 overflow-hidden">
                  {/* Header */}
                  <div className="px-4 pt-3 pb-2 border-b border-border/40">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.08em] text-foreground/40" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                        Navigate
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(false);
                        }}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-muted transition-all duration-200"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="py-2">
                    <button
                      onClick={() => {
                        navigateTo('cafe-entry');
                        setIsExpanded(false);
                      }}
                      className="group w-full px-4 py-2.5 flex items-center gap-3 transition-all duration-200 hover:bg-muted/50 relative"
                    >
                      {currentScreen === 'cafe-entry' && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className={`text-[14px] transition-colors duration-200 ${
                        currentScreen === 'cafe-entry'
                          ? 'text-foreground'
                          : 'text-foreground/60 group-hover:text-foreground'
                      }`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: currentScreen === 'cafe-entry' ? 500 : 400 }}>
                        Entry
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        navigateTo('in-table');
                        setIsExpanded(false);
                      }}
                      className="group w-full px-4 py-2.5 flex items-center gap-3 transition-all duration-200 hover:bg-muted/50 relative"
                    >
                      {currentScreen === 'in-table' && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className={`text-[14px] transition-colors duration-200 ${
                        currentScreen === 'in-table'
                          ? 'text-foreground'
                          : 'text-foreground/60 group-hover:text-foreground'
                      }`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: currentScreen === 'in-table' ? 500 : 400 }}>
                        In Table
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        navigateTo('past-encounters');
                        setIsExpanded(false);
                      }}
                      className="group w-full px-4 py-2.5 flex items-center gap-3 transition-all duration-200 hover:bg-muted/50 relative"
                    >
                      {currentScreen === 'past-encounters' && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1 bottom-1 w-0.5 bg-primary rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className={`text-[14px] transition-colors duration-200 ${
                        currentScreen === 'past-encounters'
                          ? 'text-foreground'
                          : 'text-foreground/60 group-hover:text-foreground'
                      }`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: currentScreen === 'past-encounters' ? 500 : 400 }}>
                        Encounters
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}