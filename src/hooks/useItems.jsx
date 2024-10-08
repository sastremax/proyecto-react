import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const useItems = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        const itemsCollection = collection(db, "products");
        getDocs(itemsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setLoading(false);
        });
    }, []);

    return { productsData, loading };
}