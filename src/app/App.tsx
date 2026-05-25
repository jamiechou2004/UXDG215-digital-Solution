import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Armchair, Coffee, Compass, Users } from 'lucide-react';
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
    setSelectedTableType(tableType);
    navigateTo('table-browsing');
  };

  const handleJoinedTable = () => {
    setHasJoinedTable(true);
    replaceWith('in-table');
  };

  const handleLeaveTable = () => {
    setHasJoinedTable(false);
    replaceWith('energy-overview');
  };

  const handleTableTab = () => {
    navigateToTab(hasJoinedTable ? 'in-table' : 'table-browsing');
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
        className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4 pb-4 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent"
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

  return (
    <div className="relative mx-auto min-h-screen max-w-md overflow-x-hidden bg-background">
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

      {renderTabBar()}
    </div>
  );
}
