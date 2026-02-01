import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer(){
    const { t } = useTranslation();

    return(
        <footer className=" p-2 flex justify-between bg-highlight">
            <Link to="/" className="flex items-center gap-2">
                <img src="logo/icon.png" alt="" width={25} />
                <p className="text-lg font-black">Pomodoro Inu</p>
            </Link>
            <div className="flex gap-4">
                <a href="https://github.com/colacco" target="_blank">
                    <img src="others/gitHub.png" alt={t("about.footer.altgithub")} width={25}/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-colacco/" target="_blank">
                    <img src="others/linkedIn.png" alt={t("about.footer.altlinkedin")} width={25}/>
                </a>
            </div>
        </footer>
    );
}