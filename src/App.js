import './styles/App.scss';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
