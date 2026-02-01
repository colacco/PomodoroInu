import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { formatTime } from "../../../utils/timer";

interface TimerProps {
    currentTime: number;
    currentSession: number;
    isStudying: boolean;
    isPaused: boolean;
    firstStart: boolean;
}

export default function Timer({ currentTime, currentSession, isStudying, isPaused, firstStart }: TimerProps) {
    const { t } = useTranslation();

    const getImage = () => {
        if (firstStart || isPaused) return "pomodoro/wait.png";
        return isStudying ? "pomodoro/study.png" : "pomodoro/break.png";
    };

    const getStatus = () => {
        if (firstStart) return t("home.timer.preparing");
        return isStudying ? t("home.timer.study") : t("home.timer.break");
    };


    return (
        <article className="h-[350px] w-[350px] lg:h-[430px] lg:w-[430px] xl:h-[700px] xl:w-[700px] border-[2px] rounded-full border-white flex flex-col items-center justify-around bg-transparent">
            <div className="flex flex-col items-center">
                <p className="text-2xl">{getStatus()}</p>
                <p className="text-6xl">{formatTime(currentTime)}</p>
            </div>
            <motion.img
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: 1,
                    y: isPaused || firstStart ? 0 : [0, -20, 0],
                }}
                transition={{
                    y: isPaused || firstStart
                        ? { duration: 0.5 }
                        : {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                    opacity: { duration: 0.5 }
                }}
                whileTap={isPaused ? { scale: 0.9 } : {}}
                src={getImage()}
                alt={t("home.timer.alt")}
                className="w-[65%] cursor-pointer"
            />
            <div className="flex gap-2">
                <p className="text-2xl">{t("home.timer.session")}: {currentSession}</p>
            </div>
        </article>
    );
}