type HeaderProps = {
    active: boolean
    clickHamburguer: () => void
};

export default function Header({ active, clickHamburguer }: HeaderProps){
    return(
        <header className="w-screen p-2 flex justify-between">
            <button onClick={clickHamburguer}>
                <img src="/others/menu.png" alt="Menu Icon" width={30} className={active? "hidden" : "block" } />
            </button>
            <button>
                <img src="/others/nut.png" alt="Settings Icon" width={28} />
            </button>
        </header>
    );
}