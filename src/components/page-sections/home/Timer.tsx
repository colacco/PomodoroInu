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
        <article className="h-[350px] w-[350px] border-[2px] rounded-full border-white flex flex-col items-center justify-around bg-transparent">
            <div className="flex flex-col items-center">
                <p className="text-2xl">{getStatus()}</p>
                <p className="text-6xl">{formatTime(currentTime)}</p>
            </div>
            <img src={getImage()} alt="" className="w-[65%]" />
            <div className="flex gap-2">
                <p className="text-2xl">{t("home.timer.session")}: {currentSession}</p>
            </div>
        </article>
    );
}