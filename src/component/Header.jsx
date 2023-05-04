import { RiNotification3Line, RiLogoutBoxLine } from "react-icons/ri";

function Header() {
  return (
    <nav className='hidden md:flex justify-end w-full bg-white shadow-lg py-5 px-10 rounded-lg font-bold gap-10'>
        <div className="flex justify-end items-center">
            <div className="text-2xl text-gray-400 items-center"><RiNotification3Line /></div>
        </div>
        {/* <button className=" bg-purple-600 py-2 px-5 lg:px-10 sm:text-sm rounded-lg text-white text-center shadow-xl hover:bg-purple-500 active:bg-purple-600 ">Cerrar sesión</button> */}
        <div className="perfil flex center text-lg gap-10 items-center">
            <label htmlFor="" className="text-gray-400">Cristhian Zepeda</label>
            <button ><RiLogoutBoxLine className="text-purple-600  text-2xl hover:text-purple-500 active:text-purple-600"/></button>
        </div>
    </nav>
  )
}

export default Header