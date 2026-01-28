import { useTranslation } from "react-i18next";

export default function Description(){
    const { t } = useTranslation();

    return(
        <article className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-highlight underline">Pomodoro Inu</h1>
            <p className="text-black">
                {t("about.description.p")}
            </p>
        </article>
    );
}