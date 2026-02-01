import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer(){
    const { t } = useTranslation();

    return(
        <footer className=" p-2 flex justify-between bg-highlight">
            <Link to="/">
                <motion.div 
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.8 }}
                    className="h-full w-full flex items-center gap-2"
                >
                    <img src="logo/icon.png" alt="" width={25} />
                    <p className="text-lg font-black">Pomodoro Inu</p>
                </motion.div>
            </Link>
            <div className="flex gap-4">
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    href="https://github.com/colacco" target="_blank"
                >
                    <img 
                        src="others/gitHub.png" 
                        alt={t("about.footer.altgithub")} 
                        width={25}
                    />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    href="https://www.linkedin.com/in/gabriel-colacco/" target="_blank"
                >
                    <img 
                        src="others/linkedIn.png" 
                        alt={t("about.footer.altlinkedin")} 
                        width={25}
                    />
                </motion.a>
            </div>
        </footer>
    );
}