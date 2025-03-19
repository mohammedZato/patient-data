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

export default function Sidebar() {
    return(
        <aside className="bg-[#FFFFFF] w-[350px] h-full ml-2 mt-5 border-opacity-50 rounded-md">
            <div className="py-1 px-3">
                <div className="flex items-center mb-5">
                    <h2 className="font-bold text-[24px] mr-auto">Patients</h2>
                    <img src={search} alt="search-icon" />
                </div>  
                <ul>
                    <li className="">
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer1} alt="" />
                            <div  className="mr-auto">
                                <h3 classname="">Stewart Blum William</h3>
                                <h4>Male, 39</h4>
                            </div>
                            <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="bg-[#01F0D0] rounded-full pr-1">
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer2} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Jessica Taylor</h3>
                                    <h4>Female, 29</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer3} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Brandon Mitchell</h3>
                                    <h4>Male, 29</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer4} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Tyler Jenkins</h3>
                                    <h4>Male, 29</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer5} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Ryan Johnson</h3>
                                    <h4>Male, 29</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer6} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Leslie Mitchell Johnson</h3>
                                    <h4>Female, 65</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer7} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Leonard Sheldon</h3>
                                    <h4>Male, 54</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer8} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Olivia Brown</h3>
                                    <h4>Female, 23</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-5">
                            <img className="mr-3" src={Layer9} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Howard Walowitz</h3>
                                    <h4>Male, 29</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex mb-5">
                            <img  className="mr-3"src={Layer10} alt="" />
                                <div className="mr-auto">
                                    <h3 className="">Amy Fowler</h3>
                                    <h4>Female, 23</h4>
                                </div>
                                <img src={HorDots} alt="" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}