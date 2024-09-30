import { Routes, Route } from "react-router-dom";
import { Category, Home, ItemDetail, NotFound } from "../pages";
import { NavBar } from "../components";
import { AllProducts } from "../components/AllProducts";

export const MainRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/productos" element={<AllProducts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
