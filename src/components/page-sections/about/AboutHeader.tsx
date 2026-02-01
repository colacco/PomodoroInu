import TopHeader from "../../_shared/TopHeader";
import Language from "../../_shared/Language";

interface AboutHeaderProps{
    overlay: boolean,
    clickHamburguer: () => void
}

export default function AboutHeader({overlay, clickHamburguer}: AboutHeaderProps){
    return(
        <header className="pt-2 pl-4 pr-4 flex justify-between bg-quartenary-color sm:grid sm:grid-cols-[1fr_2fr_1fr]">
            <button onClick={clickHamburguer} className="sm:hidden">
                <img src="/others/menu.png" alt="Menu Icon" width={30} className={overlay? "hidden" : "block" } />
            </button>
            <div></div>
            <TopHeader/>
            <Language/>
        </header>
    );
}