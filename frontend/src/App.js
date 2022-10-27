import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';



function App(){
    return(
        <> 
        <Header/>
        <Routes>
      <Route  exact path="/"  element={<Home />} />
      <Route exact path="/products"  element={< Product/>} />
      <Route exact path="/products/:id"  element={< ProductDetail/>} />
      <Route exact path="/cart"  element={< Cart/>} />
      <Route  exact path="/about"  element={<About />} />
      <Route exact path="/contact"  element={<Contact />} />
      

      </Routes>
         <Footer/>

        </>
    );
}
export default App