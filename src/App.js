import { lazy,Suspense } from "react";
import { useContext, useState } from "react";
 import Header from "./components/Header";
 import CartList from "./components/CartList";
 import Home from "./components/pages/Home";
// import Store from "./components/pages/Store";
// import About from "./components/pages/About";
 import "./App.css";
 import { Routes, Route, Switch } from "react-router-dom";
import ContactUs from "./components/pages/ContectUs";

 import Login from "./components/pages/Login";
// import ProductDetail from ;

 import AuthContext from "./components/store/AuthContext";
 import Footer from "./components/Footer/Footer";
import SignUp from "./components/pages/SignUp";

//const Home = lazy(()=>import("./components/pages/Home"))
const Store = lazy(()=>import("./components/pages/Store"))
const About = lazy(()=>import("./components/pages/About"))
//const ContactUs = lazy(()=>import("./components/pages/ContectUs"))
const ProductDetail = lazy(()=>import( "./components/pages/ProductDetails"))
//const Login = lazy(()=>import("./components/pages/Home"))

const App = () => {
  const authCtx = useContext(AuthContext)
  const [showCart, setShowCart] = useState(false);

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header handleShow={handleShow} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Suspense><Store /></Suspense>} />
          <Route path="about" element={<Suspense><About /></Suspense>} />
          <Route path="contact" element={<ContactUs />} />
          {<Route path="/product/:id" element={<Suspense><ProductDetail /></Suspense>} />}
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element = {showCart&&<CartList/>}></Route>

        </Routes>
        <div style={{textAlign:'buttom'}}><Footer/></div>
     
    </div>
  );
};

export default App;