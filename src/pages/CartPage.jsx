import { Box, Text, Button } from "@chakra-ui/react";

export const cartPage = () => {
    const cartItems = [];

    return (
        <Box p={4}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Carrito de Compras
            </Text>

            {cartItems.length === 0 ? (
                <Text>Tu carrito está vacío.</Text>
            ) : (
                cartItems.map((item) => (
                    <Box
                        key={item.id}
                        p={4}
                        mb={2}
                        borderWidth="1px"
                        borderRadius="lg"
                    >
                        <Text>{item.name}</Text>
                        <Text>{`Cantidad: ${item.quantity}`}</Text>
                        <Text>{`Precio: $${item.price}`}</Text>
                        <Button colorScheme="red" mt={2}>
                            Eliminar
                        </Button>
                    </Box>
                ))
            )}

            <Button colorScheme="teal" mt={4}>
                Proceder al Pago
            </Button>
        </Box>
    );
};
