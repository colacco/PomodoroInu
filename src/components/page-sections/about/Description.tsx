import { useTranslation } from "react-i18next";

export default function Description(){
    const { t } = useTranslation();

    return(
        <article className="h-full p-5 flex flex-col items-center gap-5 bg-white">
            <h1 className="max-w-[600px] text-3xl font-bold text-highlight underline ">Pomodoro Inu</h1>
            <p className="max-w-[612px] text-black">
                {t("about.description.p")}
            </p>
        </article>
    );
}