import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
        <div className="flex flex-col justify-center items-center gap-3">
            <motion.button
                onClick={start}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-[330px] p-3 rounded-2xl font-bold text-3xl  ${isPaused ? "bg-quartenary-color": "bg-highlight" }`}
            >
                {t(getButtonText())}
            </motion.button>
            <motion.button
                onClick={restart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-[330px] p-3 rounded-2xl border-4 border-quartenary-color font-bold text-3xl text-quartenary-color hover:bg-quartenary-color hover:text-white duration-300"
            >
                {t("home.buttons.reset")}
            </motion.button>
        </div>
    );
}