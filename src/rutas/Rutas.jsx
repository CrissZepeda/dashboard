import { useRoutes } from 'react-router-dom'

const ruta = [
    {
        path:"/",
        element: "Hola soy home"
    },
    {
        path:"/about",
        element: "Hola soy About"
    }
]

function Rutas() {

    const element = useRoutes(ruta)

    return (
        <div  className="col-span-5">{element}</div>
    )
}

export default Rutas