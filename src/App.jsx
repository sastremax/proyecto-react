import React from 'react';
import { chakraProvider } from "@chakra-ui/react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return <chakraProvider></chakraProvider>;
}

export default App;
