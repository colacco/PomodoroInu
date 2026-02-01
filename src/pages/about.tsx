import { useState } from "react";
import HiInu from "../components/page-sections/about/HiInu";
import Description from "../components/page-sections/about/Description";
import Footer from "../components/page-sections/about/Footer";
import Overlay from "../components/_shared/Overlay";
import AboutHeader from "../components/page-sections/about/AboutHeader";

export default function About() {
    const [overlay, setOverlay] = useState(false);
    
    return (
        
        <section className="h-screen flex flex-col bg-quartenary-color">
            <div className="flex-grow">
                <Overlay 
                    active={overlay} 
                    closeOverlay={() => setOverlay(false)} 
                />
                <AboutHeader overlay={overlay} clickHamburguer={() => setOverlay(!overlay)}/>
                <HiInu />
                <Description />
            </div>
            <Footer />
        </section>
    );
}