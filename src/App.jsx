import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la tienda de productos de Estudiantes de la Plata" />
    </>
  );
}

export default App;
