import { useRoutes } from 'react-router-dom'
import Header from '../component/Header'


const ruta = [
    {
        path:"/",
        element: "Hola soy home"
    },
    {
        path:"/about",
        element: "Hola soy About"
    },
    {
        path:"/contact",
        element: "Hola soy contac"
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
        <div className="col-span-5 py-5 px-20 bg-slate-100">
            <Header />
            {element}
        </div>
    )
}

export default Rutas