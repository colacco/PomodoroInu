import { useTranslation } from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en'
        i18n.changeLanguage(newLang)
    }
    return (
        <main>
            <h1>{t('welcome')}</h1>
            <div>
                <p>{t('description')}</p>
                <button onClick={toggleLanguage} className="m-20 p-10 ronaldinho">
                    Current Language: <strong>{i18n.language.toUpperCase()}</strong>
                </button>
            </div>
        </main>
    )
}