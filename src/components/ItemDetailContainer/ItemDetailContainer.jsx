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

export const ItemDetailContainer = ({ item }) => {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);

    const handleAddToCart = (quantity) => {
        addItem(item, quantity);
    };

    const getProductImage = (item) => {
        if (item.thumbnail) {
            return item.thumbnail;
        } else if (item.image) {
            return item.image;
        } else if (item.images && item.images.length > 0) {
            return item.images[0];
        } else {
            return "url_de_imagen_por_defecto";
        }
    };

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
                        src={getProductImage(item)}
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
                            Stock:{" "}
                            {item.stock < 20
                                ? "Últimas unidades disponibles"
                                : item.stock}
                        </Text>
                    </Flex>
                    <ItemCount
                        stock={item.stock}
                        initial={1}
                        onAddToCart={handleAddToCart}
                    />
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