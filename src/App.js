import '../src/dist/css/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Nav from './pages/Nav';
import ParticlesComponent from './pages/ParticlesBg';





function App() {
  return (
    <Router>
    <div className="App">
    
    
    
    <ParticlesComponent/>
    <Nav/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      

    </div>
    </Router>
  );
}

export default App;
