import { useState, useEffect, useRef, useCallback } from "react";
import { convertToSecond } from "../utils/timer";
import type TimerSettings from "../types/pomodoroType";

export const useTimer = (settings: TimerSettings) => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentSession, setCurrentSession] = useState<number>(0);
    const [isStudying, setIsStudying] = useState<boolean>(true);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [firstStart, setFirstStart] = useState<boolean>(true);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const clearTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startStudy = useCallback(() => {
        setIsStudying(true);
        setCurrentTime(convertToSecond(settings.sMin, settings.sSec));
    }, [settings.sMin, settings.sSec]);

    const startBreak = useCallback(() => {
        setIsStudying(false);
        setCurrentTime(convertToSecond(settings.bMin, settings.bSec));
    }, [settings.bMin, settings.bSec]);

    const initializeTimer = useCallback(() => {
        setCurrentTime(convertToSecond(settings.sMin, settings.sSec));
        setCurrentSession(0);
        setIsStudying(true);
    }, [settings.sMin, settings.sSec]);

    // Main countdown effect
    useEffect(() => {
        if (isPaused || currentTime <= 0) {
            clearTimer();
            return;
        }

        intervalRef.current = setInterval(() => {
            setCurrentTime((prev) => prev - 1);
        }, 1000);

        return () => clearTimer();
    }, [isPaused, currentTime, clearTimer]);

    // Transition effect
    useEffect(() => {
        if (currentTime === 0 && !firstStart && !isPaused) {
            if (isStudying) {
                const nextSession = currentSession + 1;
                setCurrentSession(nextSession);

                if (nextSession < settings.sessions) {
                    startBreak();
                } else {
                    clearTimer();
                    setIsPaused(true);
                    setFirstStart(true);
                    setCurrentSession(0);
                }
            } else {
                startStudy();
            }
        }
    }, [
        currentTime,
        isStudying,
        currentSession,
        settings.sessions,
        firstStart,
        isPaused,
        startBreak,
        startStudy,
        clearTimer,
    ]);

    const handleStart = () => {
        if (firstStart) {
            setFirstStart(false);
            setIsPaused(false);
            initializeTimer();
        } else {
            setIsPaused((prev) => !prev);
        }
    };

    const handleRestart = () => {
        if (!firstStart) {
            setIsPaused(true);
            initializeTimer();
        }
    };

    return {
        currentTime,
        currentSession,
        isStudying,
        isPaused,
        firstStart,
        handleStart,
        handleRestart,
        setCurrentTime,
    };
};