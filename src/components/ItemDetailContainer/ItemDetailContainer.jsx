import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemCount";
import PropTypes from "prop-types";

const getStockMessage = (stock) => {
    if (stock > 0 && stock < 20) {
        return "Últimas unidades disponibles";
    } else if (stock > 0) {
        return `Stock: ${stock}`;
    } else {
        return "Sin stock";
    }
};

export const ItemDetailContainer = ({ item }) => {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);

    const handleAddToCart = (quantity) => {
        addItem(item, quantity);
    };

    const fetchProductImage = (item) => {
        return (
            item.thumbnail ||
            item.image ||
            item.images?.[0] ||
            "url_de_imagen_por_defecto"
        );
    };

    const stockMessage = getStockMessage(item.stock);

    return (
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex>
                    <Image
                        rounded={"md"}
                        alt={"Imagen del producto"}
                        src={fetchProductImage(item)}
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                        h={{ base: "100%", sm: "400px", lg: "500px" }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                        >
                            {item.title}
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.900", "gray.400")}
                            fontWeight={300}
                            fontSize={"2xl"}
                        >
                            ${item.price} USD
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    "gray.200",
                                    "gray.600"
                                )}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text fontSize={"lg"}>{item.description}</Text>
                        </VStack>
                    </Stack>
                    <Flex>
                        <Text>
                            Stock: {stockMessage}
                        </Text>
                    </Flex>
                    {item.stock > 0 ? (
                        <ItemCount
                            stock={item.stock}
                            initial={1}
                            onAddToCart={handleAddToCart}
                        />
                    ) : (
                        <Text color="red.500" fontWeight="bold">
                            Producto no disponible
                        </Text>
                    )}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <Button
                            onClick={() => navigate(-1)}
                            mt={4}
                            colorScheme="teal"
                        >
                            Volver
                        </Button>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
};

ItemDetailContainer.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        rating: PropTypes.number,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        image: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),        
    }).isRequired,
};