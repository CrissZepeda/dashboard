import { useRoutes } from 'react-router-dom'
import Header from '../component/Header'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'
import Breadcumbs from '../component/Breadcumbs'
/* Helper */
import ComponentDirtRuta from '../helpers/ComponentDirtRuta'



const ruta = [
    {
        path:"/",
        element: <Home dir={["Home", "Algo"]}/>
    },
    {
        path:"/about",
        element: <About dir={["About"]}/>
    },
    {
        path:"/contact",
        element: <Contact dir={["Contacto"]}/>
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
    const dir = ComponentDirtRuta(element)

    return (
        <div className="col-span-5 py-5 px-10 bg-gray-200">
            <Header />
            <Breadcumbs dir={dir}/>
            <div className='flex justify-center w-full bg-white shadow-lg py-14 px-20 rounded-lg font-bold gap-10 my-2'>
                {/* {console.log(element.props.match.route.element.props.dir)} */}
                {element}
            </div>
        </div>
    )
}

export default Rutas