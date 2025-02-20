import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Navbar(){
    const [StyleHome, setStyleHome]= useState("text-emerald-500");
    const [StyleAbout, setStyleAbout]= useState("");
    const [StyleNewsletter, setStyleNewsletter]= useState("");
        
    const clickHanndler= (str) => {
        if(str==="Home") {
            setStyleHome("text-emerald-500")
            setStyleAbout("")
            setStyleNewsletter("")
        } else if(str==="About") {
            setStyleAbout("text-emerald-500")
            setStyleHome("")
            setStyleNewsletter("")
        } else if(str==="Newsletter") {
            setStyleNewsletter("text-emerald-500")
            setStyleHome("")
            setStyleAbout("")
        }   
    }
    return(
    <nav className=" flex justify-around mt-8">
            <h1 className="font-bold text-5xl text-cyan-300">MixMaster</h1>
            <ul className="flex gap-10 ">
                <li onClick={() => clickHanndler('Home')} className={`${StyleHome}`}>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    </li>
                    <li  onClick={() => clickHanndler('About')} className={`${StyleAbout}`}>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    </li>
                    <li  onClick={() => clickHanndler('Newsletter')} className={`${StyleNewsletter}`}>
                    <NavLink to="/newsletter">
                        Newsletter
                    </NavLink>
                    </li>
            </ul>
        </nav>
    )
}