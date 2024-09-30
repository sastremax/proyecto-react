import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "./layouts";
import { MainRouter } from "./router";

export const App = () => {
    return (
        <ChakraProvider>
            <MainLayout>
                <MainRouter />
            </MainLayout>
        </ChakraProvider>
    );
};
