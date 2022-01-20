import './style/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Admin from './components/admin/Admin';
import CreateProduct from './components/admin/CreateProduct';
import AdminAllProducts from './components/admin/AdminAllProducts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import UpdateProduct from './components/admin/UpdateProduct';
import DetailsProduct from './components/admin/DetailsProduct';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Users from './components/admin/Users';
import User from './components/user/UserInfo';
import UserUpdate from './components/user/UserUpdate';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />}/>
          <Route path="/userupdate" element={<UserUpdate />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<AdminAllProducts />} />
            <Route path="/admin/create" element={<CreateProduct />} />
            <Route path="/admin/update" element={<UpdateProduct />} />
            <Route path="/admin/details" element={<DetailsProduct />} />
            <Route path="/admin/users" element={<Users />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;