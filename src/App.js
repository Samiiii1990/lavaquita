import "./styles/App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import CartList from "./components/CartList/CartList";
import { Checkout } from "./components/Checkout/Checkout";

function App() {

  return (
    <>
        <CartProvider>

        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:catId">
              <ItemListContainer />
            </Route>

            <Route exact path="/detail/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <CartList/>
            </Route>
            <Route exact path="/checkout">
              <Checkout/>
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>

        </CartProvider>


    </>
  );
}

export default App;
