import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TopHeader({className}: {className: string}){
    const { t } = useTranslation();
    
    return(
        <ul className={`w-full hidden xl:text-xl ${className}`}>
            <Link to="/" className="hover:text-red-600 duration-500">
                Pomodoro
            </Link>
            <Link to="/about" className="hover:text-red-600 duration-500">
                {t("home.overlay.about")}
            </Link>
            <a href="https://github.com/colacco/PomodoroInu" target="_blank" className="hover:text-red-600 duration-500">
                GitHub
            </a>
        </ul>
    );
}