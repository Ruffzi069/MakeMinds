import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Pagenotfound from './component/Pagenotfound';
import About from './component/About';
import Product from './component/Product';
import Login from './component/Login';
import Footer from './component/Footer';
import CyberSecurity from './component/CyberSecurity';
import Artificial from './component/Artificial';
import ML from './component/ML';
import DS from './component/DS';
import Test from './component/Test';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Pagenotfound/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>  
        <Route path="/cybersecurity" element={<CyberSecurity/>}/>
        <Route path="/artificial" element={<Artificial/>}/>
        <Route path="/machinelearning" element={<ML/>}/>
        <Route path="/datascience" element={<DS/>}/> 
        <Route path='/test' element={<Test/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
