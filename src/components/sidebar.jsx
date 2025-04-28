import React from "react";
import { NavLink } from "react-router-dom";
import HorDots from "../images/moree.svg";
import search from "../images/search_.svg"
import Layer1 from "../images/Layer1.png";
import Layer2 from "../images/Layer2.png"
import Layer3 from "../images/Layer3.png"
import Layer4 from "../images/Layer4.png"
import Layer5 from "../images/Layer5.png"
import Layer6 from "../images/Layer6.png"
import Layer7 from "../images/Layer7.png"
import Layer8 from "../images/Layer8.png"
import Layer9 from "../images/Layer9.png"
import Layer10 from "../images/Layer10.png"
import Layer12 from "../images/Layer12.png";
import pexel from "../images/pexel.png";

export default function Sidebar() {
    return(
        <aside className="bg-[#FFFFFF] w-[350px] h-full ml-2 mt-5 border-opacity-50 rounded-md">
            <div className="py-1 px-3">
                <div className="flex items-center mb-5">
                    <h2 className="font-bold text-gray-900 text-[24px] mr-auto">Patients</h2>
                    <img className="cursor-pointer" src={search} alt="search-icon" />
                </div>  
                <ul>
                    <li className="">
                        <NavLink className="text-black py-2 px-2 flex mb-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer8} alt="" />
                            <div  className="mr-auto">
                                <h3 classname="">Emily Williams</h3>
                                <h4 className="text-[#707070] text-sm">Female, 18</h4>
                            </div>
                            <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black py-2 px-2 flex mb-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer1} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Ryan Johnson</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 45</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer3} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Brandon Mitchell</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 36</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="bg-[#D8FCF7] text-black py-2 px-2 hover:text-gray-800 flex mb-2">
                            <img className="mr-3" src={Layer2} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Jessica Taylor</h3>
                                    <h4 className="text-[#707070] text-sm">Female, 28</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer6} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Samantha Johnson</h3>
                                    <h4 className="text-[#707070] text-sm">Female, 56</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                                <img className="mr-3" src={Layer12} alt="" />
                                    <div className="mr-auto">
                                        <h3 className="">Ashley Martinez</h3>
                                        <h4 className="text-[#707070] text-sm">Female, 54</h4>
                                    </div>
                                    <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer10} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Olivia Brown</h3>
                                    <h4 className="text-[#707070] text-sm">Female, 23</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer9} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Tyler Davis</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 19</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img className="mr-3" src={Layer4} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Kevin Anderson</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 30</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img  className="mr-3"src={Layer5} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Dylan Thompson</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 36</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img  className="mr-3"src={Layer7} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Nathan Evans</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 58</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-2 py-2 px-2 hover:text-gray-800">
                            <img  className="mr-3"src={pexel} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Mike Nolan</h3>
                                    <h4 className="text-[#707070] text-sm">Male, 31</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}