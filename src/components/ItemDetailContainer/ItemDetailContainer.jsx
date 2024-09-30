import {
    Box,
    Button,
    Heading,
    Text,
    Img,
    Center,
    useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PropTypes from "prop-types";

export const ItemDetailContainer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(
                    `https://dummyjson.com/products/${id}`
                );
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error ", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    const addToCart = () => {
        setCartItems([...cartItems, item]);
        alert(`${item.title} agregado al carrito.`);
    };

    const borderColor = useColorModeValue("black", "white");
    const boxShadow = useColorModeValue("6px 6px 0 black", "6px 6px 0 white");
    const bgColor = useColorModeValue("white", "gray.200");

    if (error) {
        return (
            <Text>
                Error al cargar el producto. Por favor, intenta nuevamente más
                tarde.
            </Text>
        );
    }

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
                    <Text color={"gray.500"}>{item.description}</Text>
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
                        Stock disponible:{" "}
                        {item.stock > 0 ? item.stock : "Agotado"}
                    </Text>
                    <Button
                        onClick={() => navigate(-1)}
                        mt={4}
                        colorScheme="blue"
                        mr={3}
                    >
                        Volver
                    </Button>
                    <Button
                        onClick={addToCart}
                        mt={4}
                        colorScheme="teal"
                        disabled={item.stock === 0}
                    >
                        Agregar al carrito
                    </Button>
                </Box>
            </Box>
        </Center>
    );
};

ItemDetailContainer.propTypes = {
    item: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
    }),
};
