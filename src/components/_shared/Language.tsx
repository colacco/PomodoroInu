import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Language({className}: {className: string}){
     const { t, i18n } = useTranslation();
    const [ isChecked, setIsChecked ] = useState(() => i18n.language === "pt");

    useEffect(() => {
        i18n.changeLanguage( isChecked? "pt" : "en" )
    }, [ isChecked, i18n ]);
    
    return(
        <button className={className}>
                <label htmlFor="lang" className="w-[30px]">
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        name="lang" 
                        id="lang" 
                        className="hidden" 
                    />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        src={ isChecked ? "others/brazil.png" : "others/eua.png" }
                        alt={t("about.aboutheader.alt")} 
                        width={30}
                        className="cursor-pointer"
                    />
                </label>
            </button>
    );
}