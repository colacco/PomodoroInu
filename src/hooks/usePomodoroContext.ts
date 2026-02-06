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

    const lastTimeRef = useRef<number>(Date.now());

    // Main countdown effect
    useEffect(() => {
        if (isPaused) {
            clearTimer();
            return;
        }

        if (currentTime <= 0) {
            clearTimer();
            return;
        }

        lastTimeRef.current = Date.now();

        intervalRef.current = setInterval(() => {
            const now = Date.now();
            const delta = now - lastTimeRef.current;

            if (delta >= 1000) {
                const secondsPassed = Math.floor(delta / 1000);
                setCurrentTime((prev) => {
                    const nextTime = prev - secondsPassed;
                    return nextTime < 0 ? 0 : nextTime;
                });
                lastTimeRef.current += secondsPassed * 1000;
            }
        }, 100);

        return () => clearTimer();
    }, [isPaused, clearTimer]);

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