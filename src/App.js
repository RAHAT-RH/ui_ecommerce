
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ScroolToTop from './Authentication/ScroolToTop';

import Cart from './component/pages/Cart/Cart';
import Checkout from './component/pages/Checkout/Checkout';
import Footer from './component/pages/Footer/Footer';
import Home from './component/pages/Home/Home';
import Login from './component/pages/Login/Login';
import OrderDetails from './component/pages/OrderDetails/OrderDetails';
import OrderHistory from './component/pages/OrderHistory/OrderHistory';
import OtpVerify from './component/pages/OtpVerify/OtpVerify';

import Shop from './component/pages/Shop/Shop';
import SignUp from './component/pages/SignUp/SignUp';
import SingleProduct from './component/pages/SingleProduct/SingleProduct';
import Navbar from './component/shared/Navbar/Navbar';

function App() {


  return (
    <div className="bg-body-color">
   
      <Navbar>
        <ScroolToTop />
        <Routes>
         
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/single-product/:id' element={<SingleProduct></SingleProduct>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/order-details' element={<OrderDetails></OrderDetails>}></Route>
          <Route path='/order-history' element={<OrderHistory></OrderHistory>}></Route>
          <Route path='/otp-verify' element={<OtpVerify></OtpVerify>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route> 
        </Routes>
        <Footer></Footer>
      
      </Navbar>

     
    </div>
  );
}

export default App;
