import { useTranslation } from "react-i18next";
import type TimerSettings from '../../../types/pomodoroType';


interface SettingsProps {
    settings: boolean,
    closeSettings: () => void,
    timerSettings: TimerSettings,
    onSettingsChange: (field: keyof TimerSettings, value: string) => void
}

export default function Settings({ settings, closeSettings, timerSettings, onSettingsChange }: SettingsProps) {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (value: string) => {
        i18n.changeLanguage(value);
    }

    const inputClass = "w-10 pl-1 font-bold tracking-[0.3rem] rounded-md text-center bg-secondary-color placeholder-white placeholder:text-center";

    return (
        <>
            {/* Modal para telas menores que lg */}
            {settings && (
                <div className="lg:hidden fixed top-0 left-0 h-screen w-screen flex flex-col items-center gap-10 bg-[rgba(0,0,0,0.5)] z-50">
                    <p onClick={closeSettings} className="w-full pr-5 pt-3 text-end text-3xl font-close font-bold cursor-pointer"> X </p>
                    <div className="w-[350px] p-10 border-2 rounded-3xl border-quaternary-color bg-tertiary-color">
                        <ul className="flex flex-col gap-10">
                            <li className="flex items-center justify-between">
                                <label htmlFor="language">{t("home.settings.language")}</label>
                                <select
                                    value={i18n.language}
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                    className="bg-tertiary-color outline-none text-end"
                                >
                                    <option value="pt">Português (Brasil)</option>
                                    <option value="en">English</option>
                                </select>
                            </li>
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
                                        onInput={(e) => onSettingsChange('sMin', e.currentTarget.value)}
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
                                        onInput={(e) => onSettingsChange('sSec', e.currentTarget.value)}
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
                                        onInput={(e) => onSettingsChange('bMin', e.currentTarget.value)}
                                    />
                                    <p className=" text-center  text-1xl font-black ">:</p>
                                    <input
                                        className={inputClass}
                                        id="breakSec"
                                        value={timerSettings.bSec || ''}
                                        placeholder="__"
                                        type="tel"
                                        maxLength={2}
                                        onChange={(e) => onSettingsChange('bSec', e.target.value)}
                                        onInput={(e) => onSettingsChange('bSec', e.currentTarget.value)}
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
                        </ul>
                    </div>
                </div>
            )}

            {/* Versão inline para telas lg+ - sempre visível */}
            <div className="hidden lg:block w-[330px] p-5 border-2 rounded-3xl border-quaternary-color bg-tertiary-color">
                <ul className="flex flex-col gap-10">
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
                                onInput={(e) => onSettingsChange('sMin', e.currentTarget.value)}
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
                                onInput={(e) => onSettingsChange('sSec', e.currentTarget.value)}
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
                                onInput={(e) => onSettingsChange('bMin', e.currentTarget.value)}
                            />
                            <p className=" text-center  text-1xl font-black ">:</p>
                            <input
                                className={inputClass}
                                value={timerSettings.bSec || ''}
                                placeholder="__"
                                type="tel"
                                maxLength={2}
                                onChange={(e) => onSettingsChange('bSec', e.target.value)}
                                onInput={(e) => onSettingsChange('bSec', e.currentTarget.value)}
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
                </ul>
            </div>
        </>
    );
}