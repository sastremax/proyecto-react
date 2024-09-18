import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";

const App = () => {

  return (
    <ChakraProvider>
      <MainLayout>       
        <Home />        
      </MainLayout>      
    </ChakraProvider>
  );
}

export default App;
