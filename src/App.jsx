import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Tech from './components/Tech/Tech';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/contact';
import GetTouch from './components/GetTouch/GetTouch';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home />
          <Tech />
          <About />
          <Project />
          <Contact/>
          <GetTouch/>
        </>
      )}
    </div>
  );
}

export default App;
