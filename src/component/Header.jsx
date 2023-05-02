import React from 'react'

function Header() {
  return (
    <nav className='hidden md:flex justify-end w-full bg-white shadow-lg py-5 px-10 rounded-lg font-bold'>
        <button className=" bg-purple-600 py-2 px-5 lg:px-10 sm:text-sm rounded-lg text-white text-center shadow-xl hover:bg-purple-500 active:bg-purple-600 ">Cerrar sesión</button>
    </nav>
  )
}

export default Header