import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tech from './components/Tech/Tech'

function App() {

  return (
  <div className="App">
    <Navbar/>
    <Hero/>
    <Tech/>
  </div>
  )
}

export default App
