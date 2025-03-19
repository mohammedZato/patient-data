import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Boddy from "./components/body";
import RightSidebar from "./components/rightSidebar";
import NavSidebar from "./components/navSidebar";

export default function App() {
    return(
        <div className="bg-[#F6F7F8] font-poppins">
            <Header />
            <Sidebar />
            <Boddy />
            <RightSidebar />
            <NavSidebar />
        </div>
    )
}