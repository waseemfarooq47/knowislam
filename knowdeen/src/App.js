import React from "react"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Cart from "./Cart"
import Products from "./Products"
import SingleProduct from "./SingleProduct"
import ErrorPage from "./ErrorPage"

function App() {
  return (
    <Router>
        <Routes>
              <Route path="/"  element={<Home/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>

        </Routes>
    </Router>
  );
}

export default App;
