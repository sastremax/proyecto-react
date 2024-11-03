import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.service";
import PropTypes from "prop-types";

export const useItemsByCategory = (categoryId) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductsByCategory(categoryId)
            .then((res) => {
                setProductsData(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [categoryId]);
    return { productsData, loading };
};

useItemsByCategory.propTypes = {
    categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
};
