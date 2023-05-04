import { useRoutes } from 'react-router-dom'
import Header from '../component/Header'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'



const ruta = [
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/about",
        element: <About />
    },
    {
        path:"/contact",
        element: <Contact />
    },
    {
        path:"/izquierda",
        element: "Hola soy borde redondeado a la izquierda"
    },
    {
        path:"/abajo",
        element: "Hola border redondeado abajo"
    },
]

function Rutas() {

    const element = useRoutes(ruta)

    return (
        <div className="col-span-5 py-5 px-10 bg-gray-200">
            <Header />
            <div className='flex justify-center w-full bg-white shadow-lg py-14 px-20 rounded-lg font-bold gap-10 my-10'>
                {element}
            </div>
        </div>
    )
}

export default Rutas