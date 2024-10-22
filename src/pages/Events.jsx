import React, { useEffect, useState } from "react";
import { Flex, Divider, Box, Button } from "@chakra-ui/react";

export const Events = () => {
  
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [formInputValue, setFormInputValue] = useState("");
  const [mouseActive, setMouseActive] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Enviando formulario" + formInputValue);
  };

  const handleMouseEnter = () => {
    setMouseActive(true);
  };
  const handleMouseLeave = () => {
    setMouseActive(false);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
  };

  return (
    <Flex height={"90vh"} flexDirection={"column"}>
      <br />
      <br />
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Eventos</h1>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <h2>Input</h2>
      <Box>
        <input
          type="text"
          placeholder="Escriba su nombre"
          onChange={handleChange}
        />
      </Box>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <h2>Todo List</h2>
      <Box>
        <input
          type="text"
          placeholder="Ingrese algo..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setList([...list, inputValue]);
          }}
        >
          Click me
        </Button>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Box>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su usuario"
          onChange={(e) => setFormInputValue(e.target.value)}
        />
        <button type="submit">Enviar formulario</button>
      </form>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <h2>Mouse Event</h2>
      <Box
        h={200}
        w={200}
        border={"1px solid red"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bgColor={mouseActive ? "blue" : "transparent"}
      >
        {mouseActive ? "Mouse dentro del Box" : "Mouse Fuera del Box"}
      </Box>
      <br />
      <br />
      <Divider />
      <h2>OnKeyDown</h2>
      <Box>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Presione cualquier tecla"
        />
      </Box>
    </Flex>
  );
};
