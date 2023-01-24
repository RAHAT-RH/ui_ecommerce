import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="bg-body-color">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
