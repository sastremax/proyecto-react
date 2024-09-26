import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://api.example.com/items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const borderColor = useColorModeValue("black", "white");
  const boxShadow = useColorModeValue("6px 6px 0 black", "6px 6px 0 white");
  const bgColor = useColorModeValue("white", "gray.200");

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (!item) {
    return <Text>Producto no encontrado</Text>;
  }

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"lg"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg={bgColor}
        borderWidth={"2px"}
        borderColor={borderColor}
        boxShadow={boxShadow}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor={borderColor}>
          <Img
            src={item.thumbnail}
            roundedTop={"sm"}
            objectFit="cover"
            h="full"
            w="full"
            alt={"Product Image"}
          />
        </Box>
        <Box p={4}>
          <Heading color="black" fontSize="2xl" noOfLines={1}>
            {item.title}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {item.description}
          </Text>
          <Box
            bg={bgColor}
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text
              fontSize={"xs"}
              fontWeight={"medium"}
              color={"black"}
              border="black"
              noOfLines={2}
            >
              ${item.price}
            </Text>
          </Box>
          <Text color={"gray.500"} noOfLines={2}>
            Stock disponible: {item.stock > 0 ? item.stock : "Agotado"}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

ItemDetailContainer.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};
