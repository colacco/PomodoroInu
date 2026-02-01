import Timer from "../components/page-sections/home/Timer";
import Buttons from "../components/page-sections/home/Buttons";
import Settings from "../components/page-sections/home/Settings";
import Overlay from "../components/layout/Overlay";
import Header from "../components/layout/Header";
import { useState } from "react";
import { useTimer } from '../hooks/usePomodoroContext';
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
    <main className={`h-screen flex flex-col justify-around items-center ${isStudying ? "" : "bg-secondary-color"}`}>
      <Overlay 
        active={overlay} 
        closeOverlay={() => setOverlay(false)} 
      />
      <Header 
        overlay={overlay} 
        settings={activeSettings} 
        clickHamburguer={() => setOverlay(true)} 
        clickNut={() => setActiveSettings(true)} 
      />
      <Settings
        settings={activeSettings}
        closeSettings={() => setActiveSettings(false)}
        timerSettings={settings}
        onSettingsChange={handleInputChange}
      />
      <Timer
        currentTime={currentTime}
        currentSession={currentSession}
        isStudying={isStudying}
        isPaused={isPaused}
        firstStart={firstStart}
      />
      <Buttons
        start={handleStart}
        restart={handleRestart}
        isPaused={isPaused}
        firstStart={firstStart}
      />
    </main>
  );
}