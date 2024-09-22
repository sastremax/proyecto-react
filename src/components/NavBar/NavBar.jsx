import {
  Box,
  Flex,
  Avatar,
  Button,
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
import logo from '../../assets/logoFanaticos.png';
import { CardWidget } from "../CardWidget";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box display="flex" alignItems="center">
            <Box boxSize="50px">
              <img src={logo} alt="logo Fanáticos EdeLP" />
            </Box>
          </Box>
          <Stack direction={"row"} spacing={4}>
            <Button as="a" href="#inicio" variant="link" fontWeight="bold" fontSize="xl">
              Inicio
            </Button>
            <Button as="a" href="#camisetas" variant="link" fontWeight="bold" fontSize="xl">
              Camisetas
            </Button>
            <Button as="a" href="#indumentaria" variant="link" fontWeight="bold" fontSize="xl">
              Indumentaria
            </Button>
            <Button as="a" href="#accesorios" variant="link" fontWeight="bold" fontSize="xl">
              Accesorios
            </Button>
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
