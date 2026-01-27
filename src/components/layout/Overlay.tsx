import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type OverlayProps = {
    active: boolean,
    closeOverlay: () => void
};

export default function Overlay({ active, closeOverlay }: OverlayProps){
    const { t } = useTranslation();
    
    if(!active) return null;

    return(
        <div className="fixed h-screen w-screen flex flex-col bg-[rgba(0,0,0,0.5)]">
            <p onClick={closeOverlay} className="pl-5 pt-3 text-3xl font-close font-bold">X</p>
            <div className=" h-full flex flex-col items-center justify-center gap-10 text-3xl font-bold">
                <button onClick={closeOverlay}>
                Pomodoro
            </button>
            <Link to="/about">
                {t("header.overlay.about")}
            </Link>
            <a href="https://github.com/colacco/PomodoroInu" target="_blank" className="mt-20">
                <img src="./others/gitHub.png" alt="" />
            </a>
            </div>
            
        </div>
    )
}