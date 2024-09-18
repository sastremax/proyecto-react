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

const ItemListContainer = ({ products }) => {

  const boxShadow = useColorModeValue("6px 6px 0 black");

  return products.map((item) => {
    return (
      <Center py={6} key={item.id}>
        <Box
          w="xs"
          rounded={"lg"}
          my={5}
          mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          borderWidth={"2px"}
          borderColor="black"          
          boxShadow={boxShadow}
        >
          <Box h={"200px"} borderBottom={"1px"} borderColor="black">
            <Img
              src={
                "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              w="full"
              alt={"Blog Image"}
            />
          </Box>
          <Box p={4}>            
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              { item.name }
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              { item.description }
            </Text>            
            <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
              <Text fontSize={"xs"} fontWeight={"medium"} color={"white"} noOfLines={2}>
              ${ item.price }
              </Text>              
            </Box>
            <Text color={"gray.500"} noOfLines={2}>
                Stock disponible: { item.stock > 0 ? item.stock : "Agotado"}
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
              <Text fontSize={"md"} fontWeight={"semibold"}>
                Ver más
              </Text>
              <BsArrowUpRight />
            </Flex>
          </HStack>
        </Box>
      </Center>
    );
  });
};

ItemListContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
};

export default ItemListContainer;
