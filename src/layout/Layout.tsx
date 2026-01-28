import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Overlay from "../components/layout/Overlay";
 import Settings from "../components/layout/Settings";

export default function Layout(){
 const [ overlay, setOverlay ] = useState(false);
 const [ settings, setSettings ] = useState(false);
 
 return(
    <>
        <Overlay active={overlay} closeOverlay={() => setOverlay(false)}/>
        <Settings settings={settings} closeSettings={() => setSettings(false)}/>
        <Header overlay={overlay} settings={settings} clickHamburguer={() => setOverlay(true)} clickNut={() => setSettings(true)}/>
        <main>
            <Outlet/>
        </main>
    </>
 );
}