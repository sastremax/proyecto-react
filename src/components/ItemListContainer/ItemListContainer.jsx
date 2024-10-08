import PropTypes from "prop-types";
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

const Item = ({ item }) => {
  const borderColor = useColorModeValue("black", "white");
  const boxShadow = useColorModeValue("6px 6px 0 black", "6px 6px 0 white");
  const bgColor = useColorModeValue("white", "gray.200");
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
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
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
        <HStack borderTop={"1px"} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Link to={`/item/${item.id}`}>
              <Text fontSize={"md"} fontWeight={"semibold"}>
                Ver más
              </Text>
            </Link>
            <BsArrowUpRight />
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}

export const ItemListContainer = ({ products }) => {
  
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={6}>
      {products.map((item) => {
        return <Item key={Number(item.id)} item={{ ...item, id: Number(item.id) }} />;
      })}      
    </Flex>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

ItemListContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
};

