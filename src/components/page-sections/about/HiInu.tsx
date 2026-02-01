import { useTranslation } from "react-i18next";

export default function HiInu(){
    const { t } = useTranslation();

    return(
        <div className="h-[170px] sm:h-[210px] flex justify-center align-bottom bg-quartenary-color">
            <img src="about/hiInu.png" alt={t("about.hiinu.alt")} width={290} className="object-contain" />
        </div>
    )
}