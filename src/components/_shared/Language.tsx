import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Language({className}: {className: string}){
    const [ isChecked, setIsChecked ] = useState(false);
    const { t, i18n } = useTranslation();

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
                    <img 
                        src={ isChecked ? "others/brazil.png" : "others/eua.png" }
                        alt={t("about.aboutheader.alt")} 
                        width={30}
                    />
                </label>
            </button>
    );
}