import { motion } from "framer-motion";
import nut from "/others/nut.png";
import menu from "/others/menu.png";

type HeaderProps = {
    overlay: boolean,
    settings: boolean,
    clickHamburguer: () => void,
    clickNut: () => void
};

export default function HomeHeader({ overlay, settings, clickHamburguer, clickNut }: HeaderProps) {
    return (
        <header className="w-screen pt-4 pl-4 pr-4 flex justify-between lg:hidden">
            <button
                onClick={clickHamburguer}
                className="cursor-pointer"
            >
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={menu}
                    alt="Menu Icon"
                    width={30}
                    className={overlay ? "hidden" : "block"}
                />
            </button>
            <button
                onClick={clickNut}
                className="cursor-pointer"
            >
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={nut}
                    alt="Settings Icon"
                    width={28}
                    className={settings ? "hidden" : "block"}
                />
            </button>
        </header>
    );
}