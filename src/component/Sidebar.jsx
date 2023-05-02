import { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome3Fill, RiHotelFill, RiPagesFill,RiArrowLeftFill, RiArrowDownFill, RiMenu5Fill, RiMenuFoldFill, RiCloseLine } from "react-icons/ri";
import imgSideBar from "../assets/img/imgSideBar.svg"

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const collapse = () =>{
        setSidebar(!sidebar);
    }

    return (
        <>
            <div  className={`fixed lg:static w-[80%] md:w-[60%] lg:w-full bg-white top-0 ${sidebar ? "-left-0" : "-left-full"} w-full h-full overflow-y-auto lg:overflow-hidden col-span-1 py-9 flex flex-col gap-4 p-8 shadow-2xl`}>
                {/* <button className="block absolute lg:hidden top-3 right-4 bg-purple-600 text-white text-3xl rounded-full p-3 shadow-lg" onClick={collapse}>
                    <RiMenuFoldFill />
                </button> */}
                <div className="img_logo flex justify-center tracking-[4px] ">
                    LOGO
                </div>
                <nav>
                    <ul className="flex flex-col gap-5 text-lg">
                        <li className="font-semibold py-4 px-10 text-gray-400 hover:bg-purple-700 rounded-lg hover:text-white transition-colors">
                            <Link to="/" className="flex items-center gap-4">
                                <RiHome3Fill /> Home
                            </Link>
                        </li>
                        <li className="font-semibold py-4 px-10 text-gray-400 hover:bg-purple-700 rounded-e-lg hover:text-white transition-colors">
                            <Link to="/about" className="flex items-center gap-4">
                                <RiHotelFill /> About
                            </Link>
                        </li>
                        <li className="font-semibold py-4 px-10 text-gray-400 hover:bg-purple-700 rounded-t-lg hover:text-white transition-colors">
                            <Link className="flex items-center gap-4">
                                <RiPagesFill/> Contact
                            </Link>
                        </li>
                        <li className="font-semibold py-4 px-10 text-gray-400 hover:bg-purple-700 rounded-s-lg hover:text-white transition-colors">
                            <Link to="" className="flex items-center gap-4">
                                <RiArrowLeftFill /> Hover Izquierda
                            </Link>
                        </li>
                        <li className="font-semibold py-4 px-10 text-gray-400 hover:bg-purple-700 rounded-b-lg hover:text-white transition-colors">
                            <Link to="" className="flex items-center gap-4">
                                <RiArrowDownFill /> Hover Abajo
                            </Link>
                        </li>
                    </ul>
                </nav>
                <img className="my-20" src={imgSideBar} alt="" />
            </div>
            <button className="block absolute lg:hidden top-3 right-4 bg-purple-600 text-white text-3xl rounded-full p-3 shadow-lg" onClick={collapse}>
                {sidebar ? <RiCloseLine /> : <RiMenu5Fill />}                
            </button>
        </>
    )
}

export default Sidebar