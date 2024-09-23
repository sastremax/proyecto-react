import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "./layouts";
import { Home } from "./Pages";

export const App = () => {

  return (
    <ChakraProvider>
      <MainLayout>       
        <Home />        
      </MainLayout>      
    </ChakraProvider>
  );
}
