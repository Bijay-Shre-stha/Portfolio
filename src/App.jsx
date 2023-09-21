import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Tech from './components/Tech/Tech'
import About from './components/About/About'

function App() {

  return (
  <div className="App">
    <Navbar/>
    <Home/>
    <Tech/>
    <About/>
  </div>
  )
}

export default App
