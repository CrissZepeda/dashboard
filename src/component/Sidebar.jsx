import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiHome3Fill, RiHotelFill, RiPagesFill,RiArrowLeftFill, RiArrowDownFill, RiMenu5Fill, RiMenuFoldFill, RiCloseLine, RiNotification2Fill, RiLogoutBoxLine, RiNotification3Line } from "react-icons/ri";
import imgSideBar from "../assets/img/imgSideBar.svg"

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const collapse = () =>{
        setSidebar(!sidebar);
    }

    /* useEffect(() => {
        ()=>collapse();
    }, [sidebar]) */
    

    return (
        <>
            <div  className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full bg-white top-0 ${sidebar ? "-left-0" : "-left-full"} w-full h-full overflow-y-auto lg:overflow-hidden col-span-1 py-9 flex flex-col gap-4 p-4 lg:p-8 shadow-2xl transition-all`}>
                
                <div className="img_logo flex justify-center tracking-[4px] ">
                    LOGO
                </div>

                {/* <button className="block md:hidden w-full font-bold bg-purple-600 py-2 px-5lg:px-10 sm:text-sm rounded-lg text-white text-center shadow-xl hover:bg-purple-500 active:bg-purple-600 ">Cerrar sesión</button> */}
                
                    {/* <button className=" bg-purple-600 py-2 px-5 lg:px-10 sm:text-sm rounded-lg text-white text-center shadow-xl hover:bg-purple-500 active:bg-purple-600 ">Cerrar sesión</button> */}
                <div className="md:hidden w-full flex text-lg gap-10 justify-center my-5 items-center">
                    <div className="text-2xl text-gray-400 items-center"><RiNotification3Line /></div>
                    <label htmlFor="" className="text-gray-400">Cristhian Zepeda</label>
                    <button ><RiLogoutBoxLine className="text-purple-600 text-2xl font-extrabold hover:text-purple-500 active:text-purple-600"/></button>
                </div>

                <nav>
                    <ul className="flex flex-col gap-5 text-lg md:text-sm lg:text-lg">
                        <li className="font-semibold py-4 sm:px-1 px-10 text-gray-400 hover:bg-purple-700 rounded-lg hover:text-white transition-colors">
                            <Link to="/" className="flex items-center gap-4 mx-5" onClick={collapse}>
                                <RiHome3Fill /> Home
                            </Link>
                        </li>
                        <li className="font-semibold py-4 sm:px-1 px-10 text-gray-400 hover:bg-purple-700 rounded-lg hover:text-white transition-colors">
                            <Link to="/about" className="flex items-center gap-4 mx-5" onClick={collapse}>
                                <RiHotelFill /> About
                            </Link>
                        </li>
                        <li className="font-semibold py-4 sm:px-1 px-10 text-gray-400 hover:bg-purple-700 rounded-lg hover:text-white transition-colors">
                            <Link to="/contact" className="flex items-center gap-4 mx-5" onClick={collapse}>
                                <RiPagesFill/> Contact
                            </Link>
                        </li>
                        <li className="font-semibold py-4 sm:px-1 px-10 text-gray-400 hover:bg-purple-700 rounded-lg hover:text-white transition-colors">
                            <Link to="/izquierda" className="flex items-center gap-4 mx-5" onClick={collapse}>
                                <RiArrowLeftFill /> Hover Izquierda
                            </Link>
                        </li>
                        <li className="font-semibold py-4 sm:px-1 px-10 text-gray-400 hover:bg-purple-700 rounded-lg hover:text-white transition-colors">
                            <Link to="/abajo" className="flex items-center gap-4 mx-5" onClick={collapse}>
                                <RiArrowDownFill /> Hover Abajo
                            </Link>
                        </li>
                    </ul>
                </nav>
                <img className="my-20" src={imgSideBar} alt="" />
            </div>

            {/* BURGUER */}
            <button className="block absolute lg:hidden top-3 right-4 bg-purple-600 text-white text-2xl rounded-full p-2 shadow-lg" onClick={collapse}>
                {sidebar ? <RiCloseLine /> : <RiMenu5Fill />}                
            </button>
        </>
    )
}

export default Sidebar