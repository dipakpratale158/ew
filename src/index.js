import ReactDOM from "react-dom/client";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CartContext from "./components/CartContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
    <CartContext>
      <App />
    </CartContext>
    </AuthContextProvider>
  </BrowserRouter>
);
