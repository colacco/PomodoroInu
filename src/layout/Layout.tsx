import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Overlay from "../components/layout/Overlay";

export default function Layout(){
 const [ overlay, setOverlay ] = useState(false);
 
 return(
    <>
        <Overlay active={overlay} closeOverlay={() => setOverlay(false)}/>
        <Header active={overlay} clickHamburguer={() => setOverlay(true)}/>
        <main>
            <Outlet/>
        </main>
    </>
 );
}