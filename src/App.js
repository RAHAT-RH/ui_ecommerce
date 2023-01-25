import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import SignUp from './pages/SignUp/SignUp';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="bg-body-color">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/single-product' element={<SingleProduct></SingleProduct>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/order-details' element={<OrderDetails></OrderDetails>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <OrderHistory></OrderHistory>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
