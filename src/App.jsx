// import './App.css';
import Sidebar from './component/Sidebar';
import Rutas from './rutas/Rutas';

function App() {

  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
      <Sidebar />
      <Rutas />
    </div>
  )
}

export default App
