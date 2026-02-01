import { useState } from "react";
import { useTimer } from '../hooks/usePomodoroContext';
import Timer from "../components/page-sections/home/Timer";
import Buttons from "../components/page-sections/home/Buttons";
import Settings from "../components/page-sections/home/Settings";
import Overlay from "../components/_shared/Overlay";
import HomeHeader from "../components/page-sections/home/HomeHeader";
import TopHeader from "../components/_shared/TopHeader";
import Language from "../components/_shared/Language";
import type TimerSettings from '../types/pomodoroType';

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [activeSettings, setActiveSettings] = useState(false);

  const [settings, setSettings] = useState<TimerSettings>({
    sMin: 25,
    sSec: 0,
    bMin: 5,
    bSec: 0,
    sessions: 4,
  });

  const {
    currentTime,
    currentSession,
    isStudying,
    isPaused,
    firstStart,
    handleStart,
    handleRestart,
  } = useTimer(settings);

  const handleInputChange = (field: keyof TimerSettings, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [field]: parseInt(value) || 0,
    }));
  };

  return (
    <main className={`h-screen flex flex-col items-center ${isStudying ? "" : "bg-secondary-color"}`}>
      <div className="w-screen pt-3 mb-10 hidden lg:grid lg:grid-cols-[1fr_2fr_1fr]">
        <div></div>
        <TopHeader className="lg:flex lg:justify-around lg:items-center lg:font-bold" />
        <Language className="hidden lg:pr-10 lg:flex lg:justify-end"/>
      </div>
      
      <Overlay
        active={overlay}
        closeOverlay={() => setOverlay(false)}
      />
      <HomeHeader
        overlay={overlay}
        settings={activeSettings}
        clickHamburguer={() => setOverlay(true)}
        clickNut={() => setActiveSettings(true)}
      />
      <div className="h-full flex flex-col justify-around lg:flex lg:flex-row-reverse lg:items-center lg:gap-12 xl:gap-20">
        <Timer
          currentTime={currentTime}
          currentSession={currentSession}
          isStudying={isStudying}
          isPaused={isPaused}
          firstStart={firstStart}
        />
        {/* Em lg+: Settings fica acima dos Buttons, ambos à esquerda do Timer */}
        <div className="flex flex-col gap-6">
          <Settings
            settings={activeSettings}
            closeSettings={() => setActiveSettings(false)}
            timerSettings={settings}
            onSettingsChange={handleInputChange}
          />
          <Buttons
            start={handleStart}
            restart={handleRestart}
            isPaused={isPaused}
            firstStart={firstStart}
          />
        </div>
      </div>
    </main>
  );
}