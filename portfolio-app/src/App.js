// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about.html" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
