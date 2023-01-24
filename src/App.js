import './App.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="bg-body-color">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
