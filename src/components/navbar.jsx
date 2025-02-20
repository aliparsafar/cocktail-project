import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
    <nav className=" flex justify-around mt-8">
            <h1 className="font-bold text-5xl text-cyan-300">MixMaster</h1>
            <ul className="flex gap-10 ">
                  <li className="text-xl text-cyan-300">
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    </li>
                    <li className="text-xl">
                    <NavLink to="/about">
                        About
                    </NavLink>
                    </li>
                    <li className="text-xl">
                    <NavLink to="/newsletter">
                        Newsletter
                    </NavLink>
                    </li>
            </ul>
        </nav>
    )
}