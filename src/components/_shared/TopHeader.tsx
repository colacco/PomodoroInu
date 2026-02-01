import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TopHeader({className}: {className: string}){
    const { t } = useTranslation();
    
    return(
        <ul className={`w-full hidden xl:text-xl ${className}`}>
            <Link to="/">
                Pomodoro
            </Link>
            <Link to="/about">
                {t("home.overlay.about")}
            </Link>
            <a href="https://github.com/colacco/PomodoroInu" target="_blank">
                GitHub
            </a>
        </ul>
    );
}