
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
<br></br>
      <Routes>
  
        <Route path='/' element={<Cards/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<div> <h1>404-Página no encontrada</h1> </div>} />


      </Routes>
      </Router> 
    </div>
  );
}

export default App;
