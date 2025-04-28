import React from "react";
import Logo from "./logo";
import Navbar from "./navigation";
import Contact from "./contact";

export default function Header() {
    return(
        <header>
            <div className="flex items-center px-5 py-2 sticky top-0 mx-2 border-opacity-50 rounded-full justify-between bg-[#FFFFFF]">
                <Logo />
                <Navbar />
                <Contact />
            </div>
        </header>
    )
}