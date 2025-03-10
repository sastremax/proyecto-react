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
import { CartWidget } from "../CartWidget";
import { useItems } from "../../hooks";
import { Link } from "react-router-dom";
import mercadoLogo from "../../assets/mercado.jpg";

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();    
    const { itemsData } = useItems("categories");

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Link to="/">
                    <Box
                        as="img"
                        src={mercadoLogo}
                        alt="Logo Mercado"
                        width="50px"
                        height="50px"
                    />
                </Link>

                <Menu>
                    <MenuButton
                        as={Button}
                        cursor="pointer"
                        style={{ marginLeft: 30 }}
                    >
                        Categorias
                    </MenuButton>
                    {itemsData && itemsData.length > 0 && (
                        <MenuList height={"300px"} overflowY={"scroll"}>
                            {itemsData.map((category) => (
                                <MenuItem key={category.id || category.slug}>
                                    <Link to={`/category/${category.slug}`}>
                                        {category.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuList>
                    )}
                </Menu>

                <Flex alignItems={"center"}>
                    <CartWidget />
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
                                    src={
                                        "https://avatars.dicebear.com/api/male/username.svg"
                                    }
                                />
                            </MenuButton>
                            <MenuList alignItems={"center"}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={"2xl"}
                                        src={
                                            "https://avatars.dicebear.com/api/male/username.svg"
                                        }
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>Username</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem>Your Servers</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
};
