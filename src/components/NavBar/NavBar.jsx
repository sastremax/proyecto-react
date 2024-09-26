import {
  Box,
  Flex,
  Avatar,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../../assets/logoFanaticos.png";
import { CardWidget } from "../CardWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" alignItems="center">
          <Box boxSize="50px">
            <Image boxSize="50px" src={logo} alt="logo Fanáticos EdeLP" />
          </Box>
        </Box>
        <Stack direction={"row"} spacing={4}>
          <Link to="/">
            <Button variant="link" fontWeight="bold" fontSize="xl">
              Inicio
            </Button>
          </Link>
          <Link to="/category/camisetas">
            <Button variant="link" fontWeight="bold" fontSize="xl">
              Camisetas
            </Button>
          </Link>
          <Link to="/category/accesorios">
            <Button variant="link" fontWeight="bold" fontSize="xl">
              Productos
            </Button>
          </Link>
        </Stack>
        <Flex alignItems={"center"}>
          <CardWidget />
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Mi cuenta</MenuItem>
                <MenuItem>Ajustes</MenuItem>
                <MenuItem>Cerrar Sesión</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
