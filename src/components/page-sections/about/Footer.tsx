import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t } = useTranslation();

    return(
        <footer className=" p-4 flex justify-between bg-highlight">
            <div className="flex items-center gap-2">
                <img src="logo/icon.png" alt="" width={40} />
                <p className="text-lg font-black">Pomodoro Inu</p>
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/colacco" target="_blank">
                    <img src="others/gitHub.png" alt={t("about.footer.altgithub")} width={30}/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-colacco/" target="_blank">
                    <img src="others/linkedIn.png" alt={t("about.footer.altlinkedin")} width={30}/>
                </a>
            </div>
        </footer>
    );
}