import React from "react";
import Logo from "./logo";
import Navbar from "./navigation";
import Contact from "./contact";

export default function Header() {
    return(
        <header>
            <div className="flex items-center px-5 sticky top-0 py-2 mx-2 mt-2 border-opacity-50 rounded-full justify-between bg-[#FFFFFF]">
                <Logo />
                <Navbar />
                <Contact />
            </div>
        </header>
    )
}