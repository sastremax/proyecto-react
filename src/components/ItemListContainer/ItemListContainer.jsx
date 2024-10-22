import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ item }) => {
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
        <Center py={6}>
            <Box
                w="xs"
                rounded={"sm"}
                my={5}
                mx={[0, 5]}
                overflow={"hidden"}
                bg="white"
                border={"1px"}
                borderColor="black"
                boxShadow={useColorModeValue(
                    "6px 6px 0 black",
                    "6px 6px 0 cyan"
                )}
            >
                <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                    <Img
                        src={getProductImage(item)}
                        roundedTop={"sm"}
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={item.title || "Imagen del producto"}
                    />
                </Box>
                <Box p={4}>
                    <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                        {item.title || "Sin título"}
                    </Heading>
                    <Text color={"gray.500"} noOfLines={2}>
                        {item.description || "Sin descripción"}
                    </Text>
                    {item.rating && (
                        <Box
                            bg="gold"
                            display={"inline-block"}
                            px={2}
                            py={1}
                            color="white"
                            mb={2}
                        >
                            <Text fontSize={"xs"} fontWeight="medium">
                                ★ {item.rating}
                            </Text>
                        </Box>
                    )}

                    {item.price && (
                        <Box
                            bg="black"
                            display={"inline-block"}
                            px={2}
                            py={1}
                            color="white"
                            mb={2}
                        >
                            <Text fontSize={"xs"} fontWeight="medium">
                                ${item.price}
                            </Text>
                        </Box>
                    )}
                    {item.stock === 0 && (
                        <Box
                            bg="red.500"
                            display={"inline-block"}
                            px={2}
                            py={1}
                            color="white"
                            mb={2}
                        >
                            <Text fontSize={"xs"} fontWeight="medium">
                                Sin stock
                            </Text>
                        </Box>
                    )}
                </Box>
                <HStack borderTop={"1px"} color="black">
                    <Link to={`/item/${item.id}`} style={{ width: "100%" }}>
                        <Flex
                            p={4}
                            alignItems="center"
                            justifyContent={"space-between"}
                            roundedBottom={"sm"}
                            cursor={"pointer"}
                            w="full"
                        >
                            <Text fontSize={"md"} fontWeight={"semibold"}>
                                Ver más
                            </Text>
                            <BsArrowUpRight />
                        </Flex>
                    </Link>
                </HStack>
            </Box>
        </Center>
    );
};

export const ItemListContainer = ({ products = [] }) => {    
    if (!products || products.length === 0) {
        return <Text>No hay productos disponibles.</Text>;
    }

    return (
        <Flex wrap={"wrap"}>
            {products
                .filter((item) => item.stock > 0)
                .map((item) => (
                    <Item key={item.id} item={item} />
                ))}
        </Flex>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        image: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.number,
        rating: PropTypes.number,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};

ItemListContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
            thumbnail: PropTypes.string,
            image: PropTypes.string,
            images: PropTypes.arrayOf(PropTypes.string),
            price: PropTypes.number,
            rating: PropTypes.number,
            stock: PropTypes.number.isRequired,
        })
    ).isRequired,
};
