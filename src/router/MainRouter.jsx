import { Routes, Route, Navigate } from "react-router-dom";
import { Category, Events, ItemDetail, NotFound } from "../pages";
import { NavBar } from "../components";
import { AllProducts } from "../components/AllProducts";

export const MainRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/productos" />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/productos" element={<AllProducts />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </>
    );
};
