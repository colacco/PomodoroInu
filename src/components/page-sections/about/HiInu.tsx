import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HiInu() {
    const { t } = useTranslation();

    return (
        <div className="h-[170px] sm:h-[210px] flex justify-center align-bottom bg-quaternary-color">
            <motion.img
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src="about/hiInu.png" alt={t("about.hiinu.alt")}
                width={290}
                className="object-contain" />
        </div>
    )
}