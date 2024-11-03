import { useContext, useState } from "react";
import { Flex, Button, Input, Heading, VStack } from "@chakra-ui/react";
import { CartContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const Payment = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { cartState } = useContext(CartContext);

    const handleCreateOrder = async () => {
        if (!name || !lastName || !email) {
            Swal.fire({
                title: "Faltaron datos!",
                text: "Debes agregar todos los datos",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            return;
        }

        const total = cartState.reduce(
            (acc, item) => acc + item.price * item.qtyItem,
            0
        );

        const orderObj = {
            buyer: { name, lastName, email },
            items: cartState.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.qtyItem,
            })),
            total,
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, orderObj);
            Swal.fire({
                icon: "success",
                title: `Orden creada correctamente, ID: ${docRef.id}`,
                confirmButtonText: "Aceptar",
            });
        } catch {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al crear la orden",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <Flex
            w="100vw"
            h="60vh"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Heading>Crear orden</Heading>
            <VStack spacing={4} w="50vw" mt={8}>
                <Input
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    placeholder="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleCreateOrder}
                >
                    Crear Orden
                </Button>
            </VStack>
        </Flex>
    );
};

