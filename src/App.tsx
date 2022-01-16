import './style/App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Admin from './components/admin/Admin';
import CreateProduct from './components/admin/CreateProduct';
import AdminAllProducts from './components/admin/AdminAllProducts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/admin" element={<Admin />}>
              <Route path="/admin"  element={<AdminAllProducts />}/>
              <Route path="/admin/create" element={<CreateProduct />}/> 
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;