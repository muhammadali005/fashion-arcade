import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';
import Contact from './component/Contact';
import Login from './component/Login';
import About from './component/About';
import Cart from './component/Cart';
import Register from './component/Register';
import { Routes, Route } from 'react-router-dom';
import DeliveryPage from './component/DeliveryPage';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </>
  );
}

export default App;