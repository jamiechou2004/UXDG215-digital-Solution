import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Armchair, Coffee, Compass, Info, Users } from 'lucide-react';
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

type TabId = 'explore' | 'tables' | 'table' | 'encounters';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('cafe-entry');
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>(['cafe-entry']);
  const [selectedTableType, setSelectedTableType] = useState('casual-talk');
  const [hasJoinedTable, setHasJoinedTable] = useState(false);
  const [showTableHint, setShowTableHint] = useState(false);

  const canGoBack = navigationHistory.length > 1;
  const rootScreens: Screen[] = ['energy-overview', 'table-browsing', 'in-table', 'people-cards', 'past-encounters'];
  const showTabBar = rootScreens.includes(currentScreen);

  const navigateTo = (screen: Screen) => {
    setNavigationHistory((history) => [...history, screen]);
    setCurrentScreen(screen);
  };

  const replaceWith = (screen: Screen) => {
    setNavigationHistory([screen]);
    setCurrentScreen(screen);
  };

  const navigateToTab = (screen: Screen) => {
    setNavigationHistory([screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (navigationHistory.length <= 1) {
      return;
    }

    const nextHistory = navigationHistory.slice(0, -1);
    setNavigationHistory(nextHistory);
    setCurrentScreen(nextHistory[nextHistory.length - 1]);
  };

  const getActiveTab = (): TabId => {
    if (currentScreen === 'table-browsing') {
      return 'tables';
    }

    if (currentScreen === 'in-table' || currentScreen === 'people-cards') {
      return 'table';
    }

    if (currentScreen === 'past-encounters') {
      return 'encounters';
    }

    return 'explore';
  };

  const handleSelectEnergy = (tableType: string) => {
    setShowTableHint(false);
    setSelectedTableType(tableType);
    navigateTo('table-browsing');
  };

  const handleJoinedTable = () => {
    setShowTableHint(false);
    setHasJoinedTable(true);
    replaceWith('in-table');
  };

  const handleLeaveTable = () => {
    setShowTableHint(false);
    setHasJoinedTable(false);
    replaceWith('energy-overview');
  };

  const handleTableTab = () => {
    if (hasJoinedTable) {
      setShowTableHint(false);
      navigateToTab('in-table');
      return;
    }

    setShowTableHint(true);
    navigateToTab('table-browsing');
  };

  const tabItems = [
    { id: 'explore' as const, label: 'Explore', icon: Compass, action: () => navigateToTab('energy-overview') },
    { id: 'tables' as const, label: 'Tables', icon: Coffee, action: () => navigateToTab('table-browsing') },
    { id: 'table' as const, label: 'My Table', icon: Armchair, action: handleTableTab },
    { id: 'encounters' as const, label: 'People', icon: Users, action: () => navigateToTab('past-encounters') },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'cafe-entry':
        return <CafeEntryScreen onContinue={() => replaceWith('energy-overview')} />;

      case 'energy-overview':
        return <SocialEnergyOverview onSelectTable={handleSelectEnergy} onBack={canGoBack ? goBack : undefined} />;

      case 'table-browsing':
        return (
          <TableBrowsingScreen
            onSelectTable={() => navigateTo('table-preview')}
            onBack={canGoBack ? goBack : () => navigateToTab('energy-overview')}
            tableType={selectedTableType}
          />
        );

      case 'table-preview':
        return <TablePreviewScreen onJoinTable={() => navigateTo('join-table')} onBack={goBack} />;

      case 'join-table':
        return <JoinTableScreen onJoined={handleJoinedTable} />;

      case 'in-table':
        return (
          <InTableScreen
            onViewPerson={() => navigateTo('people-cards')}
            onLeaveTable={handleLeaveTable}
            onBack={canGoBack ? goBack : undefined}
          />
        );

      case 'people-cards':
        return <PeopleCardsFlow onSelectPerson={() => navigateTo('profile-preview')} onBack={() => navigateToTab('in-table')} />;

      case 'profile-preview':
        return <ProfilePreviewScreen onInteract={() => navigateTo('interaction')} onBack={goBack} />;

      case 'interaction':
        return <InteractionScreen onComplete={() => replaceWith('in-table')} />;

      case 'past-encounters':
        return <PastEncountersScreen onSelectPerson={() => navigateTo('profile-preview')} onBack={() => navigateToTab('energy-overview')} />;

      default:
        return <CafeEntryScreen onContinue={() => replaceWith('energy-overview')} />;
    }
  };

  const renderTabBar = () => {
    if (!showTabBar) {
      return null;
    }

    const activeTab = getActiveTab();

    return (
      <motion.nav
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4 pb-4 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent md:hidden"
        aria-label="Primary"
      >
        <div className="grid grid-cols-4 rounded-[28px] border border-border/70 bg-card/92 p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
          {tabItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className="relative flex h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-[22px] text-[11px] transition-all duration-200 active:scale-95"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: isActive ? 600 : 500 }}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="primaryTab"
                    className="absolute inset-0 rounded-[22px] bg-primary/10"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.55 }}
                  />
                )}
                <Icon
                  size={19}
                  strokeWidth={1.8}
                  className={`relative ${isActive ? 'text-primary' : 'text-foreground/45'}`}
                />
                <span className={`relative truncate ${isActive ? 'text-primary' : 'text-foreground/50'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    );
  };

  const renderDesktopNav = () => {
    if (!showTabBar) {
      return null;
    }

    const activeTab = getActiveTab();

    return (
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 hidden border-b border-border/60 bg-background/86 px-8 py-3 backdrop-blur-2xl md:block"
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button
            type="button"
            onClick={() => navigateToTab('energy-overview')}
            className="text-left"
          >
            <div className="text-[18px] leading-none" style={{ fontFamily: 'Cormorant, serif', fontWeight: 600 }}>
              The Hideout
            </div>
            <div className="mt-1 text-[12px] text-foreground/45" style={{ fontFamily: 'Inter, sans-serif' }}>
              Social table companion
            </div>
          </button>

          <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/90 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            {tabItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  className="relative flex h-10 items-center gap-2 rounded-full px-4 text-[13px] transition-all duration-200 active:scale-95"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: isActive ? 600 : 500 }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktopPrimaryTab"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.55 }}
                    />
                  )}
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className={`relative ${isActive ? 'text-primary' : 'text-foreground/45'}`}
                  />
                  <span className={`relative ${isActive ? 'text-primary' : 'text-foreground/55'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    );
  };

  const renderTableHint = () => {
    if (!showTableHint || hasJoinedTable) {
      return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-24 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 md:bottom-auto md:left-auto md:right-8 md:top-24 md:w-96 md:translate-x-0"
        role="status"
        aria-live="polite"
      >
        <div className="rounded-3xl border border-primary/20 bg-card/96 p-4 shadow-[0_16px_44px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Info size={19} strokeWidth={1.8} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-[15px] text-foreground" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Join a table first
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-foreground/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pick an active table and request to join. Your table will appear here after you're seated.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowTableHint(false);
                    navigateToTab('table-browsing');
                  }}
                  className="rounded-full bg-primary px-4 py-2 text-[13px] text-primary-foreground transition-transform duration-200 active:scale-95"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Browse tables
                </button>
                <button
                  type="button"
                  onClick={() => setShowTableHint(false)}
                  className="rounded-full px-4 py-2 text-[13px] text-foreground/55 transition-colors duration-200 hover:bg-muted hover:text-foreground"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {renderDesktopNav()}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          className="mx-auto w-full max-w-md md:max-w-6xl md:pt-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {renderTabBar()}
      <AnimatePresence>
        {renderTableHint()}
      </AnimatePresence>
    </div>
  );
}
