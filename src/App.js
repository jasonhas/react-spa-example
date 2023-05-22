import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import NotFound from './pages/NotFound'
import Products from './pages/ProductPage';
import Services from './pages/ServicesPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer/>  
      </Router>

    </div>
  );
}

export default App;
