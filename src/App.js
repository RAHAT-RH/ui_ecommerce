
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
import RequireAuth from './Authentication/TokenAuth/RequireAuth/RequireAuth'
import Shop from './component/pages/Shop/Shop';
import SignUp from './component/pages/SignUp/SignUp';
import SingleProduct from './component/pages/SingleProduct/SingleProduct';
import Navbar from './component/shared/Navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import Profile from './component/pages/Profile/Profile';

function App() {

 const client = new QueryClient()

  return (

    <div className="bg-body-color">
      <QueryClientProvider client= {client}>
        <Navbar>
          <ScroolToTop />
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/single-product/:id' element={<SingleProduct></SingleProduct>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/checkout' element={
              <RequireAuth><Checkout></Checkout></RequireAuth>
            }></Route>
            <Route path='/profile' element={
              <RequireAuth><Profile></Profile></RequireAuth>
            }></Route>
            <Route path='/order-history' element={
              <RequireAuth><OrderHistory></OrderHistory></RequireAuth>
            }></Route>
            <Route path='/order-details/:id' element={
              <RequireAuth><OrderDetails></OrderDetails></RequireAuth>
            }></Route>

            <Route path='/otp-verify' element={<OtpVerify></OtpVerify>}></Route>
            <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
          <Footer></Footer>

        </Navbar>
      </QueryClientProvider>


    </div>
  );
}

export default App;
