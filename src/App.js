import "./styles/App.scss";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";


function App() {
  return (
    <>
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
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/nosotros">
            <h1>Nosotros</h1>
          </Route>
          
          <Route exact path="/carrito">
            <h1>Proximamente Carrito</h1>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
