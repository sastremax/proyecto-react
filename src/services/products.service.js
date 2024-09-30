import axios from "axios";

export async function getAllProducts() {
    return await axios.get("https://dummyjson.com/products?limit=100");
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getAllCategories() {
    return await axios.get("https://dummyjson.com/products/categories");
}