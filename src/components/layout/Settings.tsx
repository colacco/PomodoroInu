import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

type SettingsProps = {
    settings: boolean,
    closeSettings: () => void
}

export default function Settings({ settings, closeSettings }: SettingsProps) {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        i18n.changeLanguage(value);
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        let value = target.value.replace(/[^0-9]/g, '');

        if (parseInt(value) > 59) {
            value = '59';
        }

        target.value = value;
    }

    if (!settings) return null;

    return (
        <div className="fixed h-screen w-screen flex flex-col items-center gap-10 bg-[rgba(0,0,0,0.5)]">
            <p onClick={closeSettings} className="w-full pr-5 pt-3 text-end text-3xl font-close font-bold">X</p>
            <div className="w-[350px] p-10 border-2 rounded-3xl border-quartenary-color bg-terciary-color">
                <ul className="flex flex-col gap-8">
                    <li className="flex items-center justify-between">
                        <label htmlFor="language">{t("header.settings.language")}</label>
                        <select value={language} onChange={(e) => handleLanguageChange(e.target.value)} className="bg-terciary-color outline-none text-end">
                            <option value="pt">Português (Brasil)</option>
                            <option value="en">English</option>
                        </select>
                    </li>
                    <li className="flex items-center justify-between">
                        <label htmlFor="study">{t("header.settings.study")}:</label>
                        <div className="flex gap-2 ">
                            <input className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent placeholder-white" name="study" id="study" placeholder="00" type="tel" maxLength={2}></input>
                            <p className=" text-center  text-1xl font-black ">:</p>
                            <input className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent placeholder-white" name="study" id="study" placeholder="00" type="tel" maxLength={2} onInput={handleChange}></input>
                        </div>
                    </li>
                    <li className="flex items-center justify-between">
                        <label htmlFor="break">{t("header.settings.break")}:</label>
                        <div className="flex gap-2 ">
                            <input className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent placeholder-white" name="break" id="break" placeholder="00" type="tel" maxLength={2}></input>
                            <p className=" text-center  text-1xl font-black ">:</p>
                            <input className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent placeholder-white" name="break" id="break" placeholder="00" type="tel" maxLength={2} onInput={handleChange}></input>
                        </div>
                    </li>
                    <li className="flex items-center justify-between">
                        <label htmlFor="session">{t("header.settings.sessions")}:</label>
                        <input className="w-12 bg-transparent" maxLength={5} type="tel" name="session" id="session" />
                    </li>
                </ul>
            </div>
        </div>
    );
}