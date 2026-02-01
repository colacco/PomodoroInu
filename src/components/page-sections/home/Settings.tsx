import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { handleChange } from '../../../utils/timer';
import type TimerSettings from '../../../types/pomodoroType';

interface SettingsProps {
    settings: boolean,
    closeSettings: () => void,
    timerSettings: TimerSettings,
    onSettingsChange: (field: keyof TimerSettings, value: string) => void
}

export default function Settings({ settings, closeSettings, timerSettings, onSettingsChange }: SettingsProps) {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        i18n.changeLanguage(value);
    }

    const inputClass = "w-10 pl-1 font-bold tracking-[0.3rem] rounded-md text-center bg-secondary-color placeholder-white placeholder:text-center";

    return (
        <>
            {/* Modal para telas menores que lg */}
            {settings && (
                <div className="lg:hidden fixed top-0 left-0 h-screen w-screen flex flex-col items-center gap-10 bg-[rgba(0,0,0,0.5)] z-50">
                    <p onClick={closeSettings} className="w-full pr-5 pt-3 text-end text-3xl font-close font-bold cursor-pointer"> X </p>
                    <div className="w-[350px] p-10 border-2 rounded-3xl border-quartenary-color bg-terciary-color">
                        <ul className="flex flex-col gap-8">
                            <li className="flex items-center justify-between">
                                <label htmlFor="language">{t("home.settings.language")}</label>
                                <select
                                    value={language}
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                    className="bg-terciary-color outline-none text-end"
                                >
                                    <option value="pt">Português (Brasil)</option>
                                    <option value="en">English</option>
                                </select>
                            </li>
                            <li className="flex items-center justify-between">
                                <label htmlFor="study">{t("home.settings.study")}:</label>
                                <div className="flex gap-2 ">
                                    <input
                                        className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent"
                                        name="studyMin"
                                        id="studyMin"
                                        value={timerSettings.sMin || ''}
                                        placeholder="00"
                                        type="tel"
                                        maxLength={2}
                                        onChange={(e) => onSettingsChange('sMin', e.target.value)}
                                        onInput={handleChange}
                                    />
                                    <p className=" text-center  text-1xl font-black ">:</p>
                                    <input
                                        className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent"
                                        name="studySec"
                                        id="studySec"
                                        value={timerSettings.sSec || ''}
                                        placeholder="00"
                                        type="tel"
                                        maxLength={2}
                                        onChange={(e) => onSettingsChange('sSec', e.target.value)}
                                        onInput={handleChange}
                                    />
                                </div>
                            </li>
                            <li className="flex items-center justify-between">
                                <label htmlFor="break">{t("home.settings.break")}:</label>
                                <div className="flex gap-2 ">
                                    <input
                                        className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent "
                                        name="breakMin"
                                        id="breakMin"
                                        value={timerSettings.bMin || ''}
                                        placeholder="00"
                                        type="tel"
                                        maxLength={2}
                                        onChange={(e) => onSettingsChange('bMin', e.target.value)}
                                        onInput={handleChange}
                                    />
                                    <p className=" text-center  text-1xl font-black ">:</p>
                                    <input
                                        className="w-10 pl-1 font-bold tracking-[0.5rem] bg-transparent placeholder-white"
                                        name="breakSec"
                                        id="breakSec"
                                        value={timerSettings.bSec || ''}
                                        placeholder="00"
                                        type="tel"
                                        maxLength={2}
                                        onChange={(e) => onSettingsChange('bSec', e.target.value)}
                                        onInput={handleChange}
                                    />
                                </div>
                            </li>
                            <li className="flex items-center justify-between">
                                <label htmlFor="session">{t("home.settings.sessions")}:</label>
                                <input
                                    className="w-12 bg-transparent placeholder-white"
                                    maxLength={5}
                                    value={timerSettings.sessions || ''}
                                    placeholder=""
                                    type="tel"
                                    name="session"
                                    id="session"
                                    onChange={(e) => onSettingsChange('sessions', e.target.value)}
                                />
                            </li>
                            <li className='flex justify-end'>
                                <button
                                    onClick={closeSettings}
                                    className='w-[100px] p-[0.2rem] rounded-lg font-bold text-[20px] bg-highlight'
                                >
                                    {t("home.settings.save")}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Versão inline para telas lg+ - sempre visível */}
            <div className="hidden lg:block w-[330px] p-3 border-2 rounded-3xl border-quartenary-color bg-terciary-color">
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center justify-between">
                        <label htmlFor="studyMin">{t("home.settings.study")}:</label>
                        <div className="flex gap-2 ">
                            <input
                                className={inputClass}
                                id="studyMin"
                                value={timerSettings.sMin || ''}
                                placeholder="__"
                                type="tel"
                                maxLength={2}
                                onChange={(e) => onSettingsChange('sMin', e.target.value)}

                            />
                            <p className=" text-center  text-1xl font-black ">:</p>
                            <input
                                className={inputClass}
                                id="studySec"
                                value={timerSettings.sSec || ''}
                                placeholder="__"
                                type="tel"
                                maxLength={2}
                                onChange={(e) => onSettingsChange('sSec', e.target.value)}
                                onInput={handleChange}
                            />
                        </div>
                    </li>
                    <li className="flex items-center justify-between">
                        <label htmlFor="breakMin">{t("home.settings.break")}:</label>
                        <div className="flex gap-2 ">
                            <input
                                className={inputClass}
                                id="breakMin"
                                value={timerSettings.bMin || ''}
                                placeholder="__"
                                type="tel"
                                maxLength={2}
                                onChange={(e) => onSettingsChange('bMin', e.target.value)}
                                onInput={handleChange}
                            />
                            <p className=" text-center  text-1xl font-black ">:</p>
                            <input
                                className={inputClass}
                                value={timerSettings.bSec || ''}
                                placeholder="__"
                                type="tel"
                                maxLength={2}
                                onChange={(e) => onSettingsChange('bSec', e.target.value)}
                                onInput={handleChange}
                            />
                        </div>
                    </li>
                    <li className="flex items-center justify-between">
                        <label htmlFor="session">{t("home.settings.sessions")}:</label>
                        <input
                            className="w-12 rounded-md text-center bg-secondary-color placeholder-white placeholder:text-center"
                            maxLength={5}
                            value={timerSettings.sessions || ''}
                            placeholder="_"
                            type="tel"
                            name="session"
                            id="session"
                            onChange={(e) => onSettingsChange('sessions', e.target.value)}
                        />
                    </li>
                    <li className='mt-5 flex justify-center'>
                        <button
                            onClick={closeSettings}
                            className='w-[100px] p-[0.2rem] rounded-lg font-bold text-[20px] bg-highlight'
                        >
                            {t("home.settings.save")}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}