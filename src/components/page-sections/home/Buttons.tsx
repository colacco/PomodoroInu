import { useTranslation } from "react-i18next";


interface ButtonsProps {
    start: () => void;
    restart: () => void;
    firstStart: boolean;
    isPaused: boolean;
}

export default function Buttons({ start, restart, firstStart, isPaused  }: ButtonsProps) {
    const { t } = useTranslation();

    const getButtonText = () => {
        if (firstStart) return t("home.buttons.start");
        return isPaused ? t("home.buttons.continue") : t("home.buttons.pause");
    };

    return (
        <div className="flex flex-col gap-3">
            <button
                onClick={start}
                className={`w-[350px] p-4 rounded-2xl font-bold text-3xl  ${isPaused ? "bg-quartenary-color": "bg-highlight" }`}
            >
                {t(getButtonText())}
            </button>
            <button
                onClick={restart}
                className="w-[350px] p-4 rounded-2xl border-4 border-quartenary-color font-bold text-3xl text-quartenary-color"
            >
                {t("home.buttons.reset")}
            </button>
        </div>
    );
}