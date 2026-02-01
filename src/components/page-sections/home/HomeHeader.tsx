type HeaderProps = {
    overlay: boolean,
    settings: boolean,
    clickHamburguer: () => void,
    clickNut: () => void
};

export default function HomeHeader({ overlay, settings, clickHamburguer, clickNut }: HeaderProps){
    return(
        <header className="w-screen pl-4 pr-4 flex justify-between">
            <button onClick={clickHamburguer}>
                <img src="/others/menu.png" alt="Menu Icon" width={30} className={overlay? "hidden" : "block" } />
            </button>
            <button onClick={clickNut}>
                <img src="/others/nut.png" alt="Settings Icon" width={28} className={settings? "hidden" : "block" }  />
            </button>
        </header>
    );
}