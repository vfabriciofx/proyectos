import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navBar'
import Artistas from './components/Artistas/index'
import PreguntasFrecuentes from './components/PreguntasFrecuentes/index'
import Home from './components/Inicio/index'
import Footer from './components/Footer'

function App() {
  return ( 
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Artistas' Component={Artistas} />
            <Route path='/PreguntasFrecuentes' Component={PreguntasFrecuentes} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
