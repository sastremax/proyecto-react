import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layouts/MainLayout";
import Counter from "./components/Counter/counter";

const App = () => {

  return (
    <ChakraProvider>
      <MainLayout>       
        <ItemListContainer greeting="Bienvenidos a la tienda de productos de Fanáticos EdeLP" />        
      </MainLayout>      
    </ChakraProvider>
  );
}

export default App;
