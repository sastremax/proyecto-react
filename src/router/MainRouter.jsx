import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ItemDetail, NotFound } from "..Pages/";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};
